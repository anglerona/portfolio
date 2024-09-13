"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

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
      }, 300); // Adjust timing as needed
    }
  };

  const showNextImage = () => {
    if (selectedIndex !== null && !transitioning) {
      setTransitioning(true);
      setTimeout(() => {
        const nextIndex = selectedIndex === images.length - 1 ? 0 : selectedIndex + 1;
        setSelectedIndex(nextIndex);
        setTransitioning(false);
      }, 300); // Adjust timing as needed
    }
  };

  // Close modal if clicking outside the image or buttons
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (carouselRef.current && !carouselRef.current.contains(e.target as Node)) {
      closeImage();
    }
  };

  return (
    <div>
      {/* Responsive Horizontal Scroll on Mobile, Grid on Larger Screens */}
      <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-x-auto md:overflow-visible flex-nowrap md:flex-wrap">
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
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal Carousel */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={handleOverlayClick}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden"
            ref={carouselRef}
          >
            <button
              className="absolute top-0 right-0 text-white text-3xl font-bold p-4"
              onClick={closeImage}
            >
              &times;
            </button>

            {/* Image with smooth transition */}
            <div className={`transition-opacity duration-500 ${transitioning ? "opacity-0" : "opacity-100"}`}>
              <Image
                src={images[selectedIndex]}
                alt={`Image ${selectedIndex}`}
                width={1200}
                height={1200}
                className="w-auto mx-auto h-full rounded-lg"
              />
            </div>

            {/* Left Button */}
            <button
              onClick={showPrevImage}
              className="absolute left-0 top-1/2 text-white text-3xl px-4 py-2 rounded-full transform -translate-y-1/2"
            >
              &#8249;
            </button>

            {/* Right Button */}
            <button
              onClick={showNextImage}
              className="absolute right-0 top-1/2 text-white text-3xl px-4 py-2 rounded-full transform -translate-y-1/2"
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
