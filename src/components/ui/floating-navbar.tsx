"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
  pageType,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
  pageType: "dev" | "design";
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleInitialVisibility = () => {
      const initialScrollY = window.scrollY || window.pageYOffset;
      if (initialScrollY < 5) {
        setVisible(true);
      }
    };

    handleInitialVisibility();
    window.addEventListener("load", handleInitialVisibility);

    return () => {
      window.removeEventListener("load", handleInitialVisibility);
    };
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious()!;

      if (current < 0.05 || direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  // Determine resume link based on pageType
  const resumeLink = pageType === "dev" ? "/dev-resume.pdf" : "/design-resume.pdf";

  // Smooth scroll handler
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault(); // Prevent the default link behavior
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-background shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-4 md:pl-8 py-2 items-center justify-center space-x-3 md:space-x-4",
            className
          )}
        >
          {navItems.map((navItem, idx) => (
            <React.Fragment key={`link-${idx}`}>
              {navItem.link === "/" ? (
                // Directly use Link for Home without smooth scroll
                <Link
                  href={navItem.link}
                  className={cn(
                    "relative text-neutral-300 items-center flex space-x-1 hover:text-white transition-all duration-300"
                  )}
                >
                  <span className="block sm:hidden">{navItem.icon}</span>
                  <span className="hidden sm:block text-sm">{navItem.name}</span>
                </Link>
              ) : (
                // For all other buttons, handle smooth scrolling
                <a
                  href={navItem.link}
                  onClick={(e) => {
                    const targetId = navItem.link.split("#")[1];
                    handleSmoothScroll(e, `#${targetId}`);
                  }}
                  className={cn(
                    "relative text-neutral-300 items-center flex space-x-1 hover:text-white transition-all duration-300"
                  )}
                >
                  <span className="block sm:hidden">{navItem.icon}</span>
                  <span className="hidden sm:block text-sm">{navItem.name}</span>
                </a>
              )}
            </React.Fragment>
          ))}
          <a
            href={resumeLink}
            download={`Angelina_Wu_${pageType.charAt(0).toUpperCase() + pageType.slice(1)}_Resume.pdf`}
            className="border text-sm font-medium relative border-white/[0.2] text-neutral-300 hover:text-white transition-all duration-300 px-4 py-2 rounded-full"
          >
            <span>Resume</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-purple-300 to-transparent h-px" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
