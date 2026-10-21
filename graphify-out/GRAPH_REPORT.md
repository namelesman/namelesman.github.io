# Graph Report - Portifolio  (2026-10-21)

## Corpus Check
- 41 files · ~35,761 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: (none) 2, .css 2)

## Summary
- 339 nodes · 643 edges · 20 communities (14 shown, 6 thin omitted)
- Extraction: 94% EXTRACTED · 6% INFERRED · 0% AMBIGUOUS · INFERRED: 36 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `19939e54`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- global.d.ts
- Terminal e Chat IA (UI)
- Pac-Man: Loop do Jogo
- Projetos e Dependências Dev
- Config TypeScript
- Navegação do Livro
- Pac-Man: IA dos Fantasmas
- APIs, SEO e Fundo
- Pac-Man: Jogador
- Currículo
- API do Chat Gemini
- terminal.tsx
- Screenshot J.A.R.V.I.S
- Foto de Perfil
- Config Next.js
- Thumbnail GTA CSS3D
- Saída do Pac-Man (Esc)
- build.mjs
- CLAUDE.md

## God Nodes (most connected - your core abstractions)
1. `Terminal()` - 25 edges
2. `useLanguage()` - 24 edges
3. `BookInteractions()` - 18 edges
4. `compilerOptions` - 18 edges
5. `Ghost` - 17 edges
6. `goToSheet()` - 15 edges
7. `Pacman` - 15 edges
8. `react` - 13 edges
9. `Portfolio()` - 12 edges
10. `playBeep()` - 12 edges

## Surprising Connections (you probably didn't know these)
- `Pacman-Game repository (namelesman/Pacman-Game)` --semantically_similar_to--> `GTA I CSS3D project (JavaScript, HTML, CSS)`  [INFERRED] [semantically similar]
  public/pacman/index.html → public/Currículo Thiago.pdf
- `Home()` --calls--> `Portfolio()`  [EXTRACTED]
  app/page.tsx → components/portfolio.tsx
- `BookInteractions()` --calls--> `goToSheet()`  [EXTRACTED]
  components/book-interactions.tsx → lib/book.ts
- `BookInteractions()` --calls--> `isTypingTarget()`  [EXTRACTED]
  components/book-interactions.tsx → lib/book.ts
- `onKeyDown()` --calls--> `isTypingTarget()`  [EXTRACTED]
  components/book-interactions.tsx → lib/book.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Pac-Man iframe adaptation layer (scaling, touch, Esc exit)** — public_pacman_index_canvas, public_pacman_index_swipecontrols, public_pacman_index_escexithandler, public_pacman_index_iframe_embedding [EXTRACTED 1.00]
- **Four ghost color variants in one sprite sheet** — public_pacman_ghost_blinky_sprite, public_pacman_ghost_clyde_sprite, public_pacman_ghost_pinky_sprite, public_pacman_ghost_inky_sprite [EXTRACTED 1.00]
- **Resume professional history and education** — public_curr_culo_thiago_estagio_prefeitura_jaboatao, public_curr_culo_thiago_hollow_soft, public_curr_culo_thiago_bacharel_ciencia_computacao, public_curr_culo_thiago_cs50 [EXTRACTED 1.00]

## Communities (20 total, 6 thin omitted)

### Community 1 - "Terminal e Chat IA (UI)"
Cohesion: 0.10
Nodes (31): Home(), ContactPage(), LanguageContext, LanguageContextType, useLanguage(), MatrixBackground(), PortfolioPage(), ReadmeViewer() (+23 more)

### Community 2 - "Pac-Man: Loop do Jogo"
Cohesion: 0.07
Nodes (37): Pac-Man Animation Sprite Sheet (animations.gif), Pac-Man Mouth Chomp Frames (8-frame strip), canvas, canvasContext, createGhosts(), createNewPacman(), createRect(), draw() (+29 more)

### Community 3 - "Projetos e Dependências Dev"
Cohesion: 0.06
Nodes (35): dependencies, cmdk, @google/genai, next, @next/third-parties, nodemailer, react, react-dom (+27 more)

### Community 4 - "Config TypeScript"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, forceConsistentCasingInFileNames, incremental, isolatedModules, jsx, jsxImportSource (+12 more)

### Community 5 - "Navegação do Livro"
Cohesion: 0.17
Nodes (21): BookInteractions(), onHashChange(), onKeyDown(), onTouchMove(), onTouchStart(), onWheel(), scrollBy(), scrollerFor() (+13 more)

### Community 6 - "Pac-Man: IA dos Fantasmas"
Cohesion: 0.21
Nodes (3): drawGhosts(), Ghost, updateGhosts()

### Community 7 - "APIs, SEO e Fundo"
Cohesion: 0.10
Nodes (15): ContactPayload, escapeHtml(), getEnv(), POST(), runtime, metadata, poppins, RootLayout() (+7 more)

### Community 9 - "Currículo"
Cohesion: 0.18
Nodes (14): Curriculo Thiago (resume PDF), Bacharel em Ciencia da Computacao - Faculdade de Boa Viagem, Competencias (JavaScript, TypeScript, Python, SQL, MongoDB, React, Node.js, NestJS, NextJS, Git, Tailwind CSS), CS50 - Harvard University (2023), Manutencao de banco de dados, Estagio Desenvolvedor - Prefeitura de Jaboatao dos Guararapes (2021-2023), Desenvolvedor Full Stack (role, 10+ years, systems security focus), GTA I CSS3D project (JavaScript, HTML, CSS) (+6 more)

### Community 10 - "API do Chat Gemini"
Cohesion: 0.21
Nodes (12): ChatPayload, isRateLimited(), MODELS, openStream(), parseMessages(), POST(), requestsByIp, RETRYABLE_STATUS (+4 more)

### Community 11 - "terminal.tsx"
Cohesion: 0.10
Nodes (36): ChatMessage, TerminalChat(), onKeyDown(), TerminalChatProps, useAiChat(), send(), updateLast(), downloadCv() (+28 more)

### Community 12 - "Screenshot J.A.R.V.I.S"
Cohesion: 0.40
Nodes (6): Audio Bar Visualizer, Call Control Bar, J.A.R.V.I.S AI Assistant, LiveKit Agents, Next.js, J.A.R.V.I.S Voice Agent UI Screenshot

### Community 13 - "Foto de Perfil"
Cohesion: 0.50
Nodes (4): Profile Photo (me.jpg), Open Graph Share Image, Thiago Medeiros (Portfolio Owner), Profile Page Photo

### Community 16 - "Thumbnail GTA CSS3D"
Cohesion: 1.00
Nodes (3): GTA I CSS3D Project, GTA CSS3D Project Thumbnail, Top-down Car City Scene

### Community 18 - "build.mjs"
Cohesion: 0.22
Nodes (3): browser, candidates, out

## Knowledge Gaps
- **24 isolated node(s):** `@types/node`, `@types/nodemailer`, `@types/react`, `@types/react-dom`, `typescript` (+19 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 136 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `terminal.tsx` to `global.d.ts`, `Terminal e Chat IA (UI)`, `Projetos e Dependências Dev`, `Navegação do Livro`, `APIs, SEO e Fundo`?**
  _High betweenness centrality (0.077) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Terminal()` (e.g. with `downloadCv()` and `onKeyDown()`) actually correct?**
  _`Terminal()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `@types/node`, `@types/nodemailer`, `@types/react` to the rest of the system?**
  _24 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Terminal e Chat IA (UI)` be split into smaller, more focused modules?**
  _Cohesion score 0.10034013605442177 - nodes in this community are weakly interconnected._
- **Why does `next` connect `APIs, SEO e Fundo` to `Terminal e Chat IA (UI)`, `API do Chat Gemini`, `Projetos e Dependências Dev`?**
  _High betweenness centrality (0.050) - this node is a cross-community bridge._
- **Are the 6 inferred relationships involving `BookInteractions()` (e.g. with `onHashChange()` and `onKeyDown()`) actually correct?**
  _`BookInteractions()` has 6 INFERRED edges - model-reasoned connections that need verification._
- **Should `Pac-Man: Loop do Jogo` be split into smaller, more focused modules?**
  _Cohesion score 0.07073170731707316 - nodes in this community are weakly interconnected._