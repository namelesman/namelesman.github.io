"use client"

import { useEffect, useState } from "react"
import { Command } from "cmdk"
import { useLanguage } from "./language-provider"
import { playBeep, playKeystroke } from "../lib/audio"
import { goToSheet, isTypingTarget, openProject } from "../lib/book"
import { CV_DOWNLOAD_NAME, LINKS } from "../lib/links"
import { PROJECTS } from "../lib/projects"

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

  const showSudo = search.trim().toLowerCase().startsWith("sudo")

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
        contentClassName="terminal-window"
      >
        <div className="terminal-titlebar">
          <span className="terminal-dot" />
          <span className="terminal-dot" />
          <span className="terminal-dot" />
          <span className="terminal-title">thiago@portfolio: ~</span>
        </div>

        <div className="terminal-prompt">
          <span className="terminal-caret">$</span>
          <Command.Input
            value={search}
            onValueChange={setSearch}
            onKeyDown={() => playKeystroke()}
            placeholder={t("terminalPlaceholder")}
            autoFocus
          />
        </div>

        {output ? (
          <p className="terminal-output">{output}</p>
        ) : (
          <Command.List>
            <Command.Empty>
              bash: {search}: {t("terminalEmpty")}
            </Command.Empty>

            {showSudo && (
              <Command.Group heading="sudo">
                <Command.Item value="sudo hire thiago" onSelect={hire}>
                  <code>sudo hire thiago</code>
                  <span>{t("sudoHire")}</span>
                </Command.Item>
              </Command.Group>
            )}

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
              <Command.Item value={`open github ${t("cmdGithub")}`} onSelect={() => run(() => window.open(LINKS.github, "_blank", "noopener"))}>
                <code>open github</code>
                <span>{t("cmdGithub")}</span>
              </Command.Item>
              <Command.Item value={`open linkedin ${t("cmdLinkedin")}`} onSelect={() => run(() => window.open(LINKS.linkedin, "_blank", "noopener"))}>
                <code>open linkedin</code>
                <span>{t("cmdLinkedin")}</span>
              </Command.Item>
            </Command.Group>
          </Command.List>
        )}

        <div className="terminal-hint">{t("terminalHint")}</div>
      </Command.Dialog>
    </>
  )
}
