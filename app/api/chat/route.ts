import { NextResponse } from "next/server"
import { ApiError, GoogleGenAI, type Content } from "@google/genai"
import { CHAT_SYSTEM_PROMPT } from "@/lib/chat-context"

export const runtime = "nodejs"

const MAX_MESSAGES = 12
const MAX_MESSAGE_CHARS = 800

// Na faixa gratuita o Gemini recusa pedidos quando está lotado. Tentamos de novo e, se
// continuar cheio, passamos para um modelo mais leve. A ordem pode ser trocada pela env.
const MODELS = (process.env.GEMINI_MODELS ?? "gemini-3.6-flash,gemini-3.5-flash-lite,gemini-2.5-flash-lite")
  .split(",")
  .map((m) => m.trim())
  .filter(Boolean)
const RETRYABLE_STATUS = new Set([429, 500, 503, 504])
const RETRY_DELAY_MS = 1000
// Se o modelo não começar a responder nesse tempo, desistimos dele e seguimos para o próximo
const FIRST_CHUNK_TIMEOUT_MS = 8000

// Limite por IP em memória. Na Vercel cada instância tem a sua própria memória, então é uma
// proteção básica contra abuso, não um limite global.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX = 15
const requestsByIp = new Map<string, number[]>()

function isRateLimited(ip: string) {
  const now = Date.now()
  const recent = (requestsByIp.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS)
  recent.push(now)
  requestsByIp.set(ip, recent)
  return recent.length > RATE_LIMIT_MAX
}

type ChatPayload = {
  messages?: { role?: unknown; content?: unknown }[]
}

function parseMessages(payload: ChatPayload): Content[] | null {
  if (!Array.isArray(payload?.messages)) return null

  const messages = payload.messages.slice(-MAX_MESSAGES).map((m) => ({
    role: m?.role,
    content: typeof m?.content === "string" ? m.content.trim().slice(0, MAX_MESSAGE_CHARS) : "",
  }))

  const valid = messages.every(
    (m) => (m.role === "user" || m.role === "assistant") && m.content.length > 0,
  )
  if (!valid || messages.length === 0) return null
  // A conversa precisa começar e terminar com o visitante
  if (messages[0].role !== "user" || messages[messages.length - 1].role !== "user") return null

  return messages.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }))
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

/**
 * Abre o stream no primeiro modelo que aceitar o pedido. Lê o primeiro pedaço ainda aqui
 * dentro, porque é quando o Gemini costuma recusar por fila; depois disso não dá mais
 * para trocar de modelo sem duplicar texto.
 */
async function openStream(ai: GoogleGenAI, contents: Content[]) {
  for (const model of MODELS) {
    for (let attempt = 0; attempt < 2; attempt++) {
      const abort = new AbortController()
      const timer = setTimeout(() => abort.abort(), FIRST_CHUNK_TIMEOUT_MS)
      try {
        const stream = await ai.models.generateContentStream({
          model,
          contents,
          config: {
            systemInstruction: CHAT_SYSTEM_PROMPT,
            maxOutputTokens: 2048,
            // O SDK repete pedidos recusados sozinho (com esperas longas); as tentativas
            // e a troca de modelo ficam por conta deste loop
            httpOptions: { retryOptions: { attempts: 1 } },
            abortSignal: abort.signal,
          },
        })
        const iterator = stream[Symbol.asyncIterator]()
        const first = await iterator.next()
        return { iterator, first }
      } catch (err) {
        const timedOut = abort.signal.aborted
        const retryable = timedOut || (err instanceof ApiError && RETRYABLE_STATUS.has(err.status))
        console.error(`Chat: ${model} falhou (tentativa ${attempt + 1})`, timedOut ? "timeout" : err instanceof ApiError ? err.status : err)
        // Erro que não é de fila (ex.: modelo inexistente) ou demora demais: passa ao próximo modelo.
        // Lotado: espera e repete uma vez no mesmo modelo antes de passar adiante
        if (!retryable || timedOut) break
        if (attempt === 0) await sleep(RETRY_DELAY_MS)
      } finally {
        clearTimeout(timer)
      }
    }
  }
  return null
}

export async function POST(req: Request) {
  const apiKey = process.env.GOOGLE_API_KEY
  if (!apiKey) {
    return NextResponse.json({ ok: false, error: "unavailable" }, { status: 503 })
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local"
  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 })
  }

  let contents: Content[] | null
  try {
    contents = parseMessages((await req.json()) as ChatPayload)
  } catch {
    contents = null
  }
  if (!contents) {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 })
  }

  const opened = await openStream(new GoogleGenAI({ apiKey }), contents)
  if (!opened) {
    // O cliente responde com os dados do site quando a IA está ocupada
    return NextResponse.json({ ok: false, error: "busy" }, { status: 503 })
  }

  const encoder = new TextEncoder()
  const body = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        let result = opened.first
        while (!result.done) {
          if (result.value.text) controller.enqueue(encoder.encode(result.value.text))
          result = await opened.iterator.next()
        }
      } catch (err) {
        // O cliente trata uma resposta vazia ou interrompida como erro
        console.error("Chat: stream interrompido", err)
      } finally {
        controller.close()
      }
    },
  })

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  })
}
