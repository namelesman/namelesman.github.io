"use client"

import { type FormEvent, useState } from "react"
import { useLanguage } from "./language-provider"

export function ContactPage() {
  const { t } = useLanguage()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("submitting")
    setErrorMessage(null)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })

      const data = (await res.json()) as { ok?: boolean; error?: string }

      if (!res.ok || !data.ok) {
        setStatus("error")
        setErrorMessage(data.error || t("errorMsg"))
        return
      }

      setStatus("success")
      setName("")
      setEmail("")
      setMessage("")
    } catch {
      setStatus("error")
      setErrorMessage(t("errorMsg"))
    }
  }

  const buttonText =
    status === "submitting" ? t("sending") : t("sendMsg")

  return (
    <>
      <h1 className="tittle">{t("contactTitle")}</h1>
      <div className="contact-box">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            className="field"
            placeholder={t("fullName")}
            required
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={status === "submitting"}
          />
          <input
            type="email"
            className="field"
            placeholder={t("emailAddr")}
            required
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "submitting"}
          />
          <textarea
            cols={30}
            rows={10}
            className="field"
            placeholder={t("yourMsg")}
            required
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={status === "submitting"}
          />
          <input
            type="submit"
            className="btn"
            value={buttonText}
            disabled={status === "submitting"}
          />
          {status === "success" ? (
            <p style={{ marginTop: "1rem" }}>
              {t("successMsg")}
            </p>
          ) : null}
          {status === "error" ? (
            <p style={{ marginTop: "1rem" }}>
              {errorMessage || t("errorMsg")}
            </p>
          ) : null}
        </form>
      </div>
    </>
  )
}
