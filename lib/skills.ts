import type { TechName } from "./tech-icons"
import type { translations } from "./translations"

// Família: linguagem (ou base, como o Docker) seguida dos frameworks e ferramentas usados com ela.
// Família sem "uses" marca só que o item é uma linguagem.
export type SkillFamily = { base: TechName[]; uses: TechName[] }
export type SkillItem = TechName | SkillFamily

export const SKILL_GROUPS: { title: keyof typeof translations["en"]; skills: SkillItem[] }[] = [
  { title: "frontend", skills: [{ base: ["JS", "TypeScript"], uses: ["React", "Next"] }, "Tailwind"] },
  {
    title: "backend",
    skills: [
      { base: ["Python"], uses: ["Flask", "FastAPI"] },
      { base: ["Node"], uses: ["Nestjs"] },
      { base: ["Java"], uses: [] },
      { base: ["C/C++"], uses: [] },
      "REST API",
      "OAuth 2.0",
      "OIDC",
    ],
  },
  { title: "database", skills: ["PostgreSQL", "MongoDB", "MySQL", "Oracle DB"] },
  {
    title: "devopsAi",
    skills: [
      { base: ["Docker"], uses: ["Docker Compose"] },
      "TensorFlow",
      "ML",
      "AIOrchestration",
      "MCP",
      "TDD",
      "Playwright",
      "Git",
      "GitHub Actions",
      "Nginx",
      "AWS",
      "Oracle Cloud",
      "Postman",
    ],
  },
]

/** Texto de um item para o terminal e o chat, ex.: "Python (Flask, FastAPI)". */
export function skillText(item: SkillItem, label: (name: TechName) => string = (name) => name) {
  if (typeof item === "string") return label(item)
  const base = item.base.map(label).join(" / ")
  return item.uses.length > 0 ? `${base} (${item.uses.map(label).join(", ")})` : base
}
