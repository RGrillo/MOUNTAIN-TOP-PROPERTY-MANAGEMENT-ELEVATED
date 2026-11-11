import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

const description =
  "Maximise your short-term rental portfolio with Mountain Top. AI-powered property management, guest operations and revenue optimisation across the UK and Ireland.";

export const metadata: Metadata = {
  title: "Mountain Top | AI-Powered Short-Term Rental Management",
  description,
  keywords: [
    "airbnb management UK",
    "short-term rental management UK",
    "airbnb property management Ireland",
    "holiday rental management",
    "short-term rental property management",
    "AI property management",
    "airbnb management for investors",
    "multi-property airbnb management",
    "short-term rental revenue management",
  ],
  authors: [{ name: "Mountain Top" }],
  creator: "Mountain Top",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Mountain Top",
    title: "Mountain Top | AI-Powered Short-Term Rental Management",
    description,
    images: [
      {
        url: "/images/exterior-dusk-1600.webp",
        width: 1600,
        height: 1067,
        alt: "A contemporary short-term rental property at dusk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mountain Top | AI-Powered Short-Term Rental Management",
    description,
    images: ["/images/exterior-dusk-1600.webp"],
  },
  ...(siteUrl
    ? {
        metadataBase: new URL(siteUrl),
        alternates: { canonical: "/" },
      }
    : {}),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#173D32",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${manrope.variable} ${inter.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
