import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RDG Properties",
  description: "Brand identity refresh for RDG Properties Inc: logos, business cards and signage.",
};

export default function RdgLayout({ children }: { children: React.ReactNode }) {
  return children;
}
