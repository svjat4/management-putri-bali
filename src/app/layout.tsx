import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import JsonLd from "@/components/seo/JsonLd";

const jakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://managementputribali.com"),
  title: {
    default: "Management Putri Bali | Talent Management & Event Organizer Profesional",
    template: "%s | Management Putri Bali"
  },
  description: "Agensi Talent Management & Event Organizer nomor satu di Bali. Menyediakan Jasa SPG Bali, Model, MC Profesional, Wedding Organizer, dan Penari Tradisional Bali.",
  keywords: ["Talent Bali", "Talent Management Bali", "Event Organizer Bali", "SPG Bali", "MC Bali", "Wedding Organizer Bali"],
  authors: [{ name: "Management Putri Bali" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://managementputribali.com",
    title: "Management Putri Bali | Talent Management & Event Organizer",
    description: "Agensi Talent Management & Event Organizer nomor satu di Bali.",
    siteName: "Management Putri Bali",
    images: [{ url: "/images/og-main.jpg", width: 1200, height: 630, alt: "Management Putri Bali" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Management Putri Bali",
    description: "Agensi Talent & Event Organizer Profesional di Bali."
  },
  alternates: {
    canonical: "./"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "SportsAndEntertainmentOrganizations",
    "name": "Management Putri Bali",
    "url": "https://managementputribali.com",
    "logo": "https://managementputribali.com/images/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Teuku Umar No.100",
      "addressLocality": "Denpasar",
      "addressRegion": "Bali",
      "postalCode": "80113",
      "addressCountry": "ID"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-812-3456-7890",
      "contactType": "sales",
      "availableLanguage": ["Indonesian", "English"]
    }
  };

  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${jakartaSans.className} bg-luxury-black text-white antialiased`}>
        <JsonLd schema={orgSchema} />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}