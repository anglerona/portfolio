import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chasepixel",
  description: "SVG character assets created for the web design startup Chasepixel.",
};

export default function ChasepixelLayout({ children }: { children: React.ReactNode }) {
  return children;
}
