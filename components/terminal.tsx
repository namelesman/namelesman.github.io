"use client"

import { useEffect, useState } from "react"
import { Command } from "cmdk"
import { useLanguage } from "./language-provider"
import { TerminalChat, useAiChat } from "./terminal-chat"
import { TerminalPacman } from "./terminal-pacman"
import { playBeep, playKeystroke } from "../lib/audio"
import { goToSheet, isTypingTarget, openProject } from "../lib/book"
import { CV_DOWNLOAD_NAME, LINKS } from "../lib/links"
import { PROJECTS } from "../lib/projects"
import { catContact, catEducation, catExperience, catSkills, listProjects, whoami } from "../lib/local-answers"
import { translations } from "../lib/translations"

const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"]

function downloadCv() {
  const a = document.createElement("a")
  a.href = LINKS.cv
  a.download = CV_DOWNLOAD_NAME
  a.click()
}

export function Terminal() {
  const { t, language, setLanguage } = useLanguage()
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")
  const [output, setOutput] = useState<string | null>(null)
  const [mode, setMode] = useState<"commands" | "chat" | "pacman">("commands")
  // Fica fora do diálogo para o histórico da conversa sobreviver ao fechar e reabrir
  const chat = useAiChat()

  // Easter egg: código Konami abre o Pac-Man direto no terminal
  useEffect(() => {
    let progress = 0
    function onKeyDown(e: KeyboardEvent) {
      if (isTypingTarget(e.target)) return
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key
      progress = key === KONAMI[progress] ? progress + 1 : key === KONAMI[0] ? 1 : 0
      if (progress === KONAMI.length) {
        progress = 0
        playBeep()
        setMode("pacman")
        setOpen(true)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const isCtrlK = (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k"
      const isSlash = e.key === "/" && !isTypingTarget(e.target)
      if (!isCtrlK && !isSlash) return
      e.preventDefault()
      setOpen((wasOpen) => {
        if (!wasOpen) playBeep()
        return !wasOpen
      })
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  function onOpenChange(next: boolean) {
    if (next) playBeep()
    setOpen(next)
    if (!next) {
      setSearch("")
      setOutput(null)
      setMode("commands")
    }
  }

  // Fecha o terminal antes de agir, para a animação do livro ficar visível
  function run(action: () => void) {
    onOpenChange(false)
    action()
  }

  function hire() {
    setOutput(t("sudoGranted"))
    setTimeout(() => run(() => goToSheet(2)), 1200)
  }

  function startChat(question?: string) {
    setMode("chat")
    setSearch("")
    if (question) chat.send(question)
  }

  // Comandos que só imprimem texto no terminal, com os dados do próprio site
  const tr = translations[language]
  const infoCommands = [
    { cmd: "whoami", label: t("cmdWhoami"), output: () => whoami(tr) },
    { cmd: "ls projetos", label: t("latestProject"), output: () => listProjects(tr) },
    { cmd: "cat skills.txt", label: t("mySkills"), output: () => catSkills(tr) },
    { cmd: "cat experiencia.txt", label: t("workExperience"), output: () => catExperience(tr) },
    { cmd: "cat formacao.txt", label: t("education"), output: () => catEducation(tr) },
    { cmd: "cat contato.txt", label: t("cmdContact"), output: () => catContact(tr) },
  ]

  const query = search.trim()
  const showSudo = query.toLowerCase().startsWith("sudo")
  const showGames = /^(play|pac|game|jog)/i.test(query)

  return (
    <>
      <button
        type="button"
        className="terminal-toggle"
        onClick={() => onOpenChange(true)}
        aria-label={t("terminalOpen")}
        title={t("terminalOpen")}
      >
        <i className="bx bx-terminal" />
      </button>

      <Command.Dialog
        open={open}
        onOpenChange={onOpenChange}
        label="Terminal"
        overlayClassName="terminal-overlay"
        contentClassName={`terminal-window${mode === "pacman" ? " terminal-window--game" : ""}`}
      >
        <div className="terminal-titlebar">
          <span className="terminal-dot" />
          <span className="terminal-dot" />
          <span className="terminal-dot" />
          <span className="terminal-title">thiago@portfolio: {mode === "pacman" ? "~/games/pacman" : "~"}</span>
        </div>

        {mode === "pacman" ? (
          <TerminalPacman onExit={() => setMode("commands")} />
        ) : mode === "chat" ? (
          <TerminalChat {...chat} onBack={() => setMode("commands")} />
        ) : (
          <>
            <div className="terminal-prompt">
              <span className="terminal-caret">$</span>
              <Command.Input
                value={search}
                onValueChange={(value) => {
                  setSearch(value)
                  setOutput(null)
                }}
                onKeyDown={() => playKeystroke()}
                placeholder={t("terminalPlaceholder")}
                autoFocus
              />
            </div>

            {output ? (
              <p className="terminal-output">{output}</p>
            ) : (
              <Command.List>
                {showGames && (
                  <Command.Group heading="games">
                    <Command.Item value="play pacman" onSelect={() => setMode("pacman")}>
                      <code>play pacman</code>
                      <span>{t("cmdPacman")}</span>
                    </Command.Item>
                  </Command.Group>
                )}

                {showSudo && (
                  <Command.Group heading="sudo">
                    <Command.Item value="sudo hire thiago" onSelect={hire}>
                      <code>sudo hire thiago</code>
                      <span>{t("sudoHire")}</span>
                    </Command.Item>
                  </Command.Group>
                )}

                <Command.Group heading={t("terminalInfo")}>
                  {infoCommands.map(({ cmd, label, output }) => (
                    <Command.Item key={cmd} value={`${cmd} ${label}`} onSelect={() => setOutput(output())}>
                      <code>{cmd}</code>
                      <span>{label}</span>
                    </Command.Item>
                  ))}
                </Command.Group>

                <Command.Group heading={t("terminalNav")}>
                  <Command.Item value={`cd ~/perfil ${t("cmdProfile")}`} onSelect={() => run(() => goToSheet(0))}>
                    <code>cd ~/perfil</code>
                    <span>{t("cmdProfile")}</span>
                  </Command.Item>
                  <Command.Item value={`cd ~/skills ${t("cmdSkills")}`} onSelect={() => run(() => goToSheet(1))}>
                    <code>cd ~/skills</code>
                    <span>{t("cmdSkills")}</span>
                  </Command.Item>
                  <Command.Item value={`cd ~/contato ${t("cmdContact")}`} onSelect={() => run(() => goToSheet(2))}>
                    <code>cd ~/contato</code>
                    <span>{t("cmdContact")}</span>
                  </Command.Item>
                </Command.Group>

                <Command.Group heading={t("latestProject")}>
                  {PROJECTS.map((project) => (
                    <Command.Item
                      key={project.id}
                      value={`open ${project.repoName} ${t(project.name)}`}
                      keywords={[t(project.tag), ...project.tech]}
                      onSelect={() => run(() => openProject(project.id))}
                    >
                      <code>open {project.repoName}</code>
                      <span>
                        {project.icon} {t(project.name)}
                      </span>
                    </Command.Item>
                  ))}
                </Command.Group>

                <Command.Group heading={t("terminalActions")}>
                  <Command.Item value={`wget curriculo.pdf ${t("downloadCv")}`} keywords={["cv", "resume"]} onSelect={() => run(downloadCv)}>
                    <code>wget curriculo.pdf</code>
                    <span>{t("downloadCv")}</span>
                  </Command.Item>
                  <Command.Item
                    value={`lang ${language === "pt" ? "en" : "pt"} ${t("cmdLanguage")}`}
                    keywords={["idioma", "language"]}
                    onSelect={() => run(() => setLanguage(language === "pt" ? "en" : "pt"))}
                  >
                    <code>lang {language === "pt" ? "en" : "pt"}</code>
                    <span>{t("cmdLanguage")}</span>
                  </Command.Item>
                  <Command.Item value={`chat ${t("cmdChat")}`} keywords={["ia", "ai", "ask", "pergunta"]} onSelect={() => startChat()}>
                    <code>chat</code>
                    <span>{t("cmdChat")}</span>
                  </Command.Item>
                  <Command.Item value={`open github ${t("cmdGithub")}`} onSelect={() => run(() => window.open(LINKS.github, "_blank", "noopener"))}>
                    <code>open github</code>
                    <span>{t("cmdGithub")}</span>
                  </Command.Item>
                  <Command.Item value={`open linkedin ${t("cmdLinkedin")}`} onSelect={() => run(() => window.open(LINKS.linkedin, "_blank", "noopener"))}>
                    <code>open linkedin</code>
                    <span>{t("cmdLinkedin")}</span>
                  </Command.Item>
                </Command.Group>

                {/* Qualquer texto que não seja comando vira uma pergunta para a IA */}
                {query && !showSudo && !showGames && (
                  <Command.Group heading="IA" forceMount>
                    <Command.Item value="__ask__" forceMount onSelect={() => startChat(query)}>
                      <code>ask &quot;{query}&quot;</code>
                      <span>{t("chatAsk")}</span>
                    </Command.Item>
                  </Command.Group>
                )}
              </Command.List>
            )}

            <div className="terminal-hint">{t("terminalHint")}</div>
          </>
        )}
      </Command.Dialog>
    </>
  )
}
