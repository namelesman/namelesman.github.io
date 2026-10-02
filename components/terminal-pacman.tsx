"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "./language-provider"
import { playBeep, playKeystroke } from "../lib/audio"

const BOOT_LINES = [
  "$ ./pacman --fullscreen",
  "loading sprites ............ ok",
  "building maze 21x23 ........ ok",
  "spawning ghosts (BFS) ...... ok",
  "insert coin ................ ok",
]
const BOOT_LINE_DELAY_MS = 220

export function TerminalPacman({ onExit }: { onExit: () => void }) {
  const { t } = useLanguage()
  const [bootLine, setBootLine] = useState(0)
  const [run, setRun] = useState(0)
  const frameRef = useRef<HTMLIFrameElement>(null)
  const booted = bootLine >= BOOT_LINES.length

  // Imprime as linhas de boot uma a uma antes de ligar a tela do jogo
  useEffect(() => {
    if (booted) {
      playBeep()
      return
    }
    const timer = setTimeout(() => {
      playKeystroke()
      setBootLine((line) => line + 1)
    }, BOOT_LINE_DELAY_MS)
    return () => clearTimeout(timer)
  }, [bootLine, booted])

  // O jogo roda num iframe; o Esc lá dentro chega aqui como mensagem
  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.origin === window.location.origin && e.data === "pacman:exit") onExit()
    }
    window.addEventListener("message", onMessage)
    return () => window.removeEventListener("message", onMessage)
  }, [onExit])

  function focusGame() {
    frameRef.current?.contentWindow?.focus()
  }

  return (
    <>
      <div className="terminal-game">
        {booted ? (
          <iframe
            key={run}
            ref={frameRef}
            src="/pacman/index.html"
            title="Pac-Man"
            className="terminal-game-screen"
            onLoad={focusGame}
          />
        ) : (
          <pre className="terminal-game-boot">{BOOT_LINES.slice(0, bootLine).join("\n")}</pre>
        )}
      </div>

      <div className="terminal-hint">
        <span className="terminal-hint-actions">
          <button type="button" className="terminal-back" onClick={onExit}>
            ← {t("chatBack")}
          </button>
          {booted && (
            <button type="button" className="terminal-back" onClick={() => setRun((r) => r + 1)}>
              ↻ {t("pacmanRestart")}
            </button>
          )}
        </span>
        <span>{t("pacmanHint")}</span>
      </div>
    </>
  )
}
