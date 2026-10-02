"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "./language-provider";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PROJECTS, GITHUB_USER, repoUrl } from "@/lib/projects";
import { TechIcon } from "@/lib/tech-icons";

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

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeProject = PROJECTS.find(p => p.id === selectedProject);

  const popoverContent = activeProject ? (
    <div className="speechWindow">
      <div className="popover">
        <button className="closePopover" onClick={() => setSelectedProject(null)}>
          <i className="bx bx-x" />
        </button>
        <div className="popoverHeader">
          <span className="icon" style={{ fontSize: "2rem" }}>{activeProject.icon}</span>
          <div>
            <h3 className="popoverName">{t(activeProject.name)}</h3>
            <span className="tag" style={{ background: "var(--main-color)", color: "#000", padding: "0.15rem 0.6rem", borderRadius: "999px", fontSize: "0.78rem", fontWeight: "600" }}>
              {t(activeProject.tag)}
            </span>
          </div>
        </div>
        
        <p className="popoverDesc">
          {t(activeProject.desc)}
          <br /><br />
          <strong style={{ color: "var(--main-color)" }}>{t("curiosityLabel")}</strong> 
          <span style={{ fontStyle: "italic" }}>{t(activeProject.curiosity)}</span>
        </p>

        <ReadmeViewer repoName={activeProject.repoName} />
        
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
          <a
            href={repoUrl(activeProject)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            {t("sourceCode")}
          </a>
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