import { useState } from "react";
import { LeftBtn } from "./icons/LeftBtn";
import { RightBtn } from "./icons/RightBtn";

const images = [
  "https://i1.sndcdn.com/artworks-Yiyr5xGCtveVtAwm-9FdyMQ-t1080x1080.jpg",
  "https://i1.sndcdn.com/avatars-P6rpwYMVW4gZxgGi-papHcQ-t1080x1080.jpg",
  "https://uploads.dailydot.com/2024/10/hampter.png?q=65&auto=format&w=1600&ar=2:1&fit=crop",
];

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

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
            className="w-full h-96 flex-shrink-0 object-fit object-center"
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2"
      >
        <img
          src={LeftBtn}
          alt="read more"
          className="h-10 m-2 hover:bg-white rounded-full transition-colors duration-300"
        />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 "
      >
        <img
          src={RightBtn}
          alt="read more"
          className="h-10 m-2 hover:bg-white rounded-full transition-colors duration-300"
        />
      </button>
    </div>
  );
}

export default ImageCarousel;