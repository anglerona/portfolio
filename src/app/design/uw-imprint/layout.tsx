import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UW Imprint",
  description:
    "Editorial illustration and page design for UW Imprint, the University of Waterloo's student newspaper.",
};

export default function UWImprintLayout({ children }: { children: React.ReactNode }) {
  return children;
}
