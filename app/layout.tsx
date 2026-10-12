import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Nunito_Sans,
  Mrs_Saint_Delafield,
} from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/ui/mobile-sticky-bar";
import { site } from "@/content/site";

// ─── Fonts ────────────────────────────────────────────────────────────────────
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-nunito",
  display: "swap",
});

const mrsSaintDelafield = Mrs_Saint_Delafield({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mrs-saint-delafield",
  display: "swap",
});

// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://drmayareynolds.com"),
  title: site.seo.title,
  description: site.seo.description,
  keywords: [...site.seo.keywords],
  authors: [{ name: `${site.brand.name}, ${site.brand.credential}` }],
  creator: site.brand.name,
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    url: "https://drmayareynolds.com",
    siteName: `${site.brand.name}, ${site.brand.credential}`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/maya/maya.jpeg",
        width: 1200,
        height: 630,
        alt: `${site.brand.name}, ${site.brand.credential} — ${site.brand.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
    images: ["/images/maya/maya.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ─── Root Layout ─────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${nunitoSans.variable} ${mrsSaintDelafield.variable}`}
    >
      <body className="antialiased">
        <Header />
        <main className="pt-[72px]">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
