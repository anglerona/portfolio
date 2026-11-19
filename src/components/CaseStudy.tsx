import Link from "next/link";
import { formatUpdated, getDesignProject, getNextDesignProject } from "@/data/design";

/** "← Design" link at the top of a case study. */
export function CaseStudyBack() {
  return (
    <Link href="/design" className="text-sm font-medium text-brand underline-offset-4 hover:underline">
      <span aria-hidden="true">← </span>Design
      <span className="sr-only"> projects</span>
    </Link>
  );
}

/** Tag line under a case-study title, with the "Updated Nov 2026" line below it. */
export function CaseStudyTags({ slug }: { slug: string }) {
  const project = getDesignProject(slug);
  if (!project) return null;
  const updated = formatUpdated(project.updatedAt);
  return (
    <div className="meta mt-6">
      <p>{project.tags.join(" · ")}</p>
      {updated && (
        <p>
          Updated <time dateTime={project.updatedAt}>{updated}</time>
        </p>
      )}
    </div>
  );
}

/** "Next project" link at the bottom of a case study. */
export function CaseStudyNext({ slug }: { slug: string }) {
  const next = getNextDesignProject(slug);
  if (!next || next.slug === slug) return null;
  return (
    <nav
      aria-label="Next project"
      className="mt-16 flex flex-col gap-2 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between"
    >
      <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-muted">Next project</p>
      <Link href={`/design/${next.slug}`} className="section-heading underline-offset-4 hover:underline">
        {next.name} <span aria-hidden="true">→</span>
      </Link>
    </nav>
  );
}
