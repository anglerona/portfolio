import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Waterloo Quant Club",
  description: "Branding, UI/UX and social media design for the Waterloo Quant Club, including a full rebrand.",
};

export default function WqcLayout({ children }: { children: React.ReactNode }) {
  return children;
}
