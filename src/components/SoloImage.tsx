"use client";

import React from "react";
import Image from "next/image";

interface SoloImageProps {
  src: string;
  alt: string;
  maxWidthClassName?: string;
  heightClassName?: string;
  priority?: boolean;
  openInNewTab?: boolean;
  caption?: string;
}

export default function SoloImage({
  src,
  alt,
  heightClassName = "h-full",
  maxWidthClassName = "max-w-5xl",
  priority = false,
  openInNewTab = false,
  caption,
}: SoloImageProps) {
  const frame = (
    <div
      className={[
        "relative flex items-center justify-center",
        "border border-white/15 bg-black/10",
        heightClassName,
        openInNewTab ? "cursor-zoom-in" : "",
      ].join(" ")}
    >
      <Image
        src={src}
        alt={alt}
        width={2400}
        height={1600}
        sizes="(min-width: 1024px) 1024px, 100vw"
        className="h-full w-auto object-contain"
        priority={priority}
      />
    </div>
  );

  return (
    <div className={`mx-auto flex justify-center ${maxWidthClassName}`}>
      {openInNewTab ? (
        <a href={src} target="_blank" rel="noreferrer" className="block">
          {frame}
        </a>
      ) : (
        frame
      )}

      {caption && (
        <p className="text-center text-white/60 text-sm mt-3">{caption}</p>
      )}
    </div>
  );
}
