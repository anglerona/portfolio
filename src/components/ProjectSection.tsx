"use client";

import React from "react";
import FadeInSection from "@/components/FadeInSection";

interface ProjectSectionProps {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function ProjectSection({
  eyebrow,
  title,
  children,
  className = "",
}: ProjectSectionProps) {
  return (
    <FadeInSection>
      <section className={["py-16", className].join(" ")}>
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-8 text-center">
            {eyebrow && (
              <p className="text-sm tracking-wide uppercase text-white/60 mb-2">
                {eyebrow}
              </p>
            )}
            <h2 className="text-3xl font-semibold">{title}</h2>
          </div>

          {children}
        </div>
      </section>
    </FadeInSection>
  );
}
