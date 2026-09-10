"use client"

import { useLanguage } from "./language-provider"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt")
  }

  return (
    <button
      onClick={toggleLanguage}
      className="language-toggle border-2 border-[var(--main-color)] text-[var(--main-color)] bg-transparent hover:bg-[var(--main-color)] hover:text-black transition-colors rounded-md font-bold"
      style={{
        position: 'absolute',
        top: '1.5rem',
        right: '2rem',
        zIndex: 50,
        padding: '0.4rem 0.8rem',
        fontSize: '1.1rem',
        cursor: 'pointer'
      }}
    >
      {language === "pt" ? "EN" : "PT"}
    </button>
  )
}
