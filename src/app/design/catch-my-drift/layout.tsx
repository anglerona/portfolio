import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catch My Drift",
  description:
    "UI assets, character sprites, and screen mockups for Catch My Drift, a beach-themed dating game.",
};

export default function CatchMyDriftLayout({ children }: { children: React.ReactNode }) {
  return children;
}
