"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FadeInSection from "./FadeInSection";
import Badge from "./Badge";

export interface Project {
  name: string;
  description: string;
  imageUrl: string;
  slug: string;
  tags: string[];
  company?: string;
  updatedAt?: string; // "yyyy-mm-dd"
  coverAlt?: string;
}

interface MasonryGridProps {
  projects: Project[];
}

function formatDate(iso?: string) {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  // Fixed locale + time zone so the server and browser render the same text
  // (otherwise React throws a hydration error, e.g. "Sep" vs "Sept").
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    timeZone: "UTC",
  });
}

const COLUMN_LAYOUTS = [
  { count: 1, className: "flex md:hidden" },
  { count: 2, className: "hidden md:flex lg:hidden" },
  { count: 3, className: "hidden lg:flex" },
];

export default function MasonryGrid({ projects }: MasonryGridProps) {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [isTransitioning, setIsTransitioning] = useState(false);

  const allTags = useMemo(() => {
    const s = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => s.add(t)));
    return ["All", ...Array.from(s).sort((a, b) => a.localeCompare(b))];
  }, [projects]);

  const sorted = useMemo(() => {
    return [...projects].sort((a, b) => {
      const ta = a.updatedAt ? new Date(a.updatedAt).getTime() : 0;
      const tb = b.updatedAt ? new Date(b.updatedAt).getTime() : 0;
      if (tb !== ta) return tb - ta;
      return a.name.localeCompare(b.name);
    });
  }, [projects]);

  const filtered = useMemo(() => {
    if (selected.size === 0) return sorted;
    return sorted.filter((p) => p.tags.some((t) => selected.has(t)));
  }, [sorted, selected]);

  const toggleTag = (tag: string) => {
    setIsTransitioning(true);

    setTimeout(() => {
      if (tag === "All") {
        setSelected(new Set());
      } else {
        setSelected((prev) => {
          const next = new Set(prev);
          if (next.has(tag)) next.delete(tag);
          else next.add(tag);
          return next;
        });
      }

      setTimeout(() => setIsTransitioning(false), 80);
    }, 220);
  };

  const renderCard = (project: Project) => {
    const dateLabel = formatDate(project.updatedAt);

    return (
      <Link
        key={project.slug}
        href={`/design/${project.slug}`}
        className={[
          "group relative block overflow-hidden",
          "border border-white/20 bg-black/10 backdrop-blur-sm",
          "focus:outline-none focus:ring-2 focus:ring-purple-300/60",
        ].join(" ")}
        aria-label={`Open project ${project.name}`}
      >
        {/* Image keeps natural aspect ratio */}
        <Image
          src={project.imageUrl}
          alt={project.coverAlt ?? project.name}
          width={2000}
          height={2000}
          sizes="(min-width: 1200px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03] group-focus-visible:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />

        {/* Hover overlay only */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300">
          {/* darken on hover */}
          <div className="absolute inset-0 bg-black/70" />

          {dateLabel && (
            <div className="absolute top-3 right-3">
              <Badge
                label={`Updated ${dateLabel}`}
                variant="glass"
                className="text-[11px]"
              />
            </div>
          )}

          {/* Title + tags + description */}
          <div className="absolute inset-x-0 bottom-0 p-4">
            <h3 className="mb-3 text-xl font-semibold text-white">
              {project.name}
            </h3>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <Badge
                  key={`${project.slug}-${t}`}
                  label={t}
                  variant="glass"
                />
              ))}
            </div>

            <p className="mt-3 text-sm text-white/85 max-w-[65ch]">
              {project.description}
            </p>
          </div>
        </div>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 border border-white/30" />
        </div>
      </Link>
    );
  };

  return (
    <FadeInSection>
      <div id="projects" className="pb-12 scroll-mt-20">
        <div className="px-4">
          <h2 className="py-10 font-semibold text-4xl text-center">Projects</h2>

          {/* Filters */}
          <div className="mb-8">
            <div className="flex md:justify-center p-2 overflow-x-auto gap-3 scrollbar-hide">
              {allTags.map((tag) => {
                const isAll = tag === "All";
                const isActive = isAll
                  ? selected.size === 0
                  : selected.has(tag);

                return (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-6 py-2 text-sm sm:text-base border rounded-full transition-all duration-200 whitespace-nowrap ${
                      isActive
                        ? "text-purple-300 border-purple-300 shadow-[0_0_5px_1.5px_rgba(212,159,255,0.5)]"
                        : "text-white border-white opacity-70 hover:opacity-100"
                    }`}
                    aria-pressed={isActive}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>

            <p className="text-center text-white/70 text-sm mt-3">
              Showing {filtered.length} project
              {filtered.length === 1 ? "" : "s"}
              {selected.size > 0
                ? " • filtered by type"
                : " • sorted by most recently updated"}
            </p>
          </div>
        </div>

        {/* Masonry */}
        <div
          className={`transition-opacity duration-500 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="px-4">
            {/*
              Deal projects into columns round-robin (1st -> col 1, 2nd -> col 2, ...)
              so the newest projects fill the top row. One layout per breakpoint;
              the hidden ones use display:none, so their lazy images never load.
            */}
            {COLUMN_LAYOUTS.map(({ count, className }) => (
              <div key={count} className={`${className} items-start gap-4`}>
                {Array.from({ length: count }, (_, col) => (
                  <div key={col} className="flex min-w-0 flex-1 flex-col gap-4">
                    {filtered
                      .filter((_, i) => i % count === col)
                      .map(renderCard)}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
