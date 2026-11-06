import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Animusic Ensembles",
  description: "Illustrated event posters, stickers and merch for Animusic Ensembles.",
};

export default function AnimusicEnsemblesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
