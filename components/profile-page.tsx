import Image from "next/image"
import { useLanguage } from "./language-provider"
import { CV_DOWNLOAD_NAME, LINKS } from "@/lib/links"

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
          href={LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="bx bxl-github" />
        </a>
        <a
          href={LINKS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <i className="bx bxl-instagram-alt" />
        </a>
        <a
          href={LINKS.linkedin}
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
          href={LINKS.cv}
          download={CV_DOWNLOAD_NAME}
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
