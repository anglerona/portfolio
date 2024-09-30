"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import Left from "@/assets/left.svg"; 
import Right from "@/assets/right.svg"; 
import X from "@/assets/x.svg";

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

  // Disable background scrolling when the modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      // Disable scrolling on body when modal is open
      document.body.style.overflow = "hidden";
    } else {
      // Restore scrolling when modal is closed
      document.body.style.overflow = "";
    }

    // Clean up when component is unmounted or modal is closed
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

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
      <div className="flex lg:grid lg:grid-cols-3 scrollbar-hide gap-4 items-center overflow-x-auto lg:overflow-visible flex-nowrap lg:flex-wrap">
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer flex-shrink-0 lg:w-full sm:w-[60%] md:w-[40%] py-2"
            onClick={() => openImage(index)}
          >
            <Image
              src={image}
              alt={`Image ${index}`}
              width={1200}
              height={1200}
              className="w-full h-full rounded-lg border border-white/20 object-cover"
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
            className="absolute top-4 right-4 text-white opacity-70 hover:opacity-100 duration-200 text-3xl font-bold p-2 rounded-full z-50"
            onClick={closeImage}
            aria-label="Close Carousel"
          >
            <X className="h-4 w-4 md:h-5 md:w-5 fill-current" />
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
          </div>

          {/* Left Button Fixed Outside Image */}
          <button
            onClick={showPrevImage}
            className="fixed left-3 md:left-8 top-1/2 duration-200 opacity-70 hover:opacity-100 text-3xl md:p-4 rounded-full transform -translate-y-1/2 z-50"
          >
            <Left className="h-3 w-3 md:h-5 md:w-5 fill-current" />
          </button>

          {/* Right Button Fixed Outside Image */}
          <button
            onClick={showNextImage}
            className="fixed right-3 md:right-8 top-1/2 duration-200 opacity-70 hover:opacity-100 text-3xl md:p-4  rounded-full transform -translate-y-1/2 z-50"
          >
            <Right className="h-3 w-3 md:h-5 md:w-5 fill-current" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
