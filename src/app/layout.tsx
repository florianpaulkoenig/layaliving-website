import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Lato, Dancing_Script } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});
const body = Lato({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
});
const script = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-script",
  weight: ["400", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F7F3EE",
};

export const metadata: Metadata = {
  title: "Laya Living — A little paradise near Lucerne",
  description:
    "Triangolo apartment with panoramic Alpine views — perfect for your Lucerne city trip, a romantic weekend, or a trip to Mount Pilatus.",
  metadataBase: new URL("https://layaliving.ch"),
  openGraph: {
    title: "Laya Living",
    description: "A little paradise near Lucerne.",
    type: "website",
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
      className={`${display.variable} ${body.variable} ${script.variable}`}
    >
      <body className="min-h-screen bg-cream text-ink antialiased font-sans">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
