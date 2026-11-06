import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shiny Octo Potato",
  description: "Illustrated game assets for Shiny Octo Potato.",
};

export default function ShinyOctoPotatoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
