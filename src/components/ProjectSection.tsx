import React from "react";

interface ProjectSectionProps {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

/** Case-study section: blue eyebrow label + Montserrat section heading, left aligned. */
export default function ProjectSection({ eyebrow, title, children, className = "" }: ProjectSectionProps) {
  return (
    <section className={["pt-16", className].join(" ")}>
      <div className="mb-6">
        {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
        <h2 className="section-heading">{title}</h2>
      </div>
      {children}
    </section>
  );
}
