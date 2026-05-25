import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { CurrencyProvider } from "@/context/CurrencyContext";
import { LanguageProvider } from "@/context/LanguageContext";
import CookieBanner from "@/components/CookieBanner";
import LocaleUrlSync from "@/components/LocaleUrlSync";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const SITE_URL = "https://andykgroup.com";
const SITE_TITLE =
  "Andy'K Group | End-to-End Business Development Architecture";
const SITE_DESCRIPTION =
  "Andy'K Group designs and operates end-to-end business development systems, public sector expansion strategies, and AI-powered operating infrastructure for growth-stage companies.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Andy'K Group",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "end-to-end business development",
    "business development architecture",
    "business operating system",
    "strategic growth infrastructure",
    "public sector expansion",
    "government procurement strategy",
    "B2G tenders",
    "EU tender support",
    "consortium structuring",
    "A.D.A.M. operating system",
    "Andy'K Group International LTD",
    "UK business development",
  ],
  authors: [{ name: "Andy'K Group International LTD" }],
  creator: "Andy'K Group International LTD",
  publisher: "Andy'K Group International LTD",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "Andy'K Group International LTD",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Andy'K Group International LTD — End-to-End Business Development Architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/opengraph-image.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} antialiased font-sans`}
      >
        <LanguageProvider>
          <CurrencyProvider>
            <LocaleUrlSync />
            {children}
            <CookieBanner />
          </CurrencyProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
