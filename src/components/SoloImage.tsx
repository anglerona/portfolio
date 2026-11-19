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
  /** Use a dark frame for light artwork on a transparent background. */
  dark?: boolean;
}

/** A single image, sharp corners, no frame (dark backdrop only for white-on-transparent art). */
export default function SoloImage({
  src,
  alt,
  heightClassName = "h-full",
  maxWidthClassName = "",
  priority = false,
  openInNewTab = false,
  caption,
  dark = false,
}: SoloImageProps) {
  const frame = (
    <div
      className={[
        "relative flex w-full items-center justify-center overflow-hidden",
        dark ? "bg-ink" : "",
        heightClassName,
        openInNewTab ? "cursor-zoom-in" : "",
      ].join(" ")}
    >
      <Image
        src={src}
        alt={alt}
        width={2400}
        height={1600}
        sizes="(min-width: 1440px) 1280px, 100vw"
        className="h-full w-auto max-w-full object-contain"
        priority={priority}
      />
    </div>
  );

  return (
    <figure className={`mx-auto w-full ${maxWidthClassName}`}>
      {openInNewTab ? (
        <a href={src} target="_blank" rel="noreferrer" className="block">
          {frame}
          <span className="sr-only"> (open full size in a new tab)</span>
        </a>
      ) : (
        frame
      )}
      {caption && <figcaption className="meta mt-3">{caption}</figcaption>}
    </figure>
  );
}
