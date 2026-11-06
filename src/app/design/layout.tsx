import type { Metadata } from "next";

export const metadata: Metadata = {
  // `default` is this page's own title; `template` passes the site suffix
  // down to each case-study page (e.g. "Chasepixel · Angerlona").
  title: { default: "Design Portfolio", template: "%s · Angerlona" },
  description:
    "Angelina's design work: branding, UI/UX, illustration, merch and digital assets.",
};

export default function DesignLayout({ children }: { children: React.ReactNode }) {
  return children;
}
