import React, { useState } from "react";


const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "https://cdn.wallpapersafari.com/81/92/qs7Pof.jpg",
    "https://i.pinimg.com/originals/c4/26/82/c4268244c25de664fae2b19d5ad1611b.jpg",
    "http://www.joshbenson.com/wp-content/uploads/2013/11/change-wallpapers-for-free-720x340.jpg",
    "http://3.bp.blogspot.com/-ii8tdNN7H8Y/U_KCsF3fCbI/AAAAAAAACrA/1YD7XHC7hiI/s1600/free-download1.jpg",
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-img">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-img-item ${
              index === currentSlide ? "active" : ""
            }`}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="btn-right" onClick={nextSlide}>
        <img src="right.svg" width="22px" alt="Next" />
      </div>
      <div className="btn-left" onClick={prevSlide}>
        <img src="left.svg" width="22px" alt="Previous" />
      </div>
    </div>
  );
};

export default Carousel;
