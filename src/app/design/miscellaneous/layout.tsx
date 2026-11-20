import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Miscellaneous",
  description:
    "Social media graphics and event posters for Crafts4Charity, MathSoc and the Computer Science Club.",
};

export default function MiscellaneousLayout({ children }: { children: React.ReactNode }) {
  return children;
}
