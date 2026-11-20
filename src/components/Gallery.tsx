"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import Left from "@/assets/left.svg";
import Right from "@/assets/right.svg";
import X from "@/assets/x.svg";

// Thumbnail and full-size `sizes` are shared between the grid, the viewer and the
// preloads, so the browser picks the exact same files and reuses its cache.
const THUMB_SIZES = "(min-width: 1200px) 33vw, (min-width: 768px) 40vw, 80vw";
const FULL_SIZES = "(min-width: 1024px) 75vw, 100vw";

interface ImageGalleryProps {
  images: string[];
  /** Optional descriptions for each image (same order as `images`). */
  alts?: string[];
  columns?: 2 | 3;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  alts,
  columns = 3,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  // Thumbnail being hovered/focused: start fetching its full-size version early.
  const [warmIndex, setWarmIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const lastOpened = useRef<number | null>(null);

  const altFor = (i: number) =>
    alts?.[i] ?? `Image ${i + 1} of ${images.length}`;

  const openImage = (index: number) => {
    lastOpened.current = index;
    setSelectedIndex(index);
  };

  const closeImage = useCallback(() => setSelectedIndex(null), []);

  const step = useCallback(
    (dir: 1 | -1) =>
      setSelectedIndex((i) =>
        i === null ? i : (i + dir + images.length) % images.length,
      ),
    [images.length],
  );
  const showPrevImage = useCallback(() => step(-1), [step]);
  const showNextImage = useCallback(() => step(1), [step]);

  const isOpen = selectedIndex !== null;

  // While open: lock page scroll and move focus into the viewer.
  // On close: restore scroll and return focus to the thumbnail that opened it.
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const returnTo = lastOpened.current;
    const thumbs = thumbRefs.current;
    return () => {
      document.body.style.overflow = "";
      if (returnTo !== null) thumbs[returnTo]?.focus();
    };
  }, [isOpen]);

  // Keyboard: Esc closes, arrow keys navigate, Tab stays inside the viewer.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeImage();
      else if (e.key === "ArrowLeft") showPrevImage();
      else if (e.key === "ArrowRight") showNextImage();
      else if (e.key === "Tab" && dialogRef.current) {
        const buttons =
          dialogRef.current.querySelectorAll<HTMLButtonElement>("button");
        const first = buttons[0];
        const last = buttons[buttons.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closeImage, showPrevImage, showNextImage]);

  // Close modal if clicking outside the image or buttons
  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (e.target === e.currentTarget) {
      closeImage();
    }
  };

  // Swipe handlers using react-swipeable (its ref is merged with ours below)
  const { ref: swipeRef, ...swipeHandlers } = useSwipeable({
    onSwipedLeft: () => showNextImage(),
    onSwipedRight: () => showPrevImage(),
    trackMouse: true,
  });

  return (
    <div>
      {/* Responsive Horizontal Scroll on Mobile, Grid on Larger Screens */}
      <div
        className={`flex lg:grid ${
          columns === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"
        } scrollbar-hide gap-4 items-start overflow-x-auto lg:overflow-visible flex-nowrap lg:flex-wrap`}
      >
        {images.map((image, index) => (
          <button
            type="button"
            key={`${image}-${index}`}
            ref={(el) => {
              thumbRefs.current[index] = el;
            }}
            className="cursor-zoom-in flex-shrink-0 w-[80%] sm:w-[60%] md:w-[40%] lg:w-full overflow-hidden"
            onClick={() => openImage(index)}
            onPointerEnter={() => setWarmIndex(index)}
            onFocus={() => setWarmIndex(index)}
            aria-label={`${altFor(index)}, view larger`}
          >
            <Image
              src={image}
              alt=""
              width={1200}
              height={1200}
              sizes={THUMB_SIZES}
              className="w-full h-full object-cover"
              priority={index === 0}
            />
          </button>
        ))}
      </div>

      {warmIndex !== null && selectedIndex === null && (
        <Image
          key={`warm-${images[warmIndex]}`}
          src={images[warmIndex]}
          alt=""
          aria-hidden="true"
          width={1600}
          height={1600}
          sizes={FULL_SIZES}
          loading="eager"
          className="hidden"
        />
      )}

      {/* Modal Carousel */}
      {selectedIndex !== null && (
        <div
          ref={(el) => {
            dialogRef.current = el;
            swipeRef(el);
          }}
          role="dialog"
          aria-modal="true"
          aria-label={`Image viewer, ${selectedIndex + 1} of ${images.length}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={handleOverlayClick}
          {...swipeHandlers}
        >
          {/* X Button Positioned at the Top-Right of the Screen */}
          <button
            ref={closeRef}
            type="button"
            className="absolute top-4 right-4 text-white opacity-70 hover:opacity-100 focus-visible:opacity-100 duration-200 text-3xl font-bold p-3 z-50"
            onClick={closeImage}
            aria-label="Close image viewer"
          >
            <X className="h-4 w-4 md:h-5 md:w-5 fill-current" aria-hidden="true" />
          </button>

          {/*
            Fixed viewing area: every image is scaled to fit it (keeping its shape),
            so small and large source files all show at the same size.
            Clicks on the empty space around the image pass through to the overlay.
          */}
          <div className="pointer-events-none relative h-[80vh] w-[calc(100vw-5rem)] md:h-[88vh] md:w-[calc(100vw-10rem)]">
            {/*
              Bottom layer: the same file and size as the thumbnail, already in the
              browser cache, so something correct shows instantly. Keyed by src so
              switching images never shows the previous picture.
            */}
            <Image
              key={`thumb-${images[selectedIndex]}`}
              src={images[selectedIndex]}
              alt=""
              aria-hidden="true"
              fill
              sizes={THUMB_SIZES}
              loading="eager"
              className="border-0 object-contain"
            />
            {/*
              Top layer: full-size version. Until it arrives it draws nothing, so the
              thumbnail underneath shows through; no load event needed.
            */}
            <Image
              key={`full-${images[selectedIndex]}`}
              src={images[selectedIndex]}
              alt={altFor(selectedIndex)}
              fill
              sizes={FULL_SIZES}
              loading="eager"
              className="border-0 object-contain"
            />
          </div>

          {/* Preload the neighbouring full-size images so the arrows feel instant. */}
          {images.length > 1 &&
            [-1, 1].map((d) => {
              const src = images[(selectedIndex + d + images.length) % images.length];
              return (
                <Image
                  key={`preload-${src}`}
                  src={src}
                  alt=""
                  aria-hidden="true"
                  width={1600}
                  height={1600}
                  sizes={FULL_SIZES}
                  loading="eager"
                  className="hidden"
                />
              );
            })}

          {images.length > 1 && (
            <>
              {/* Left Button Fixed Outside Image */}
              <button
                type="button"
                onClick={showPrevImage}
                aria-label="Previous image"
                className="fixed left-1 md:left-8 top-1/2 text-white duration-200 opacity-70 hover:opacity-100 focus-visible:opacity-100 text-3xl p-3 md:p-4 transform -translate-y-1/2 z-50"
              >
                <Left className="h-3 w-3 md:h-5 md:w-5 fill-current" aria-hidden="true" />
              </button>

              {/* Right Button Fixed Outside Image */}
              <button
                type="button"
                onClick={showNextImage}
                aria-label="Next image"
                className="fixed right-1 md:right-8 top-1/2 text-white duration-200 opacity-70 hover:opacity-100 focus-visible:opacity-100 text-3xl p-3 md:p-4 transform -translate-y-1/2 z-50"
              >
                <Right className="h-3 w-3 md:h-5 md:w-5 fill-current" aria-hidden="true" />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
