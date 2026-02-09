"use client";

import React from "react";
import BackButton from "@/components/BackButton";
import Badge from "@/components/Badge";

type BadgeVariant = "filled" | "outlined" | "glass";

interface ProjectStickyBarProps {
  badges: string[];
  badgeVariant?: BadgeVariant;
  className?: string;
}

export default function ProjectStickyBar({
  badges,
  badgeVariant = "glass",
  className = "",
}: ProjectStickyBarProps) {
  return (
    <div
      className={[
        "sticky top-0 z-20 bg-black/30 backdrop-blur-md border-b border-white/10",
        className,
      ].join(" ")}
    >
      <div className="mx-auto max-w-5xl px-4 py-3">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start">
            <BackButton />
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-2">
            {badges.map((b) => (
              <Badge key={b} label={b} variant={badgeVariant} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
