import type { TechName } from "./tech-icons"
import type { translations } from "./translations"

export const GITHUB_USER = "namelesman"

type TranslationKey = keyof typeof translations["en"]

export type Project = {
  id: string
  // Chaves em lib/translations.ts
  name: TranslationKey
  tag: TranslationKey
  desc: TranslationKey
  curiosity: TranslationKey
  repoName: string
  icon: string
  demo?: string
  tech: TechName[]
}

export const PROJECTS: Project[] = [
  {
    id: "vagasia",
    name: "vagasiaName",
    tag: "vagasiaTag",
    desc: "vagasiaDesc",
    curiosity: "vagasiaCuriosity",
    repoName: "VagasIA",
    icon: "🤖",
    tech: ["Python"],
  },
  {
    id: "jarvis",
    name: "jarvisName",
    tag: "jarvisTag",
    desc: "jarvisDesc",
    curiosity: "jarvisCuriosity",
    repoName: "J.A.R.V.I.S-Frontend",
    icon: "🧠",
    tech: ["Python", "Next", "TypeScript"],
  },
  {
    id: "maparecife",
    name: "mapaRecifeName",
    tag: "mapaRecifeTag",
    desc: "mapaRecifeDesc",
    curiosity: "mapaRecifeCuriosity",
    repoName: "MapaRecifeApp",
    icon: "🗺️",
    tech: ["Python"],
  },
  {
    id: "gta",
    name: "gtaName",
    tag: "gtaTag",
    desc: "gtaDesc",
    curiosity: "gtaCuriosity",
    repoName: "GTA-I-HTML-SCSS-JS",
    icon: "🚗",
    demo: "https://gtacss3d.netlify.app/",
    tech: ["JS"],
  },
  {
    id: "alunobd",
    name: "alunobdName",
    tag: "alunobdTag",
    desc: "alunobdDesc",
    curiosity: "alunobdCuriosity",
    repoName: "alunobd",
    icon: "🗄️",
    tech: ["Java", "PostgreSQL"],
  },
  {
    id: "conra",
    name: "conraName",
    tag: "conraTag",
    desc: "conraDesc",
    curiosity: "conraCuriosity",
    repoName: "Conra-ActiveWear",
    icon: "👕",
    tech: ["React"],
  },
  {
    id: "agatha",
    name: "agathaName",
    tag: "agathaTag",
    desc: "agathaDesc",
    curiosity: "agathaCuriosity",
    repoName: "Agatha-Diesel",
    icon: "🌐",
    tech: ["JS"],
  },
  {
    id: "pacman",
    name: "pacmanName",
    tag: "pacmanTag",
    desc: "pacmanDesc",
    curiosity: "pacmanCuriosity",
    repoName: "Pacman_js",
    icon: "👻",
    tech: ["JS"],
  },
]

export function repoUrl(project: Project) {
  return `https://github.com/${GITHUB_USER}/${project.repoName}`
}
