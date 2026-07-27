import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://arawsolar.ph"),
  title: "Araw Solar | Solar made for Philippine roofs",
  description:
    "A warm, modern solar landing page for Philippine homeowners and businesses.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
