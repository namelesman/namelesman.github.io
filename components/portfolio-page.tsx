import Image from "next/image"

export function PortfolioPage() {
  return (
    <>
      <h1 className="tittle">Latest Project</h1>
      <div className="portfolio-box">
        <div className="img-box">
          <Image
            src="/Assets/image/mycaffee.jpg"
            alt="My Caffee project screenshot"
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
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta iure aliquam deserunt iusto dolorum nostrum quae. In, officia ipsam!"
            }
          </p>
        </div>
        <div className="btn-box">
          <a
            href="https://github.com/FrancisLauriano/meu_cafe"
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
