import type { Metadata } from "next";
import { Red_Hat_Display, Geist_Mono, IBM_Plex_Sans_Arabic } from "next/font/google";
import PageLoader from "@/components/PageLoader/PageLoader";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ClarityInit from "@/components/ClarityInit/ClarityInit";
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
    default: "Nested United | خدمات تقنية، عقارات، تسويق، فعاليات في جدة السعودية",
    template: "%s | Nested United",
  },
  description:
    "Nested United شركة سعودية متكاملة تقدم خدمات تقنية، إدارة مشاريع، تشغيل عقارات، تصميم جرافيك، طباعة، تسويق رقمي، تنظيم حفلات وفعاليات في جدة. نظام بيئي متكامل من العلامات التجارية المتخصصة.",
  keywords: [
    // Arabic keywords
    "خدمات تقنية جدة",
    "إدارة مشاريع السعودية",
    "تشغيل مشاريع جدة",
    "تقنية المعلومات السعودية",
    "إنشاء موقع إلكتروني جدة",
    "إدارة مواقع إلكترونية",
    "عقارات جدة",
    "تأجير عقارات جدة",
    "تأجير يومي جدة",
    "تأجير شهري جدة",
    "تسويق رقمي السعودية",
    "حملات إعلانية جدة",
    "Airbnb جدة",
    "إير بي إن بي جدة",
    "جاذر إن جدة",
    "طباعة جدة",
    "تصميم جرافيك جدة",
    "تصميم لوقو جدة",
    "إنشاء متجر إلكتروني جدة",
    "حفلات جدة",
    "تنسيق فعاليات جدة",
    "تنظيم مؤتمرات جدة",
    "تنظيم معارض جدة",
    // English keywords
    "Nested United",
    "Nested United Company",
    "tech services Jeddah",
    "project management Saudi Arabia",
    "real estate operations Jeddah",
    "property management Saudi Arabia",
    "daily rental Jeddah",
    "monthly rental Jeddah",
    "Airbnb management Jeddah",
    "graphic design Jeddah",
    "logo design Saudi Arabia",
    "printing services Jeddah",
    "digital marketing Saudi Arabia",
    "advertising campaigns Jeddah",
    "e-commerce store Saudi Arabia",
    "events Jeddah",
    "event planning Saudi Arabia",
    "conference organizer Jeddah",
    "exhibition organizer Saudi Arabia",
    "JoyNest events",
    "TechNest technology",
    "OpNest real estate",
    "PrintNest branding",
    "TheNest boutique",
    "integrated business solutions Saudi Arabia",
  ],
  authors: [{ name: "Nested United", url: "https://nestedunited.com" }],
  creator: "Nested United",
  publisher: "Nested United",
  metadataBase: new URL("https://nestedunited.com"),
  alternates: {
    canonical: "/",
    languages: {
      "ar-SA": "/",
      "en-US": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    alternateLocale: ["en_US"],
    url: "https://nestedunited.com",
    siteName: "Nested United",
    title: "Nested United | خدمات تقنية، عقارات، تسويق، فعاليات – جدة، السعودية",
    description:
      "Nested United — نظام بيئي متكامل من العلامات التجارية المتخصصة: JoyNest للفعاليات، TechNest للتقنية، OpNest للعقارات، PrintNest للطباعة والتسويق، TheNest للضيافة. خدماتنا في جدة والمملكة العربية السعودية.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@nestedunited",
    title: "Nested United | خدمات متكاملة في جدة – تقنية، عقارات، تسويق، فعاليات",
    description:
      "نظام بيئي متكامل من العلامات التجارية المتخصصة. خدمات تقنية، إدارة عقارات، تصميم، طباعة، تنظيم فعاليات في جدة والسعودية.",
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
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16",   type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32",   type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48",   type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96",   type: "image/png" },
      { url: "/icon-192.png",      sizes: "192x192",  type: "image/png" },
      { url: "/icon-512.png",      sizes: "512x512",  type: "image/png" },
      { url: "/favicon.ico",       sizes: "32x32",    type: "image/x-icon" },
    ],
    shortcut: ["/favicon-32x32.png"],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  category: "business",
  classification: "Business Services, Technology, Real Estate, Marketing",
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
        {/* Explicit favicon links — ensures Google crawler picks them up */}
        <link rel="icon" type="image/png" sizes="96x96"  href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="48x48"  href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="32x32"  href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16"  href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-full flex flex-col m-0 p-0">
        <ClarityInit />
        <LanguageProvider>
          <a href="#main-content" className="skip-link">Skip to main content</a>
          <PageLoader />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
