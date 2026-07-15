import type { Metadata } from "next";
import { Red_Hat_Display, Geist_Mono, IBM_Plex_Sans_Arabic } from "next/font/google";
import PageLoader from "@/components/PageLoader/PageLoader";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./globals.css";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nested United | From Operations to Growth",
    template: "%s | Nested United",
  },
  description:
    "Nested United is a unified ecosystem of specialized brands delivering smart project operations, hospitality management, technology solutions, marketing, and sustainable business growth.",
  keywords: [
    "Nested United",
    "business operations",
    "hospitality management",
    "project management Saudi Arabia",
    "smart operations",
    "JoyNest events",
    "TechNest technology",
    "OpNest real estate",
    "PrintNest branding",
    "TheNest boutique",
    "integrated business solutions",
  ],
  authors: [{ name: "Nested United", url: "https://nestedunited.com" }],
  creator: "Nested United",
  publisher: "Nested United",
  metadataBase: new URL("https://nestedunited.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nestedunited.com",
    siteName: "Nested United",
    title: "Nested United | From Operations to Growth",
    description:
      "A connected ecosystem of specialized brands — JoyNest, TechNest, OpNest, PrintNest & TheNest — delivering integrated business solutions across Saudi Arabia.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nested United – From Operations to Growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nested United | From Operations to Growth",
    description:
      "A connected ecosystem of specialized brands delivering integrated business solutions.",
    images: ["/og-image.png"],
    creator: "@nestedunited",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${redHatDisplay.variable} ${geistMono.variable} ${ibmPlexArabic.variable} h-full antialiased`}
    >
      <head>
        <meta name="theme-color" content="#fffbf3" />
        <meta name="color-scheme" content="light" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className="min-h-full flex flex-col m-0 p-0">
        <LanguageProvider>
          <a href="#main-content" className="skip-link">Skip to main content</a>
          <PageLoader />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
