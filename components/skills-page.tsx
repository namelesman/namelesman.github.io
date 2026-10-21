import { useLanguage } from "./language-provider"
import { TechIcon, techLabel, type TechName } from "@/lib/tech-icons"
import { SKILL_GROUPS } from "@/lib/skills"

export function SkillsPage() {
  const { t } = useLanguage()

  const chip = (name: TechName, className?: string) => (
    <span key={name} className={className}>
      <TechIcon name={name} />
      {techLabel(name, t)}
    </span>
  )

  return (
    <div className="page-content" suppressHydrationWarning>
      <h1 className="tittle">{t("mySkills")}</h1>
      {/* Legenda: chip destacado é a linguagem, o que vem depois da seta é usado com ela */}
      <p className="skill-legend">
        <i className="skill-legend-base" /> {t("skillLegendBase")} <b className="skill-arrow">›</b> {t("skillLegendUses")}
      </p>
      <div className="skill-box">
        {SKILL_GROUPS.map((group) => (
          <div key={group.title} className="skills-content">
            <h3>{t(group.title)}</h3>
            <div className="content">
              {group.skills.map((item) => {
                if (typeof item === "string") return chip(item)
                if (item.uses.length === 0) return item.base.map((name) => chip(name, "skill-base"))
                return (
                  <div key={item.base.join("+")} className="skill-family">
                    {item.base.map((name) => chip(name, "skill-base"))}
                    <b className="skill-arrow">›</b>
                    {item.uses.map((name) => chip(name))}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
