import Image from "next/image"

export function PortfolioPage() {
  return (
    <>
      <h1 className="tittle">Latest Project</h1>
      
      {/* --- PROJETO JARVIS (Destaque) --- */}
      <div className="portfolio-box" style={{ marginBottom: "40px" }}>
        <div className="img-box">
          <Image
            src="/Assets/image/jarvis.jpg"
            alt="Jarvis AI Assistant"
            width={600}
            height={300}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="info-box">
          <div className="info-tittle">
            <h3>Jarvis AI Assistant</h3>
            <a href="#">
              Live Demo
              <i className="bx bx-play-circle" />
            </a>
          </div>
          <p>Tech Used: Python, LiveKit, Gemini Realtime API, Playwright</p>
          <p>
            {
              "Assistente de IA pessoal com integração de voz em tempo real. Capaz de automatizar tarefas no Windows, gerenciar arquivos, controlar periféricos e navegar na web de forma autônoma via comandos de voz."
            }
          </p>
        </div>
        <div className="btn-box">
          <a
            href="https://github.com/namelesman/Jarvis-main"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Source Code
          </a>
        </div>
      </div>

      {/* --- PROJETO GTA (Movido para baixo) --- */}
      <div className="portfolio-box">
        <div className="img-box">
          <Image
            src="/Assets/image/gta-css-3d.jpg"
            alt="GTA I CSS3D"
            width={600}
            height={240}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="info-box">
          <div className="info-tittle">
            <h3>GTA I CSS3D</h3>
            <a href="https://gtacss3d.netlify.app/">
              Live Preview
              <i className="bx bx-link-external" />
            </a>
          </div>
          <p>Tech Used: HTML, SCSS, JavaScript</p>
          <p>
            {
              "Fiz esta demo só para ver o quanto o CSS 3D é poderoso, e acabei me empolgando... Também fiquei curioso para ver se CSS serve para fazer jogos (alerta de spoiler: não serve muito)."
            }
          </p>
        </div>
        <div className="btn-box">
          <a
            href="https://github.com/namelesman/GTA-I-HTML-SCSS-JS"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Source Code
          </a>
          <a
            href="https://github.com/namelesman"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            More Projects
          </a>
        </div>
      </div>
    </>
  )
}