import Image from "next/image"
import { useLanguage } from "./language-provider"

export function PortfolioPage() {
  const { t } = useLanguage()

  return (
    <>
      <h1 className="tittle">{t("latestProject")}</h1>
      
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
              {t("liveDemo")}
              <i className="bx bx-play-circle" />
            </a>
          </div>
          <p>{t("techUsed")} Python, LiveKit, Gemini Realtime API, Playwright</p>
          <p>
            {t("project1Desc")}
          </p>
        </div>
        <div className="btn-box">
          <a
            href="https://github.com/namelesman/Jarvis-main"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            {t("sourceCode")}
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
              {t("livePreview")}
              <i className="bx bx-link-external" />
            </a>
          </div>
          <p>{t("techUsed")} HTML, SCSS, JavaScript</p>
          <p>
            {t("project2Desc")}
          </p>
        </div>
        <div className="btn-box">
          <a
            href="https://github.com/namelesman/GTA-I-HTML-SCSS-JS"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            {t("sourceCode")}
          </a>
          <a
            href="https://github.com/namelesman"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            {t("moreProjects")}
          </a>
        </div>
      </div>
    </>
  )
}