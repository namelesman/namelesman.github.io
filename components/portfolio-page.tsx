import Image from "next/image"

export function PortfolioPage() {
  return (
    <>
      <h1 className="tittle">Latest Project</h1>
      <div className="portfolio-box">
        <div className="img-box">
          <Image
            src="https://user-images.githubusercontent.com/1726083/112042026-f6378900-8b3e-11eb-84a4-e4a92f86678e.jpg"
            alt="GTA I CSS 3D"
            width={600}
            height={240}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="info-box">
          <div className="info-tittle">
            <h3>My Caffee</h3>
            <a href="#">
              Live Preview
              <i className="bx bx-link-external" />
            </a>
          </div>
          <p>Tech Used:</p>
          <p>
            {
              "Fiz esta demo só para ver o quanto o CSS 3D é poderoso, e acabei me empolgando. Também fiquei curioso para ver se CSS serve para fazer jogos (alerta de spoiler: não serve muito)."
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
            More Project
          </a>
        </div>
      </div>
    </>
  )
}
