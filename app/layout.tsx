import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"
import { absoluteUrl, siteConfig } from "@/lib/site"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Youssef Atef | Software Engineer & React Next.js Developer in Egypt",
    template: "%s | Youssef Atef",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  applicationName: "Youssef Atef Portfolio",
  category: "Personal portfolio",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: "Youssef Atef Portfolio",
    title: "Youssef Atef | Software Engineer & Frontend Developer in Egypt",
    description: siteConfig.description,
    images: [
      {
        url: absoluteUrl("/logo.png"),
        width: 1200,
        height: 630,
        alt: "Youssef Atef software engineer portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Youssef Atef | React, Next.js & Full-Stack Developer",
    description: siteConfig.description,
    images: [absoluteUrl("/logo.png")],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
  manifest: "/manifest.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
