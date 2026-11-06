import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Broadway Store-All",
  description: "Brand identity refresh for Broadway Store-All with a custom, scalable logo system.",
};

export default function BroadwayStoreAllLayout({ children }: { children: React.ReactNode }) {
  return children;
}
