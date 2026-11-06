import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "Layouts and UI components designed for this portfolio website.",
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
