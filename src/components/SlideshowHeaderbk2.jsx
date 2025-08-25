import React, { useState, useEffect, useCallback } from "react";

const SlideshowHeader = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true); // Controls auto-sliding
  const images = [
    "/img/intro-bg-4.jpg",
    "/img/intro-bg-2.jpg",
    "/img/intro-bg-3.jpg",
    "/img/intro-bg-5.jpg",
    "/img/intro-bg-6.jpg",
  ];

  // Function to go to the next slide
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  });

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  // Function to stop auto-sliding when a user interacts with the buttons
  const handleManualSlideChange = (direction) => {
    setAutoSlide(false);
    direction === "next" ? nextSlide() : prevSlide();
  };

  // Auto-slide functionality (runs every 5 seconds)
  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(nextSlide, 5000); // 5000ms = 5 seconds
      return () => clearInterval(interval); // Cleanup on component unmount
    }
  }, [autoSlide, nextSlide]);

  return (
    <div className="slideshow-header">
      <div className="carousel-img">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-img-item ${index === currentSlide ? "active" : ""}`}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      
      {/* Manual Navigation Buttons */}
      <div className="btn-right" onClick={() => handleManualSlideChange("next")}>
        <img src="/img/right.svg" width="22px" alt="Next" />
      </div>
      <div className="btn-left" onClick={() => handleManualSlideChange("prev")}>
        <img src="/img/left.svg" width="22px" alt="Previous" />
      </div>

      <style jsx>{`

        .slideshow-header {
          position: relative;
          width: 100%;
          max-width: 100%;
          margin: auto;
          overflow: hidden;          
        }

        .carousel-img {
          display: flex;
          transition: transform 0.5s ease-in-out;
        }

        .carousel-img-item {
          min-width: 100%;
          display: none;
        }

        .carousel-img-item.active {
          display: block;
        }

        .carousel-img-item img {
          width: 100%;
          height: auto;
        }

        .btn-right,
        .btn-left {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.5);
          border-radius: 50%;
          padding: 10px;
          cursor: pointer;
          z-index: 2;
          
        }

        .btn-right {
          right: 10px;
            background: #0c1329;
        }

        .btn-left {
          left: 10px;
        }

        .btn-right:hover,
        .btn-left:hover {
          background-color: rgba(0, 0, 0, 0.8);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .slideshow-header {
            max-width: 100%;
          }
          .btn-right, .btn-left {
            padding: 8px;
            width: 30px;
            height: 30px;
          }
        }
      `}</style>
    </div>
  );
};

export default SlideshowHeader;
