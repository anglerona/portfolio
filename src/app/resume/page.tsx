import type { Metadata } from "next";
import ExternalLink from "@/components/ExternalLink";
import { LINKS } from "@/data/site";

export const metadata: Metadata = {
  title: "Resume",
  description: "Angelina's code and design resumes.",
};

const RESUMES = [
  { title: "Code resume", detail: "Software engineering · PDF", href: LINKS.codeResume, file: "Angelina-Wu-Code-Resume.pdf" },
  { title: "Design resume", detail: "Design and illustration · PDF", href: LINKS.designResume, file: "Angelina-Wu-Design-Resume.pdf" },
];

export default function Resume() {
  return (
    <main id="main" className="site-container pb-24 pt-12 md:pt-[100px]">
      <h1 className="page-title">Resume</h1>

      <ul className="mt-14 border-t border-line">
        {RESUMES.map((r) => (
          <li
            key={r.href}
            className="flex flex-col gap-3 border-b border-line py-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <h2 className="card-title">{r.title}</h2>
              <p className="text-base text-muted">{r.detail}</p>
            </div>
            <div className="flex gap-6 text-[15px]">
              <ExternalLink href={r.href} className="font-medium text-ink hover:underline underline-offset-4">
                View PDF<span className="sr-only">: {r.title}</span>
              </ExternalLink>
              <a href={r.href} download={r.file} className="text-brand hover:underline underline-offset-4">
                Download<span className="sr-only"> {r.title}</span>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
