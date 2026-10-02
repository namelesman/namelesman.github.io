"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "./language-provider"
import { playKeystroke } from "../lib/audio"
import { answerLocally } from "../lib/local-answers"

type ChatMessage = {
  role: "user" | "assistant"
  content: string
  // Resposta que não veio da IA (aviso ou resposta local): fica fora do histórico enviado
  offline?: boolean
}

export function useAiChat() {
  const { t, language } = useLanguage()
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [pending, setPending] = useState(false)

  function updateLast(update: (last: ChatMessage) => ChatMessage) {
    setMessages((prev) => [...prev.slice(0, -1), update(prev[prev.length - 1])])
  }

  async function send(text: string) {
    const question = text.trim()
    if (!question || pending) return

    const history = [...messages.filter((m) => !m.offline && m.content), { role: "user" as const, content: question }]
    setMessages((prev) => [...prev, { role: "user", content: question }, { role: "assistant", content: "" }])
    setPending(true)

    const offline = (content: string) => updateLast(() => ({ role: "assistant", content, offline: true }))
    // Com a IA ocupada ou fora do ar, responde com os dados do próprio site
    const answerFromSite = () => {
      const local = answerLocally(question, language)
      offline(local ? `${t("chatBusy")}\n\n${local}` : t("chatNoLocal"))
    }

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history.map(({ role, content }) => ({ role, content })) }),
      })
      if (res.status === 429) {
        offline(t("chatRateLimited"))
        return
      }
      if (!res.ok || !res.body) {
        answerFromSite()
        return
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let answer = ""
      for (;;) {
        const { done, value } = await reader.read()
        if (done) break
        answer += decoder.decode(value, { stream: true })
        const partial = answer
        updateLast((last) => ({ ...last, content: partial }))
      }
      if (!answer.trim()) answerFromSite()
    } catch {
      answerFromSite()
    } finally {
      setPending(false)
    }
  }

  return { messages, pending, send }
}

type TerminalChatProps = ReturnType<typeof useAiChat> & {
  onBack: () => void
}

export function TerminalChat({ messages, pending, send, onBack }: TerminalChatProps) {
  const { t, language } = useLanguage()
  const [input, setInput] = useState("")
  const logRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight })
  }, [messages])

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    // O cmdk trata Enter e setas no elemento raiz; aqui o Enter é do chat
    if (e.key === "Enter") {
      e.preventDefault()
      e.stopPropagation()
      if (pending) return
      send(input)
      setInput("")
      return
    }
    if (e.key === "ArrowUp" || e.key === "ArrowDown") e.stopPropagation()
    playKeystroke()
  }

  return (
    <>
      <div className="terminal-chat" ref={logRef} aria-live="polite">
        <p className="terminal-chat-line assistant">
          <span className="terminal-chat-who">thiago-bot&gt;</span> {t("chatWelcome")}
        </p>
        {messages.map((m, i) => (
          <p key={i} className={`terminal-chat-line ${m.role}${m.offline ? " offline" : ""}`}>
            <span className="terminal-chat-who">{m.role === "user" ? (language === "pt" ? "visitante$" : "visitor$") : "thiago-bot>"}</span>{" "}
            {m.content || <span className="terminal-chat-pending">{t("chatThinking")}</span>}
          </p>
        ))}
      </div>

      <div className="terminal-prompt">
        <span className="terminal-caret">?</span>
        <input
          className="terminal-chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder={t("chatPlaceholder")}
          maxLength={800}
          autoFocus
        />
      </div>

      <div className="terminal-hint">
        <button type="button" className="terminal-back" onClick={onBack}>
          ← {t("chatBack")}
        </button>
        <span>{t("chatHint")}</span>
      </div>
    </>
  )
}
