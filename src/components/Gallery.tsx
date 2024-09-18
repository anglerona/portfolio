"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState<boolean>(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const openImage = (index: number) => {
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const showPrevImage = () => {
    if (selectedIndex !== null && !transitioning) {
      setTransitioning(true);
      setTimeout(() => {
        const prevIndex = selectedIndex === 0 ? images.length - 1 : selectedIndex - 1;
        setSelectedIndex(prevIndex);
        setTransitioning(false);
      }, 300);
    }
  };

  const showNextImage = () => {
    if (selectedIndex !== null && !transitioning) {
      setTransitioning(true);
      setTimeout(() => {
        const nextIndex = selectedIndex === images.length - 1 ? 0 : selectedIndex + 1;
        setSelectedIndex(nextIndex);
        setTransitioning(false);
      }, 300);
    }
  };

  // Close modal if clicking outside the image or buttons
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      closeImage();
    }
  };

  // Swipe handlers using react-swipeable
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => showNextImage(),
    onSwipedRight: () => showPrevImage(),
    trackMouse: true, // This enables swiping using a mouse as well (optional)
  });

  return (
    <div>
      {/* Responsive Horizontal Scroll on Mobile, Grid on Larger Screens */}
      <div className="flex lg:grid lg:grid-cols-3 gap-4 items-center overflow-x-auto lg:overflow-visible flex-nowrap lg:flex-wrap">
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer flex-shrink-0 w-[80%] sm:w-[60%] md:w-auto"
            onClick={() => openImage(index)}
          >
            <Image
              src={image}
              alt={`Image ${index}`}
              width={1200}
              height={1200}
              className="w-full h-auto rounded-lg border border-white/20 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal Carousel */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={handleOverlayClick} // Attach overlay click handler
          {...swipeHandlers} // Attach swipe handlers to the carousel container
        >
          {/* X Button Positioned at the Top-Right of the Screen */}
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold p-2  rounded-full z-50"
            onClick={closeImage}
            aria-label="Close Carousel"
          >
            &times;
          </button>

          <div className="relative w-full lg:w-auto overflow-hidden" ref={carouselRef}>
            {/* Image with smooth transition */}
            <div className={`transition-opacity duration-500 ${transitioning ? "opacity-0" : "opacity-100"}`}>
              <Image
                src={images[selectedIndex]}
                alt={`Image ${selectedIndex}`}
                width={1200}
                height={1200}
                className="w-full lg:w-auto mx-auto border border-white/20 max-h-screen rounded-lg"
              />
            </div>

            {/* Left Button */}
            <button
              onClick={showPrevImage}
              className="absolute left-0 top-1/2 text-white text-3xl pl-4 pr-4 lg:pr-8 py-2 rounded-full transform -translate-y-1/2"
            >
              &#8249;
            </button>

            {/* Right Button */}
            <button
              onClick={showNextImage}
              className="absolute right-0 top-1/2 text-white text-3xl pr-4 pl-4 lg:pl-8 py-2 rounded-full transform -translate-y-1/2"
            >
              &#8250;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
