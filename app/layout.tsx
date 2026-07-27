import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://arawsolar.ph"),
  title: "Araw Solar | Solar made for Philippine roofs",
  description:
    "A warm, modern solar landing page for Philippine homeowners and businesses.",
  keywords: [
    "solar panels Philippines",
    "solar energy Philippines",
    "rooftop solar Manila",
    "grid-tied solar PH",
    "commercial solar installation",
    "residential solar PH",
    "Araw Solar",
    "clean energy Philippines",
  ],
  authors: [{ name: "Araw Solar", url: "https://arawsolar.ph" }],
  creator: "Araw Solar",
  publisher: "Araw Solar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-PH": "/",
      en: "/",
    },
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
  category: "Renewable Energy",
  openGraph: {
    title: "Araw Solar | Solar made for Philippine roofs",
    description:
      "A warm, modern solar landing page for Philippine homeowners and businesses.",
    url: "https://arawsolar.ph",
    siteName: "Araw Solar",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Araw Solar - Solar made for Philippine roofs",
      },
    ],
    locale: "en_PH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Araw Solar | Solar made for Philippine roofs",
    description:
      "A warm, modern solar landing page for Philippine homeowners and businesses.",
    images: ["/images/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RenewableEnergyCompany",
  name: "Araw Solar",
  url: "https://arawsolar.ph",
  logo: "https://arawsolar.ph/images/og-image.png",
  image: "https://arawsolar.ph/images/og-image.png",
  description:
    "Thoughtful solar systems for Philippine homes and businesses—designed around your property, your priorities, and what comes next.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "PH",
  },
  areaServed: {
    "@type": "Country",
    name: "Philippines",
  },
  priceRange: "$$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
