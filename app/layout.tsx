import type { Metadata, Viewport } from "next"
import { Poppins } from "next/font/google"
import { LanguageProvider } from "@/components/language-provider"
import { LanguageToggle } from "@/components/language-toggle"
import { CookieConsent } from "@/components/cookie-consent"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Thiago Medeiros | Dev Full Stack",
  description:
    "Portfolio de Thiago Medeiros - Desenvolvedor Full Stack apaixonado por criar soluções web inovadoras e eficientes.",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#ffffff",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/228159e932.js"
          crossOrigin="anonymous"
          async
        />
      </head>
      <body className={poppins.variable}>
        <LanguageProvider>
          <LanguageToggle />
          {children}
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  )
}
