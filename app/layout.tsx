import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Araw Solar | Solar made for Philippine roofs",
  description:
    "A warm, modern solar landing page for Philippine homeowners and businesses.",
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
