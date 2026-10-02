import { playPageTurn } from "./audio"

// Uma "folha" é uma página da direita que vira. Sheet 0 = perfil + experiência,
// 1 = skills + projetos, 2 = contato.
export const SHEET_SLUGS: Record<string, number> = {
  perfil: 0,
  profile: 0,
  experiencia: 0,
  experience: 0,
  skills: 1,
  habilidades: 1,
  projetos: 1,
  projects: 1,
  contato: 2,
  contact: 2,
}
const SHEET_HASH = ["", "#projetos", "#contato"]

const TURN_DURATION = 500
// Duração da transição CSS de .book-page.page-right (globals.css)
export const TURN_TRANSITION = 1000
const TURN_STAGGER = 200

// Estado guardado no próprio elemento do livro (e não em variáveis do módulo), pois o bundler
// pode criar mais de uma instância deste módulo e o livro precisa ser a única fonte de verdade
function bookState() {
  return document.querySelector<HTMLElement>(".book")?.dataset ?? ({} as DOMStringMap)
}

function sheets() {
  return Array.from(document.querySelectorAll<HTMLElement>(".book-page.page-right"))
}

export function getSheet() {
  return sheets().filter((page) => page.classList.contains("turn")).length
}

export function getSheetCount() {
  return sheets().length
}

function turn(page: HTMLElement, index: number, forward: boolean) {
  page.classList.toggle("turn", forward)
  setTimeout(() => {
    page.style.zIndex = String(forward ? 20 + index : 20 - index)
  }, TURN_DURATION)
}

/** Vira as páginas até a folha `target`, uma de cada vez. */
export function goToSheet(target: number, { sound = true, updateHash = true } = {}) {
  const state = bookState()
  if (state.ready !== "true" || state.busy === "true") return
  const pages = sheets()
  const clamped = Math.max(0, Math.min(target, pages.length))
  const current = getSheet()
  if (clamped === current) return

  if (sound) playPageTurn()
  state.busy = "true"

  const forward = clamped > current
  const order = forward
    ? pages.map((_, i) => i).slice(current, clamped)
    : pages.map((_, i) => i).slice(clamped, current).reverse()

  order.forEach((index, step) => {
    setTimeout(() => turn(pages[index], index, forward), step * TURN_STAGGER)
  })
  setTimeout(() => {
    state.busy = "false"
  }, (order.length - 1) * TURN_STAGGER + TURN_TRANSITION)

  if (updateHash) {
    history.replaceState(null, "", SHEET_HASH[clamped] || location.pathname + location.search)
  }
}

export function isTypingTarget(target: EventTarget | null) {
  return (
    target instanceof HTMLElement &&
    (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName))
  )
}

export function nextSheet() {
  goToSheet(getSheet() + 1)
}

export function prevSheet() {
  goToSheet(getSheet() - 1)
}

export function sheetFromHash(hash: string) {
  const slug = decodeURIComponent(hash.replace(/^#/, "")).toLowerCase()
  return slug in SHEET_SLUGS ? SHEET_SLUGS[slug] : null
}

/** Chamado quando a animação de abertura termina; antes disso a navegação é ignorada. */
export function markBookReady() {
  bookState().ready = "true"
}

// Abrir um projeto a partir de fora da página de projetos (ex.: terminal)
export const OPEN_PROJECT_EVENT = "portfolio:open-project"

export function openProject(id: string) {
  goToSheet(1)
  window.dispatchEvent(new CustomEvent(OPEN_PROJECT_EVENT, { detail: id }))
}
