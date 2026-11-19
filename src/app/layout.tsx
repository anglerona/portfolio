import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

// Headings: Montserrat Black Italic (Simple/Display, Simple/Heading, Simple/Brand)
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "900",
  style: "italic",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: { default: "Angerlona", template: "%s · Angerlona" },
  description:
    "Angelina's portfolio: software engineering student at uWaterloo and freelance designer/illustrator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png?v=2" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <SiteNav />
        <div className="flex flex-1 flex-col">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
