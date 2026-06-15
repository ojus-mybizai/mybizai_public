import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import UtmTracker from "@/components/UtmTracker";
import { site } from "@/lib/site";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "MyBizAI — Your business, run by AI, on WhatsApp",
    template: "%s | MyBizAI",
  },
  description: site.description,
  keywords: [
    "whatsapp ai agent for business",
    "whatsapp automation india",
    "ai crm for small business india",
    "meta business agent alternative",
    "whatsapp business ai",
  ],
  openGraph: {
    type: "website",
    siteName: "MyBizAI",
    url: site.domain,
    title: "MyBizAI — Your business, run by AI, on WhatsApp",
    description: site.description,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyBizAI — Your business, run by AI, on WhatsApp",
    description: site.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#0b0b14",
  width: "device-width",
  initialScale: 1,
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MyBizAI",
  legalName: site.legalEntity,
  url: site.domain,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ward No. 8, Beach Para Sankra, Nagri",
    addressLocality: "Dhamtari",
    addressRegion: "Chhattisgarh",
    postalCode: "493778",
    addressCountry: "IN",
  },
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MyBizAI",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: site.description,
  offers: {
    "@type": "Offer",
    price: "1999",
    priceCurrency: "INR",
    description: "Starter plan, per month. 15-day free trial, no card required.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-semibold"
        >
          Skip to content
        </a>
        <NavBar />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
        <UtmTracker />
      </body>
    </html>
  );
}
