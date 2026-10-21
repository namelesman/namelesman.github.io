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
  // Sem repoName: código privado (projeto de cliente)
  repoName?: string
  icon: string
  demo?: string
  tech: TechName[]
}

export const PROJECTS: Project[] = [
  {
    id: "grandiesel",
    name: "grandieselName",
    tag: "grandieselTag",
    desc: "grandieselDesc",
    curiosity: "grandieselCuriosity",
    icon: "🚚",
    demo: "https://grandieselbr.netlify.app",
    tech: ["Next", "TypeScript", "React", "Tailwind", "PostgreSQL", "Neon", "Prisma", "Node", "Three.js", "Blender", "GitHub Actions"],
  },
  {
    id: "usebro",
    name: "usebroName",
    tag: "usebroTag",
    desc: "usebroDesc",
    curiosity: "usebroCuriosity",
    icon: "👕",
    demo: "https://usebro-menswear.vercel.app",
    tech: ["Next", "TypeScript", "React", "Tailwind", "PostgreSQL", "Neon", "Prisma"],
  },
  {
    id: "glaydstone",
    name: "glaydstoneName",
    tag: "glaydstoneTag",
    desc: "glaydstoneDesc",
    curiosity: "glaydstoneCuriosity",
    repoName: "glaydstone-landing-page",
    icon: "⚖️",
    demo: "https://glaydstone-next.vercel.app",
    tech: ["Next", "TypeScript", "React", "Tailwind"],
  },
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
    id: "pacman",
    name: "pacmanName",
    tag: "pacmanTag",
    desc: "pacmanDesc",
    curiosity: "pacmanCuriosity",
    repoName: "Pacman-Game",
    icon: "👻",
    tech: ["JS"],
  },
]

export function repoUrl(project: Project) {
  return project.repoName ? `https://github.com/${GITHUB_USER}/${project.repoName}` : null
}

/** Nome usado no comando "open" do terminal. */
export const projectSlug = (project: Project) => project.repoName ?? project.id
