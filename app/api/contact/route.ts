import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const runtime = "nodejs"

function getEnv(name: string) {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing env var: ${name}`)
  }
  return value
}

type ContactPayload = {
  name: string
  email: string
  message: string
}

export async function POST(req: Request) {
  let payload: ContactPayload

  try {
    payload = (await req.json()) as ContactPayload
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 },
    )
  }

  const name = (payload?.name ?? "").trim()
  const email = (payload?.email ?? "").trim()
  const message = (payload?.message ?? "").trim()

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 },
    )
  }

  let smtpHost: string
  let smtpPort: number
  let smtpUser: string
  let smtpPass: string
  let mailFrom: string
  let mailTo: string

  try {
    smtpHost = getEnv("SMTP_HOST")
    smtpPort = Number(getEnv("SMTP_PORT"))
    smtpUser = getEnv("SMTP_USER")
    smtpPass = getEnv("SMTP_PASS")
    mailFrom = getEnv("MAIL_FROM")
    mailTo = getEnv("MAIL_TO")
  } catch (err) {
    const message = err instanceof Error ? err.message : "Missing env vars"
    return NextResponse.json({ ok: false, error: message }, { status: 500 })
  }

  if (!Number.isFinite(smtpPort)) {
    return NextResponse.json(
      { ok: false, error: "Invalid SMTP_PORT" },
      { status: 500 },
    )
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  })

  try {
    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      replyTo: email,
      subject: `Portfolio Contact: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New message from your portfolio</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space: pre-wrap; font-family: inherit;">${escapeHtml(message)}</pre>
      `.trim(),
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Error sending email", err)
    return NextResponse.json(
      { ok: false, error: "Failed to send message" },
      { status: 500 },
    )
  }
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}
