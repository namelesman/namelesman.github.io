"use client"

import { useState, useEffect } from "react"

export function CookieConsent() {
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
          System Notification
        </h2>
        <p>
          We use cookies to enhance your experience, track user preferences, and analyze our traffic. By clicking "Accept", you agree to our use of cookies.
        </p>
        <div className="cookie-buttons">
          <button onClick={rejectCookies} className="cookie-btn reject">
            Reject
          </button>
          <button onClick={acceptCookies} className="cookie-btn accept">
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
