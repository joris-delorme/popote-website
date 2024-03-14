import { Toaster } from "@/components/ui/sonner"
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Analytics } from "@vercel/analytics/react"
import Navbar from "@/components/navbar";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter'
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Recette",
    "Cuisine",
    "Popote"
  ],
  authors: [
    {
      name: "joris",
      url: "https://jorisdelorme.fr",
    },
  ],
  creator: "joris",
  metadataBase: new URL('https://popote.app'),
  openGraph: {
    type: "website",
    locale: "fr",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@joris_delorme_"
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${playfair.variable} ${inter.variable} font-sans`}>
        <Analytics />
        <Toaster richColors={true} position="top-center" closeButton={true} />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
