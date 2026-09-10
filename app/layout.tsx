import type { Metadata, Viewport } from "next"
import { Poppins } from "next/font/google"
import { LanguageProvider } from "@/components/language-provider"
import { LanguageToggle } from "@/components/language-toggle"
import { CookieConsent } from "@/components/cookie-consent"
import { GoogleAnalytics } from "@next/third-parties/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://v0-namelesman-github-io.vercel.app"),
  title: "Thiago Medeiros | Desenvolvedor Full Stack",
  description:
    "Portfólio de Thiago Medeiros - Desenvolvedor Full Stack focado em React, Next.js, Node.js e Java. Veja meus projetos e habilidades.",
  keywords: ["Thiago Medeiros", "Desenvolvedor", "Full Stack", "React", "Next.js", "Java", "Portfólio", "Programador", "Software Engineer"],
  authors: [{ name: "Thiago Medeiros" }],
  creator: "Thiago Medeiros",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://v0-namelesman-github-io.vercel.app",
    title: "Thiago Medeiros | Dev Full Stack",
    description: "Conheça meus projetos, habilidades e trajetória como Desenvolvedor Full Stack.",
    siteName: "Portfólio Thiago Medeiros",
    images: [
      {
        url: "/Assets/image/me.jpg",
        width: 800,
        height: 600,
        alt: "Thiago Medeiros - Desenvolvedor Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiago Medeiros | Dev Full Stack",
    description: "Conheça meus projetos e trajetória como Desenvolvedor Full Stack.",
    images: ["/Assets/image/me.jpg"],
  },
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
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  )
}
