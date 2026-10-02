import type { TechName } from "./tech-icons"
import type { translations } from "./translations"

export const SKILL_GROUPS: { title: keyof typeof translations["en"]; skills: TechName[] }[] = [
  { title: "frontend", skills: ["JS", "Next", "React", "Tailwind"] },
  { title: "ai", skills: ["TensorFlow", "ML"] },
  { title: "backend", skills: ["Java", "Python", "Node", "Nestjs", "TypeScript", "FastAPI", "C/C++"] },
  { title: "database", skills: ["PostgreSQL", "MongoDB", "MySQL"] },
  { title: "tools", skills: ["Git", "Docker", "Postman"] },
]
