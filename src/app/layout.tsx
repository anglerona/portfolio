import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="bg-background text-white antialiased">{children}</body>
    </html>
  );
}
