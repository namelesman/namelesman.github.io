import { useLanguage } from "./language-provider"
import { TechIcon } from "@/lib/tech-icons"
import { SKILL_GROUPS } from "@/lib/skills"

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
