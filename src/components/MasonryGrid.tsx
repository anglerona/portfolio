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
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short" });
}

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

  return (
    <FadeInSection>
      <div id="projects" className="pb-12">
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
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
              {filtered.map((project) => {
                const dateLabel = formatDate(project.updatedAt);

                return (
                  <Link
                    key={project.slug}
                    href={`/design/${project.slug}`}
                    className={[
                      "group relative block overflow-hidden rounded-2xl",
                      "border border-white/20 bg-black/10 backdrop-blur-sm",
                      "mb-4 focus:outline-none focus:ring-2 focus:ring-purple-300/60",
                    ].join(" ")}
                    style={{ breakInside: "avoid" }}
                    aria-label={`Open project ${project.name}`}
                  >
                    {/* Image keeps natural aspect ratio */}
                    <Image
                      src={project.imageUrl}
                      alt={project.coverAlt ?? project.name}
                      width={2000}
                      height={2000}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />

                    {/* Hover overlay only */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

                      {/* Tags + description */}
                      <div className="absolute inset-x-0 bottom-0 p-4">
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

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="absolute inset-0 rounded-2xl border border-white/30" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
