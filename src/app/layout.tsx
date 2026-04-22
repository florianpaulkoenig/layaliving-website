import type { Metadata, Viewport } from "next";
import { EB_Garamond, Inter, Dancing_Script } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const display = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500"],
  style: ["normal", "italic"],
});
const body = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
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
  themeColor: "#f4f1ea",
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
