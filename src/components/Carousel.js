import React, { useState, useEffect } from "react";

const images = [
  "https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-7.webp",
  "https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-6.webp",
  "https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-9.webp",
  "https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-10.webp"
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3); // Desktop - Show 3 images
      } else {
        setSlidesToShow(1); // Mobile - Show 1 image
      }
    };

    updateSlidesToShow(); // Run once on mount
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-3xl overflow-hidden mx-auto">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full lg:w-1/3 flex-shrink-0 px-2"
          >
            <img
              src={image}
              alt="Carousel Slide"
              className="w-full h-[300px] object-cover rounded-2xl shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
