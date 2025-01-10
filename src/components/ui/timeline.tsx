"use client";

import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
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
    offset: ["start 20%", "end 80%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);

  const circleProgress = data.map((_, index) =>
    useTransform(
      scrollYProgress,
      [index / data.length, (index + 1) / data.length],
      [0, 1]
    )
  );

  return (
    <div
      className="w-full bg-transparent font-sans md:px-10 mb-8 overflow-clip"
      ref={containerRef}
      style={{ scrollBehavior: "smooth" }}
    >
      <h2 className="pt-12 font-semibold text-4xl text-center">Work History</h2>

      <div ref={ref} className="relative max-w-7xl space-y-20 mx-auto pt-20">
        {data.map((item, index) => (
          <div key={index} className={`flex justify-center pb-32 ${index < data.length - 1 ? "md:pb-48" : "pb-20"}`}>
            {/* Sticky title and circle */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-32 self-start max-w-xs lg:max-w-sm md:w-full">
              <div
                className="relative h-10 w-10 aspect-square"
                style={{
                  left: "calc(1rem - 1px)", // Align with the gradient line
                }}
              >
                {/* Circle Outline */}
                <div className="absolute inset-0 rounded-full border-2 bg-[#0B0111] border-[#D2B5F9] flex items-center justify-center">
                  {/* Fill Animation */}
                  <motion.div
                    style={{
                      scale: circleProgress[index],
                    }}
                    className="h-4 w-4 rounded-full bg-[#D2B5F9]"
                  />
                </div>
              </div>
              <h3 className="hidden lg:block text-xl pl-4 lg:pl-20 md:text-3xl font-bold text-white">
                {item.title}
              </h3>
            </div>

            {/* Content Section */}
            <div className="relative pl-14 pr-4 lg:pl-4 w-full">
              <h3 className="lg:hidden block text-xl md:text-3xl  mb-4 text-left font-bold text-white">
                {item.title}
              </h3>
              <div>
              {item.content}
              </div>
            </div>
          </div>
        ))}

        {/* Gradient Line Animation */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-[calc(2.5rem-6px)] top-0 w-[2px] bg-gradient-to-b from-neutral-800 to-transparent"
        >
          <motion.div
            style={{
              height: heightTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-[#D2B5F9] to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
