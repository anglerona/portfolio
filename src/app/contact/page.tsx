import type { Metadata } from "next";
import CopyEmail from "@/components/CopyEmail";
import ExternalLink from "@/components/ExternalLink";
import { LINKS } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "How to reach Angelina.",
};

export default function Contact() {
  return (
    <main id="main" className="site-container pb-24 pt-12 md:pt-[100px]">
      <h1 className="page-title">Contact</h1>

      <p className="mt-14 text-lg leading-7 text-muted">Email is the fastest way to reach me.</p>

      <div className="mt-8">
        <CopyEmail />
      </div>

      <ul className="mt-10 flex flex-wrap gap-8 text-base font-medium text-ink">
        <li>
          <ExternalLink href={LINKS.github} className="hover:underline underline-offset-4">GitHub</ExternalLink>
        </li>
        <li>
          <ExternalLink href={LINKS.linkedin} className="hover:underline underline-offset-4">LinkedIn</ExternalLink>
        </li>
        <li>
          <ExternalLink href={LINKS.instagram} className="hover:underline underline-offset-4">
            Instagram<span className="sr-only"> (alonatanuki, art account)</span>
          </ExternalLink>
        </li>
      </ul>
    </main>
  );
}
