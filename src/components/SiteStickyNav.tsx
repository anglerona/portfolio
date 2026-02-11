"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type NavItem = {
  name: string;
  link: string;
  icon?: JSX.Element;
};

export default function SiteStickyNav({
  navItems,
  pageType,
  className,
}: {
  navItems: NavItem[];
  pageType: "dev" | "design";
  className?: string;
}) {
  const resumeLink =
    pageType === "dev" ? "/dev-resume.pdf" : "/design-resume.pdf";

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.includes("#")) return;

    e.preventDefault();
    const id = href.split("#")[1];
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={cn(
        "sticky top-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10",
        className,
      )}
    >
      <div className="mx-auto max-w-5xl px-4 py-3">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center justify-center flex-wrap gap-5">
            <Link
              href="/"
              className="rounded-full opacity-80 hover:opacity-100 duration-200"
              aria-label="Go home"
            >
              <Image
                src="/goose.png"
                alt="home"
                width={44}
                height={44}
                className="rounded-full"
                priority
              />
            </Link>

            {navItems.map((navItem, idx) => (
              <a
                key={`link-${idx}`}
                href={navItem.link}
                onClick={(e) => handleSmoothScroll(e, navItem.link)}
                className="relative text-neutral-300 hover:text-white transition-all duration-300 text-sm"
              >
                {navItem.name}
              </a>
            ))}

            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border text-sm font-medium relative border-white/[0.2] text-neutral-300 hover:text-white transition-all duration-300 px-4 py-2 rounded-full"
            >
              <span>Resume</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-purple-300 to-transparent h-px" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
