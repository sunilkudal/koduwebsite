import React, { useState, useEffect } from "react";

const images = [
  "https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-7.webp",
  "https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-6.webp",
  "https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-9.webp",
  "https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-10.webp"
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-3xl overflow-hidden">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
        {images.concat(images).map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Carousel Slide"
            className="w-1/3 h-[300px] object-cover rounded-2xl"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
