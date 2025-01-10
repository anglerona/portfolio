"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-transparent font-sans md:px-10 mb-8 overflow-clip"
      ref={containerRef}
      style={{ scrollBehavior: "smooth" }}
    >
      <h2 className="pt-12 font-semibold text-4xl text-center">Work History</h2>

      <div ref={ref} className="relative max-w-7xl mx-auto space-y-20 pt-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pb-32 md:pb-48 md:gap-10"
          >
            {/* Circle and Sticky Title */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-[#0B0111] flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-[#0B0111]  border-2 border-purple-300  p-2" />
              </div>
              <h3 className="hidden lg:block text-xl md:pl-20 md:text-3xl font-bold text-white ">
                {item.title}
              </h3>
            </div>

            {/* Content Section */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="lg:hidden block text-xl md:text-3xl mb-4 text-left font-bold text-white ">
                {item.title}
              </h3>
              <div>{item.content}</div>
            </div>
          </div>
        ))}

        {/* Gradient Line Animation */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-800 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-200 via-purple-300 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
