"use client"

import { useLanguage } from "./language-provider"
import { playBeep } from "../lib/audio"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    playBeep()
    setLanguage(language === "pt" ? "en" : "pt")
  }

  return (
    <button
      onClick={toggleLanguage}
      className="language-toggle"
    >
      {language === "pt" ? "EN" : "PT"}
    </button>
  )
}
