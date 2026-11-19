import type { Metadata } from "next";
import DuckAvatar from "@/components/DuckAvatar";
import ExternalLink from "@/components/ExternalLink";
import { EMAIL, LINKS } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "About Angelina: software engineering student at the University of Waterloo and freelance designer.",
};

export default function About() {
  return (
    <main
      id="main"
      className="site-container flex flex-col gap-14 pb-24 pt-12 md:flex-row md:items-start md:justify-between md:gap-10 md:pt-[100px]"
    >
      <div>
        <h1 className="page-title">About</h1>

        <div className="mt-14 max-w-[640px] space-y-5 text-lg leading-7 text-ink">
          <p>
            Hi! I&apos;m Angelina and I&apos;m a Software Engineering student at the
            University of Waterloo. I graduate in April 2027 and I&apos;m looking for a
            full-time role, ideally in full-stack, frontend or design engineering.
          </p>
          <p>
            I&apos;ve done six co-op terms, most recently at Clio, building web apps
            with TypeScript, React, Next.js, Python and Django. I especially like
            frontend work and making sure what I build is accessible to everyone.
          </p>
          <p>
            When I&apos;m not coding, I&apos;m usually designing or drawing. I take on
            freelance branding, illustration and UI work. I&apos;m based in Canada and
            happy to work remotely or relocate.
          </p>
        </div>

        <ul className="mt-10 flex flex-wrap gap-6">
          <li>
            <a href="/resume" className="text-link">
              Resume
            </a>
          </li>
          <li>
            <a href={`mailto:${EMAIL}`} className="text-link">
              Email
            </a>
          </li>
          <li>
            <ExternalLink href={LINKS.linkedin} className="text-link">
              LinkedIn
            </ExternalLink>
          </li>
        </ul>
      </div>
      <DuckAvatar className="w-[220px] md:mt-14 md:w-[300px] lg:w-[400px]" />
    </main>
  );
}
