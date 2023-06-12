import React, { useState } from "react";
import "./Slider.css";

const Slider = () => {
  const sliderImages = [
    "pic1.jpg",
    "pic4.jpg",
    "pic5.jpg",
    "pic6.jpg",
    "pic7.jpg",
    "pic8.jpg",
    "pic9.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentImageIndex + 1) % sliderImages.length;
    console.log("left");
    setCurrentImageIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex =
      (currentImageIndex - 1 + sliderImages.length) % sliderImages.length;
    console.log("right");
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="slider-container">
      <button className="slider-btn prev" onClick={prevSlide}>
        &#10094;
      </button>
      <img
        src={
          process.env.PUBLIC_URL + "/images/" + sliderImages[currentImageIndex]
        }
        alt="Slider"
        className="slider-image"
      />
      <button className="slider-btn next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
