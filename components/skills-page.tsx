import { useLanguage } from "./language-provider"
import { TechIcon, type TechName } from "@/lib/tech-icons"
import type { translations } from "@/lib/translations"

const SKILL_GROUPS: { title: keyof typeof translations["en"]; skills: TechName[] }[] = [
  { title: "frontend", skills: ["JS", "Next", "React", "Tailwind"] },
  { title: "ai", skills: ["TensorFlow", "ML"] },
  { title: "backend", skills: ["Java", "Python", "Node", "Nestjs", "TypeScript", "FastAPI", "C/C++"] },
  { title: "database", skills: ["PostgreSQL", "MongoDB", "MySQL"] },
  { title: "tools", skills: ["Git", "Docker", "Postman"] },
]

export function SkillsPage() {
  const { t } = useLanguage()

  return (
    <div suppressHydrationWarning>
      <h1 className="tittle">{t("mySkills")}</h1>
      <div className="skill-box">
        {SKILL_GROUPS.map((group) => (
          <div key={group.title} className="skills-content">
            <h3>{t(group.title)}</h3>
            <div className="content">
              {group.skills.map((skill) => (
                <span key={skill}>
                  <TechIcon name={skill} />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
