"use client"

import { type FormEvent, useState } from "react"

export function ContactPage() {
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
        setErrorMessage(data.error || "Não foi possível enviar a mensagem")
        return
      }

      setStatus("success")
      setName("")
      setEmail("")
      setMessage("")
    } catch {
      setStatus("error")
      setErrorMessage("Não foi possível enviar a mensagem")
    }
  }

  const buttonText =
    status === "submitting" ? "Sending..." : "Send Menssage"

  return (
    <>
      <h1 className="tittle">{"Contact Me!"}</h1>
      <div className="contact-box">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            className="field"
            placeholder="Full Name"
            required
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={status === "submitting"}
          />
          <input
            type="email"
            className="field"
            placeholder="E-mail Address"
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
            placeholder="Your Menssage"
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
              Mensagem enviada com sucesso!
            </p>
          ) : null}
          {status === "error" ? (
            <p style={{ marginTop: "1rem" }}>
              {errorMessage || "Erro ao enviar mensagem"}
            </p>
          ) : null}
        </form>
      </div>
    </>
  )
}
