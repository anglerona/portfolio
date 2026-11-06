import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Developer Portfolio",
  description:
    "Angelina's software projects and work history: full-stack and frontend development.",
};

export default function DevLayout({ children }: { children: React.ReactNode }) {
  return children;
}
