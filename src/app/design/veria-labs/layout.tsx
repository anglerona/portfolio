import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Veria Labs",
  description: "Flower-themed landing page and promo illustrations for Veria Labs.",
};

export default function VeriaLabsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
