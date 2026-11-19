"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  DESIGN_PROJECTS,
  DESIGN_TAGS,
  formatUpdated,
  type DesignProject,
  type DesignTag,
} from "@/data/design";

/**
 * Text that keeps the same width whether or not it's bold: an invisible bold
 * copy reserves the space, so neighbouring items don't shift.
 */
export function StableBold({ text, bold }: { text: string; bold: boolean }) {
  return (
    <span className="inline-grid">
      <span aria-hidden="true" className="invisible col-start-1 row-start-1 font-bold">
        {text}
      </span>
      <span className={`col-start-1 row-start-1 ${bold ? "font-bold" : ""}`}>{text}</span>
    </span>
  );
}

// One layout per breakpoint (Tailwind md = 768px, lg = 1200px); hidden ones use
// display:none, so their lazy images never load.
const COLUMN_LAYOUTS = [
  { count: 1, className: "flex md:hidden" },
  { count: 2, className: "hidden md:flex lg:hidden" },
  { count: 3, className: "hidden lg:flex" },
];

function ProjectCard({ project, priority }: { project: DesignProject; priority: boolean }) {
  const updated = formatUpdated(project.updatedAt);
  return (
    <Link
      href={`/design/${project.slug}`}
      className="group block border border-line bg-paper p-4 shadow-[0_1px_3px_rgba(11,11,20,0.06)] transition-colors hover:border-muted"
    >
      <Image
        src={project.imageUrl}
        alt={project.coverAlt ?? ""}
        width={project.imageWidth}
        height={project.imageHeight}
        sizes="(min-width: 1200px) 405px, (min-width: 768px) 50vw, 100vw"
        className="h-auto w-full border-0"
        priority={priority}
      />
      <h2 className="card-title mt-4 underline-offset-4 group-hover:underline">{project.name}</h2>
      <p className="meta mt-1">{project.tags.join(" · ")}</p>
      {updated && (
        <p className="meta">
          Updated <time dateTime={project.updatedAt}>{updated}</time>
        </p>
      )}
    </Link>
  );
}

/** Design page: one-at-a-time tag filter + a masonry grid that keeps each cover's shape. */
export default function DesignGrid() {
  const [filter, setFilter] = useState<DesignTag | "All">("All");

  const projects =
    filter === "All" ? DESIGN_PROJECTS : DESIGN_PROJECTS.filter((p) => p.tags.includes(filter));

  return (
    <>
      <div
        role="group"
        aria-label="Filter projects by type"
        className="mt-8 flex gap-x-6 gap-y-2 overflow-x-auto pb-1 scrollbar-hide md:flex-wrap md:overflow-visible"
      >
        {(["All", ...DESIGN_TAGS] as const).map((tag) => {
          const active = filter === tag;
          return (
            <button
              key={tag}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(tag)}
              className={`shrink-0 whitespace-nowrap text-[15px] font-medium ${
                active ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              <StableBold text={tag} bold={active} />
            </button>
          );
        })}
      </div>
      <p role="status" className="sr-only">
        Showing {projects.length} {projects.length === 1 ? "project" : "projects"}
        {filter === "All" ? "" : ` tagged ${filter}`}
      </p>

      {/*
        Projects are dealt into columns round-robin (1st -> col 1, 2nd -> col 2, ...)
        so the newest fill the top row while each column stacks covers at their own height.
      */}
      <div className="mt-10">
        {COLUMN_LAYOUTS.map(({ count, className }) => (
          <div key={count} className={`${className} items-start gap-8`}>
            {Array.from({ length: count }, (_, col) => (
              <ul key={col} className="flex min-w-0 flex-1 flex-col gap-8">
                {projects
                  .map((project, i) => ({ project, i }))
                  .filter(({ i }) => i % count === col)
                  .map(({ project, i }) => (
                    <li key={project.slug}>
                      <ProjectCard project={project} priority={i < count} />
                    </li>
                  ))}
              </ul>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
