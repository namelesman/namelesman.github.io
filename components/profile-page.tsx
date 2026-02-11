import Image from "next/image"

export function ProfilePage() {
  return (
    <div className="profile-page">
      <Image
        src="/Assets/image/me.jpg"
        alt="Thiago Medeiros"
        width={180}
        height={180}
        priority
        suppressHydrationWarning
      />
      <h1>Thiago Medeiros</h1>
      <h3>Dev Full stack</h3>

      <div className="social-media">
        <a
          href="https://github.com/namelesman"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="bx bxl-github" />
        </a>
        <a
          href="https://www.instagram.com/thiago_sn_m/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <i className="bx bxl-instagram-alt" />
        </a>
        <a
          href="https://www.linkedin.com/in/thiago-medeiros-299b92140/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="bx bxl-linkedin" />
        </a>
      </div>

      <p>
        {
          "Olá, eu me chamo Thiago Medeiros, sou um desenvolvedor full-stack apaixonado por criar soluções web inovadoras e eficientes. Aproveitamos nossa ampla tecnologia e conhecimento de ferramentas para transformar ideias em aplicações práticas e de alta qualidade. Meu foco é construir experiências digitais intuitivas, seguras e escaláveis, sempre atento aos detalhes e às melhores práticas de desenvolvimento."
        }
      </p>

      <div className="btn-box">
        <a
          href="/Currículo Thiago.pdf"
          download="Currículo Thiago.pdf"
          target="_blank"
          className="btn"
        >
          Download CV
        </a>
        <a href="#" className="btn contact-me" id="contact-me-btn">
          Contact Me
        </a>
      </div>
    </div>
  )
}
