// Gera public/Currículo Thiago.pdf a partir de cv/curriculo.html com o Chrome (ou Edge) sem janela.
import { execFileSync } from "node:child_process"
import { existsSync, mkdtempSync } from "node:fs"
import { tmpdir } from "node:os"
import { join, resolve } from "node:path"
import { pathToFileURL } from "node:url"

const candidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
].filter(Boolean)
const browser = candidates.find((p) => existsSync(p))
if (!browser) throw new Error("Chrome/Edge não encontrado. Defina CHROME_PATH.")

const out = resolve("public/Currículo Thiago.pdf")
execFileSync(browser, [
  "--headless=new",
  `--user-data-dir=${mkdtempSync(join(tmpdir(), "cv-"))}`, // perfil limpo, sem mexer no Chrome do usuário
  "--disable-gpu",
  "--no-pdf-header-footer",
  "--virtual-time-budget=8000", // espera as fontes do Google carregarem
  `--print-to-pdf=${out}`,
  pathToFileURL(resolve("cv/curriculo.html")).href,
], { stdio: "inherit" })
console.log(`PDF gerado: ${out}`)
