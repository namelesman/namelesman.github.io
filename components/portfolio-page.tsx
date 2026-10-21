"use client";
import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "./language-provider";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PROJECTS, GITHUB_USER, repoUrl } from "@/lib/projects";
import { TechIcon } from "@/lib/tech-icons";
import { OPEN_PROJECT_EVENT } from "@/lib/book";

function ReadmeViewer({ repoName }: { repoName: string }) {
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://raw.githubusercontent.com/${GITHUB_USER}/${repoName}/main/README.md`)
      .then((res) => {
        if (res.ok) return res.text();
        // Fallback para branch master caso não ache na main
        return fetch(`https://raw.githubusercontent.com/${GITHUB_USER}/${repoName}/master/README.md`).then(r => {
          if (r.ok) return r.text();
          throw new Error("Não encontrado");
        });
      })
      .then((text) => {
        setContent(text);
        setLoading(false);
      })
      .catch(() => {
        setContent("*README.md não encontrado para este repositório ou não existe.*");
        setLoading(false);
      });
  }, [repoName]);

  if (loading) {
    return <div style={{ marginTop: "1.5rem", color: "var(--main-color)" }}>Carregando README.md...</div>;
  }

  return (
    <div className="markdown-body">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}

export function PortfolioPage() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const onOpenProject = (e: Event) => setSelectedProject((e as CustomEvent<string>).detail);
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !document.querySelector("[cmdk-dialog]")) setSelectedProject(null);
    };
    window.addEventListener(OPEN_PROJECT_EVENT, onOpenProject);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener(OPEN_PROJECT_EVENT, onOpenProject);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const activeProject = PROJECTS.find(p => p.id === selectedProject);

  // Ao trocar de projeto, a janela volta para o topo
  useEffect(() => {
    popoverRef.current?.scrollTo({ top: 0 });
  }, [selectedProject]);

  const popoverContent = activeProject ? (
    // Fundo escurecido cobrindo a tela; clicar fora da janela fecha
    <div className="speechWindow" onClick={() => setSelectedProject(null)}>
      <div className="popover" ref={popoverRef} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={t(activeProject.name)}>
        {/* Barra fixa no topo: o botão de fechar acompanha a rolagem em READMEs longos */}
        <div className="popoverBar">
          <span className="icon">{activeProject.icon}</span>
          <div className="popoverTitle">
            <h3 className="popoverName">{t(activeProject.name)}</h3>
            <span className="popoverTag">{t(activeProject.tag)}</span>
          </div>
          <button type="button" className="closePopover" onClick={() => setSelectedProject(null)} aria-label={t("closeWindow")}>
            <i className="bx bx-x" />
          </button>
        </div>

        <p className="popoverDesc">
          {t(activeProject.desc)}
          <br /><br />
          <strong style={{ color: "var(--main-color)" }}>{t("curiosityLabel")}</strong> 
          <span style={{ fontStyle: "italic" }}>{t(activeProject.curiosity)}</span>
        </p>

        {activeProject.repoName ? (
          <ReadmeViewer repoName={activeProject.repoName} />
        ) : (
          <p className="popoverDesc" style={{ marginTop: "1rem", opacity: 0.8 }}>
            <i className="bx bx-lock-alt" /> {t("privateCode")}
          </p>
        )}
        
        <div className="popoverTech">
          <p>{t("techUsed")}</p>
          <div className="icons">
            {activeProject.tech.map((tech) => (
              <span key={tech}>
                <TechIcon name={tech} />
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="popoverLinks">
          {activeProject.repoName && (
            <a
              href={repoUrl(activeProject) ?? undefined}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              {t("sourceCode")}
            </a>
          )}
          {activeProject.demo && (
            <a
              href={activeProject.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ background: "transparent", color: "var(--main-color)" }}
            >
              {t("livePreview")}
            </a>
          )}
        </div>
      </div>
    </div>
  ) : null;

  return (
    <div className="page-content">
      <h1 className="tittle">{t("latestProject")}</h1>

      <div className="portfolio-list">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className={`portfolio-row ${selectedProject === project.id ? "selected" : ""}`}
            onClick={() => setSelectedProject(project.id)}
          >
            <span className="icon">{project.icon}</span>
            <div className="info">
              <h2 className="name">{t(project.name)}</h2>
              <span className="tag">{t(project.tag)}</span>
            </div>
            <span className="hover-hint">
              <i className="bx bx-chevron-right" />
            </span>
          </div>
        ))}
      </div>

      {mounted && popoverContent && createPortal(popoverContent, document.body)}
    </div>
  );
}