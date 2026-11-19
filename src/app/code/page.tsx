import type { Metadata } from "next";
import ExternalLink from "@/components/ExternalLink";
import { CODE_PROJECTS, EXPERIENCE } from "@/data/code";

export const metadata: Metadata = {
  title: "Code",
  description: "Angelina's co-op experience and coding projects.",
};

export default function Code() {
  return (
    <main id="main" className="site-container pb-24 pt-12 md:pt-[100px]">
      <h1 className="page-title">Code</h1>

      <section aria-labelledby="experience" className="mt-14">
        <h2 id="experience" className="section-heading">Experience</h2>
        <ul className="mt-4 border-t border-line">
          {EXPERIENCE.map((job) => (
            <li
              key={`${job.company}-${job.dates}`}
              className="flex flex-col gap-1 border-b border-line py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
            >
              <div>
                <h3 className="card-title">{job.company}</h3>
                <p className="text-[15px] leading-[23px] text-muted">{job.role}</p>
              </div>
              <p className="meta shrink-0 sm:pt-1">{job.dates}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="projects" className="mt-20">
        <h2 id="projects" className="section-heading">Projects</h2>
        <ul className="mt-4 border-t border-line">
          {CODE_PROJECTS.map((project) => (
            <li
              key={project.name}
              className="flex flex-col gap-3 border-b border-line py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
            >
              <div className="max-w-[720px]">
                <h3 className="card-title">{project.name}</h3>
                <p className="mt-1 text-[15px] leading-[23px] text-muted">{project.description}</p>
              </div>
              <ul className="flex shrink-0 gap-5 text-sm font-medium text-ink sm:pt-1">
                <li>
                  <ExternalLink href={project.github} className="hover:underline underline-offset-4">
                    GitHub<span className="sr-only"> for {project.name}</span>
                  </ExternalLink>
                </li>
                {project.liveSite && (
                  <li>
                    <ExternalLink href={project.liveSite} className="hover:underline underline-offset-4">
                      Live site<span className="sr-only"> for {project.name}</span>
                    </ExternalLink>
                  </li>
                )}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
