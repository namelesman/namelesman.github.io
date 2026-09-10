"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "./language-provider"

export function CookieConsent() {
  const { t } = useLanguage()
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Check if the user has already consented
    const consent = localStorage.getItem("cookieConsent")
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setShowConsent(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true")
    setShowConsent(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "false")
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="cookie-modal-overlay">
      <div className="cookie-modal">
        <h2>
          <i className="bx bx-cookie"></i>
          {t("sysNotif")}
        </h2>
        <p>
          {t("cookieText")}
        </p>
        <div className="cookie-buttons">
          <button onClick={rejectCookies} className="cookie-btn reject">
            {t("reject")}
          </button>
          <button onClick={acceptCookies} className="cookie-btn accept">
            {t("accept")}
          </button>
        </div>
      </div>
    </div>
  )
}
