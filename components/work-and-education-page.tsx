import { useLanguage } from "./language-provider"

export function WorkAndEducationPage() {
  const { t } = useLanguage()

  return (
    <div className="page-content">
      <h1 className="tittle">{t("workExperience")}</h1>
      <div className="workeduc-box">
        <div className="workeduc-content">
          <span className="year">
            <i className="bx bxs-calendar" />
            {"2021 - 2023"}
          </span>
          <h3>{t("job1Title")}</h3>
          <p>
            {t("job1Desc")}
          </p>
        </div>
        <div className="workeduc-content">
          <span className="year">
            <i className="bx bxs-calendar" />
            {"2024 - 2025"}
          </span>
          <h3>{t("job2Title")}</h3>
          <p>
            {t("job2Desc")}
          </p>
        </div>
      </div>

      <h1 className="tittle" style={{ marginTop: '1.5rem' }}>{t("education")}</h1>
      <div className="workeduc-box">
        <div className="workeduc-content">
          <span className="year">
            <i className="bx bxs-calendar" />
            {"2021 - 2025"}
          </span>
          <h3>{t("edu1Title")}</h3>
          <p>
            {t("edu1Desc")}
          </p>
        </div>
        <div className="workeduc-content">
          <span className="year">
            <i className="bx bxs-calendar" />
            {"2023 - 2024"}
          </span>
          <h3>{t("edu2Title")}</h3>
          <p>
            {t("edu2Desc")}
          </p>
        </div>
      </div>
    </div>
  )
}
