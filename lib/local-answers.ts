import { LINKS } from "./links"
import { PROJECTS, repoUrl } from "./projects"
import { SKILL_GROUPS } from "./skills"
import { translations, type Language } from "./translations"

// Respostas montadas só com os dados do site: custo zero e funcionam mesmo sem a IA
type T = (typeof translations)["en"]

export function whoami(t: T) {
  return `Thiago Medeiros — ${t.role}\n\n${t.intro}`
}

export function listProjects(t: T, projects = PROJECTS) {
  return projects
    .map((p) => `${p.icon} ${t[p.name]} [${t[p.tag]}]\n   ${p.tech.join(", ")} · ${repoUrl(p)}`)
    .join("\n")
}

export function catSkills(t: T) {
  return SKILL_GROUPS.map((g) => `${t[g.title]}: ${g.skills.join(", ")}`).join("\n")
}

export function catExperience(t: T) {
  return `2021 - 2023 · ${t.job1Title}\n${t.job1Desc}\n\n2024 - 2025 · ${t.job2Title}\n${t.job2Desc}`
}

export function catEducation(t: T) {
  return `2021 - ${t.present} · ${t.edu1Title}\n${t.edu1Desc}\n\n2023 - 2024 · ${t.edu2Title}\n${t.edu2Desc}`
}

export function catContact(t: T) {
  return `GitHub: ${LINKS.github}\nLinkedIn: ${LINKS.linkedin}\nInstagram: ${LINKS.instagram}\n${t.contactTitle} → cd ~/contato`
}

function normalize(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
}

const TOPICS: { words: string[]; answer: (t: T) => string }[] = [
  { words: ["skill", "habilidade", "tecnologia", "stack", "linguage", "sabe", "know", "technolog"], answer: catSkills },
  { words: ["experiencia", "experience", "trabalh", "emprego", "job", "work", "prefeitura"], answer: catExperience },
  { words: ["faculdade", "formacao", "curso", "estud", "periodo", "college", "education", "degree", "cs50"], answer: catEducation },
  { words: ["contato", "contact", "email", "linkedin", "github", "instagram", "falar", "talk", "hire", "contrat"], answer: catContact },
  { words: ["quem", "who", "sobre", "about", "apresent"], answer: whoami },
]

const STOPWORDS = new Set(["que", "quais", "qual", "com", "para", "dos", "das", "uma", "the", "and", "what", "which", "with", "does", "has", "tem", "ele", "seu", "sua", "his"])

/** Tenta responder uma pergunta livre por palavras-chave. Retorna null se não achar nada. */
export function answerLocally(question: string, language: Language) {
  const t = translations[language]
  const q = normalize(question)
  const tokens = q.split(/[^a-z0-9.+#]+/).filter((w) => w.length >= 2 && !STOPWORDS.has(w))

  // Projetos cujo nome, tag, descrição ou tecnologias aparecem na pergunta
  const matched = PROJECTS.filter((p) => {
    const haystack = normalize([t[p.name], t[p.tag], t[p.desc], p.repoName, ...p.tech].join(" "))
    return tokens.some((w) => w.length >= 2 && new RegExp(`\\b${w.replace(/[.+#]/g, "\\$&")}`).test(haystack))
  })
  const asksProjects = /projet|project|portf/.test(q)

  if (matched.length > 0 && matched.length < PROJECTS.length) return listProjects(t, matched)
  if (asksProjects) return listProjects(t)

  const topic = TOPICS.find((topic) => topic.words.some((w) => q.includes(w)))
  return topic ? topic.answer(t) : null
}
