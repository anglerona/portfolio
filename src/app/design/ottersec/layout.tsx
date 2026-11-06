import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OtterSec",
  description: "Souvenir pin design commissioned by OtterSec.",
};

export default function OttersecLayout({ children }: { children: React.ReactNode }) {
  return children;
}
