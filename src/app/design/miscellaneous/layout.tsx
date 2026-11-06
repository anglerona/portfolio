import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Miscellaneous",
  description:
    "Editorial illustration for UW Imprint, plus social media graphics and event posters for the Computer Science Club, Crafts4Charity and MathSoc.",
};

export default function MiscellaneousLayout({ children }: { children: React.ReactNode }) {
  return children;
}
