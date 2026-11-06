"use client";

import React, { useEffect, useRef } from "react";

interface LoopingVideoProps {
  src: string;
  label: string;
  width: number;
  height: number;
  className?: string;
}

/**
 * Short, silent, GIF-like video. Autoplays on a muted loop unless the visitor
 * prefers reduced motion; controls are always shown so it can be paused.
 */
export default function LoopingVideo({
  src,
  label,
  width,
  height,
  className = "",
}: LoopingVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!reduce.matches) {
      video.play().catch(() => {
        /* autoplay blocked: the controls still let people press play */
      });
    }
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      controls
      muted
      loop
      playsInline
      preload="metadata"
      width={width}
      height={height}
      aria-label={label}
    >
      Your browser can&apos;t play this video.{" "}
      <a href={src} className="underline">
        Download the video
      </a>
      .
    </video>
  );
}
