import Image from "next/image"
import { useLanguage } from "./language-provider"

export function ProfilePage() {
  const { t } = useLanguage()

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
      <h3>{t("role")}</h3>

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
        {t("intro")}
      </p>

      <div className="btn-box">
        <a
          href="/public/Currículo Thiago.pdf"
          download="/public/Currículo Thiago.pdf"
          target="_blank"
          className="btn"
        >
          {t("downloadCv")}
        </a>
        <a href="#" className="btn contact-me" id="contact-me-btn">
          {t("contactMe")}
        </a>
      </div>
    </div>
  )
}
