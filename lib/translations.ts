export type Language = 'en' | 'pt';

export const translations = {
  en: {
    // Profile
    role: "Full Stack Dev",
    intro: "Hello, my name is Thiago Medeiros, I am a full-stack developer passionate about creating innovative and efficient web solutions. I leverage my broad knowledge of technologies and tools to transform ideas into practical, high-quality applications. My focus is on building intuitive, secure, and scalable digital experiences, always attentive to details and the best development practices.",
    downloadCv: "Download CV",
    contactMe: "Contact Me",

    // Work & Education
    workExperience: "Work Experience",
    job1Title: "Jaboatão dos Guararapes City Hall",
    job1Desc: "Project at the Department of Education: Assisting in Software Development and user support, system security, and providing support in the construction and maintenance of databases and networks.",
    job2Title: "Back-end Developer",
    job2Desc: "Software development project, creating a customer and employee management system using NestJS, React, Node.js, and MongoDB.",
    education: "Education",
    edu1Title: "Faculdade de Boa Viagem",
    edu1Desc: "This is the college where I am pursuing my Bachelor's in Computer Science, currently in my 7th semester, looking for new experiences.",
    present: "Present",
    edu2Title: "CS50 Harvard Programming Course",
    edu2Desc: "CS50 Harvard programming course, teaching me to program in Python, HTML, CSS, JavaScript, among others.",

    // Skills
    mySkills: "My Skills",
    codingSkills: "Coding Skills",
    frontend: "Front-End",
    backend: "Back-End",
    database: "Database",
    ai: "Artificial Intelligence (AI)",
    tools: "Tools",

    // Portfolio
    latestProject: "Projects",
    liveDemo: "Live Demo",
    techUsed: "Tech Used:",
    project1Desc: "Personal AI assistant with real-time voice integration. Capable of automating tasks on Windows, managing files, controlling peripherals, and browsing the web autonomously via voice commands.",
    sourceCode: "Source Code",
    livePreview: "Live Preview",
    project2Desc: "I made this demo just to see how powerful CSS 3D is, and got carried away... I was also curious to see if CSS works for making games (spoiler alert: not really).",
    moreProjects: "More Projects",

    curiosityLabel: "Fun Fact: ",
    
    // Project - Jarvis
    jarvisName: "J.A.R.V.I.S AI Assistant",
    jarvisTag: "Featured",
    jarvisDesc: "A real-time voice assistant powered by Gemini Realtime and LiveKit. It remembers facts across sessions (Mem0) and performs tasks on the PC: browsing and clicking through websites, searching the web, opening projects and creating files.",
    jarvisCuriosity: "When you say goodbye, it saves a summary of the conversation and starts the next session remembering what you talked about. And if you say 'Radio Silence', it stops talking immediately.",
    
    // Project - GTA I
    gtaName: "GTA I CSS3D",
    gtaTag: "CSS3D Visual",
    gtaDesc: "A visual recreation of the classic GTA I using HTML and pure CSS3D to render the 3D perspective without using Canvas or WebGL.",
    gtaCuriosity: "It's an experiment to test the limits of CSS 3D rendering. It simulates depth and camera angles purely with DOM elements.",
    
    // Project - Pacman
    pacmanName: "Pacman JS",
    pacmanTag: "Game Dev",
    pacmanDesc: "A complete clone of the classic Pac-Man game, fully developed in JavaScript, HTML5 Canvas, and CSS.",
    pacmanCuriosity: "The ghost's AI algorithms (Blinky, Pinky, Inky, and Clyde) mimic the exact behavior of the original arcade game.",

    // Project - AlunoBD
    alunobdName: "CRUD Java AlunoBD",
    alunobdTag: "Back-End",
    alunobdDesc: "A simple Student CRUD system developed in native Java connected to a PostgreSQL database.",
    alunobdCuriosity: "It was an essential project to practically understand the connection between a desktop application made in Java and a relational database (PostgreSQL) using JDBC.",

    // Project - VagasIA
    vagasiaName: "VagasIA - AI Job Applier",
    vagasiaTag: "Automation & AI",
    vagasiaDesc: "An intelligent Python automation that uses Google Gemini Vision to read job posts from images, extracts data, generates personalized cover letters, and sends them via Gmail automatically.",
    vagasiaCuriosity: "It detects whether the job requires Portuguese, English or Spanish and writes the cover letter and attaches the correct resume accordingly.",

    // Project - Mapa Recife
    mapaRecifeName: "Mapa Comercial Recife",
    mapaRecifeTag: "Desktop App",
    mapaRecifeDesc: "A native Windows desktop application built with CustomTkinter and TkinterMapView to display an interactive map of Recife, loaded with real-time POI data from OpenStreetMap.",
    mapaRecifeCuriosity: "I built a smart caching system to store Overpass API results locally, allowing instantaneous loading for previously searched filters.",

    // Contact
    contactTitle: "Contact Me!",
    fullName: "Full Name",
    emailAddr: "E-mail Address",
    yourMsg: "Your Message",
    sendMsg: "Send Message",
    sending: "Sending...",
    successMsg: "Message sent successfully!",
    errorMsg: "Failed to send message",

    // Cookie
    sysNotif: "System Notification",
    cookieText: "We use cookies to enhance your experience, track user preferences, and analyze our traffic. By clicking \"Accept\", you agree to our use of cookies.",
    reject: "Reject",
    accept: "Accept",

    // Portfolio wrapper
    profile: "Profile",

    // Terminal
    terminalOpen: "Open terminal (Ctrl+K)",
    terminalPlaceholder: "Type a command or search...",
    terminalNav: "Navigate",
    terminalInfo: "About",
    cmdWhoami: "Who is Thiago",
    terminalActions: "Actions",
    terminalHint: "↑↓ navigate · ↵ run · esc close",
    cmdProfile: "Profile & experience",
    cmdSkills: "Skills & projects",
    cmdContact: "Contact",
    cmdLanguage: "Mudar para Português",
    cmdGithub: "Open GitHub",
    cmdLinkedin: "Open LinkedIn",
    sudoHire: "Hire Thiago",
    sudoGranted: "[sudo] permission granted. Opening contact form...",

    // Easter egg Pac-Man
    cmdPacman: "Play Pac-Man",
    pacmanRestart: "restart",
    pacmanHint: "arrows/WASD or swipe · esc to exit",

    // Chat com IA
    cmdChat: "Ask the AI about Thiago",
    chatAsk: "Ask the AI",
    chatPlaceholder: "Ask something about Thiago...",
    chatWelcome: "Hi! I'm the AI assistant of this portfolio. Ask me about Thiago's projects, skills or experience.",
    chatThinking: "thinking...",
    chatBusy: "The AI is busy right now, but here's what I found in the portfolio:",
    chatNoLocal: "The AI is busy right now and I couldn't find that in the portfolio. Try whoami, ls projetos or cat skills.txt, or reach Thiago through the contact form.",
    chatRateLimited: "Too many questions in a short time. Wait a few minutes and try again.",
    chatBack: "commands",
    chatHint: "↵ send · esc close",
  },
  pt: {
    // Profile
    role: "Dev Full stack",
    intro: "Olá, eu me chamo Thiago Medeiros, sou um desenvolvedor full-stack apaixonado por criar soluções web inovadoras e eficientes. Uso meu amplo conhecimento de tecnologias e ferramentas para transformar ideias em aplicações práticas e de alta qualidade. Meu foco é construir experiências digitais intuitivas, seguras e escaláveis, sempre atento aos detalhes e às melhores práticas de desenvolvimento.",
    downloadCv: "Baixar CV",
    contactMe: "Contate-me",

    // Work & Education
    workExperience: "Experiência de Trabalho",
    job1Title: "Prefeitura de Jaboatão dos Guararapes",
    job1Desc: "Projeto na Secretaria de Educação: Auxiliando no Desenvolvimento de Softwares e suporte aos usuários do sistema, segurança de sistemas e dando apoio na construção e manutenção de banco de dados e rede.",
    job2Title: "Desenvolvedor Back-end",
    job2Desc: "Projeto de desenvolvimento de software, criando um sistema de gerenciamento de clientes e funcionários, utilizando nestjs, react, node.js e mongodb.",
    education: "Educação",
    edu1Title: "Faculdade de Boa viagem",
    edu1Desc: "Essa é a faculdade onde faço o bacharelado em Ciência da Computação. Atualmente estou no 7º período, em busca de novas experiências.",
    present: "Atual",
    edu2Title: "Curso de programação CS50 Harvard",
    edu2Desc: "Curso de programação CS50 Harvard, que me ensina a programar em Python, HTML, CSS, JavaScript, entre outros.",

    // Skills
    mySkills: "Minhas Habilidades",
    codingSkills: "Habilidades de Código",
    frontend: "Front-End",
    backend: "Back-End",
    database: "Banco de Dados",
    ai: "Inteligência Artificial (IA)",
    tools: "Ferramentas",

    // Portfolio
    latestProject: "Projetos",
    liveDemo: "Demonstração",
    techUsed: "Tecnologias:",
    project1Desc: "Assistente de IA pessoal com integração de voz em tempo real. Capaz de automatizar tarefas no Windows, gerenciar arquivos, controlar periféricos e navegar na web de forma autônoma via comandos de voz.",
    sourceCode: "Código Fonte",
    livePreview: "Ver Online",
    project2Desc: "Fiz esta demo só para ver o quanto o CSS 3D é poderoso, e acabei me empolgando... Também fiquei curioso para ver se CSS serve para fazer jogos (alerta de spoiler: não serve muito).",
    moreProjects: "Mais Projetos",

    curiosityLabel: "Curiosidade: ",
    
    // Project - Jarvis
    jarvisName: "J.A.R.V.I.S AI Assistant",
    jarvisTag: "Destaque",
    jarvisDesc: "Assistente por voz em tempo real com Gemini Realtime e LiveKit. Lembra de fatos entre sessões (Mem0) e executa tarefas no PC: navega e clica em sites, pesquisa na web, abre projetos e cria arquivos.",
    jarvisCuriosity: "Ao se despedir, ele salva um resumo da conversa e começa a próxima sessão lembrando do que vocês falaram. E se você disser 'Silêncio Rádio', ele para de falar na hora.",
    
    // Project - GTA I
    gtaName: "GTA I CSS3D",
    gtaTag: "Visual CSS3D",
    gtaDesc: "Uma recriação visual do clássico GTA I utilizando HTML e puro CSS3D para renderizar a perspectiva 3D sem usar Canvas ou WebGL.",
    gtaCuriosity: "É um experimento para testar os limites da renderização CSS 3D. Ele simula profundidade e ângulos de câmera puramente com elementos do DOM.",
    
    // Project - Pacman
    pacmanName: "Pacman JS",
    pacmanTag: "Game Dev",
    pacmanDesc: "Um clone completo do clássico jogo Pac-Man, totalmente desenvolvido em JavaScript, HTML5 Canvas e CSS.",
    pacmanCuriosity: "Os algoritmos de IA dos fantasmas (Blinky, Pinky, Inky e Clyde) imitam exatamente o comportamento do jogo original de arcade.",

    // Project - AlunoBD
    alunobdName: "CRUD Java AlunoBD",
    alunobdTag: "Back-End",
    alunobdDesc: "Um sistema simples de CRUD de Alunos desenvolvido em Java nativo conectado a um banco de dados PostgreSQL.",
    alunobdCuriosity: "Foi um projeto essencial para entender na prática a conexão entre uma aplicação desktop feita em Java e um banco de dados relacional (PostgreSQL) utilizando o JDBC.",

    // Project - VagasIA
    vagasiaName: "VagasIA - Automação de Vagas",
    vagasiaTag: "Automação & IA",
    vagasiaDesc: "Uma automação inteligente em Python que usa o Google Gemini Vision para ler prints de vagas, extrai os dados, gera e-mails de candidatura personalizados e envia automaticamente.",
    vagasiaCuriosity: "O robô detecta se a vaga é em Português, Inglês ou Espanhol, escreve a carta de apresentação no idioma certo e até anexa a versão correta do currículo!",

    // Project - Mapa Recife
    mapaRecifeName: "Mapa Comercial Recife",
    mapaRecifeTag: "App Desktop",
    mapaRecifeDesc: "Um aplicativo nativo para Windows feito em CustomTkinter que exibe um mapa interativo de Recife com pontos comerciais reais extraídos do OpenStreetMap em tempo real.",
    mapaRecifeCuriosity: "Criei um sistema de cache inteligente local que salva os dados da Overpass API, permitindo que a busca funcione instantaneamente nas próximas execuções sem depender da internet.",

    // Contact
    contactTitle: "Contate-me!",
    fullName: "Nome Completo",
    emailAddr: "Endereço de E-mail",
    yourMsg: "Sua Mensagem",
    sendMsg: "Enviar Mensagem",
    sending: "Enviando...",
    successMsg: "Mensagem enviada com sucesso!",
    errorMsg: "Erro ao enviar mensagem",

    // Cookie
    sysNotif: "Notificação do Sistema",
    cookieText: "Usamos cookies para melhorar sua experiência, rastrear preferências e analisar nosso tráfego. Ao clicar \"Aceitar\", você concorda com o uso de cookies.",
    reject: "Rejeitar",
    accept: "Aceitar",

    // Portfolio wrapper
    profile: "Perfil",

    // Terminal
    terminalOpen: "Abrir terminal (Ctrl+K)",
    terminalPlaceholder: "Digite um comando ou busque...",
    terminalNav: "Navegar",
    terminalInfo: "Sobre",
    cmdWhoami: "Quem é o Thiago",
    terminalActions: "Ações",
    terminalHint: "↑↓ navegar · ↵ executar · esc fechar",
    cmdProfile: "Perfil e experiência",
    cmdSkills: "Habilidades e projetos",
    cmdContact: "Contato",
    cmdLanguage: "Switch to English",
    cmdGithub: "Abrir GitHub",
    cmdLinkedin: "Abrir LinkedIn",
    sudoHire: "Contratar o Thiago",
    sudoGranted: "[sudo] permissão concedida. Abrindo formulário de contato...",

    // Easter egg Pac-Man
    cmdPacman: "Jogar Pac-Man",
    pacmanRestart: "reiniciar",
    pacmanHint: "setas/WASD ou deslize · esc sai",

    // Chat com IA
    cmdChat: "Pergunte à IA sobre o Thiago",
    chatAsk: "Perguntar à IA",
    chatPlaceholder: "Pergunte algo sobre o Thiago...",
    chatWelcome: "Oi! Sou o assistente de IA deste portfólio. Pergunte sobre os projetos, habilidades ou experiência do Thiago.",
    chatThinking: "pensando...",
    chatBusy: "A IA está ocupada agora, mas encontrei isto no portfólio:",
    chatNoLocal: "A IA está ocupada agora e não achei isso no portfólio. Tente whoami, ls projetos ou cat skills.txt, ou fale com o Thiago pelo formulário de contato.",
    chatRateLimited: "Muitas perguntas em pouco tempo. Espere alguns minutos e tente de novo.",
    chatBack: "comandos",
    chatHint: "↵ enviar · esc fechar",
  }
};
