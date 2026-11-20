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

/**
 * Footer of a case study: "← Design" on the left, and on the right the
 * "Next project" label sitting above the link to it.
 */
export function CaseStudyNext({ slug }: { slug: string }) {
  const next = getNextDesignProject(slug);
  const hasNext = next && next.slug !== slug;
  return (
    <nav
      aria-label="Case study"
      className="mt-16 flex flex-col gap-8 border-t border-line pt-8 sm:flex-row sm:items-end sm:justify-between"
    >
      <CaseStudyBack />
      {hasNext && (
        <div className="sm:text-right">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-muted">Next project</p>
          <Link
            href={`/design/${next.slug}`}
            className="section-heading mt-2 inline-block underline-offset-4 hover:underline"
          >
            {next.name} <span aria-hidden="true">→</span>
          </Link>
        </div>
      )}
    </nav>
  );
}
