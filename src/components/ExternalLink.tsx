import React from "react";

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  /** Show the ↗ arrow (default true). */
  arrow?: boolean;
}

/** Link that opens in a new tab, with a ↗ and screen-reader hint. */
export default function ExternalLink({ href, children, className = "", arrow = true }: ExternalLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1 ${className}`}>
      {children}
      {arrow && <span aria-hidden="true">↗</span>}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
