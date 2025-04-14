import { useState, useEffect } from "react";

interface ImageCarouselAutomaticProps {
  images: string[];
}

/**
 * A component that renders an automatic image carousel.
 * It displays a list of images and automatically transitions
 * between them every 7 seconds.
 *
 * @param {Object} props - The component props.
 * @param {string[]} props.images - An array of image URLs to be displayed in the carousel.
 * @returns {JSX.Element} A styled container with a list of images that transitions automatically.
 */
function ImageCarouselAutomatic({ images }: ImageCarouselAutomaticProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the slide every 7 seconds
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);
    return () => clearInterval(autoSlide);
  }, [images.length]);

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden max-h-96 shadow-lg">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full h-96 flex-shrink-0 object-contain object-center"
          />
        ))}
      </div>
    </div>
  );
}

export default ImageCarouselAutomatic;
