import React, { useState, useEffect } from 'react';

const SlideshowHeader = () => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const imagePaths = [
      `${process.env.PUBLIC_URL}/img/intro-bg-4.jpg`,
      `${process.env.PUBLIC_URL}/img/intro-bg-3.jpg`,
      `${process.env.PUBLIC_URL}/img/intro-bg-2.jpg`,
      `${process.env.PUBLIC_URL}/img/intro-bg-5.jpg`,
      `${process.env.PUBLIC_URL}/img/intro-bg-6.jpg`,
    ];
    setImages(imagePaths);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  const showSlide = (index) => setCurrentSlide(index);
  const prevSlide = () => setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  const nextSlide = () => setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          className={`slides ${index === currentSlide ? 'active fade' : ''}`}
          alt={`Slide ${index + 1}`}
          width="913"
          height="638"
        />
      ))}

      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>

      <div className="navigation">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => showSlide(index)}
          ></span>
        ))}
      </div>

      <style jsx>{`

        .slideshow-container {
          position: relative;
          max-width: 100%;
          margin: auto;
          overflow: hidden;
        }

        .slides {
          width: 100%;
          height: auto;
          max-height: 75vh;
          object-fit: cover;
          display: none;
        }
        
        .active {
          display: block;
        }

        .fade {
          animation: fadeEffect 1s;
        }

        @keyframes fadeEffect {
          from { opacity: 0.4; }
          to { opacity: 1; }
        }

        .prev, .next {
          cursor: pointer;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          padding: 12px;
          font-size: 20px;
          border-radius: 50%;
        }

        .prev { left: 10px; }
        .next { right: 10px; }

        .prev:hover, .next:hover {
          background-color: rgba(0, 0, 0, 0.8);
        }

        .navigation {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
        }

        .dot {
          height: 12px;
          width: 12px;
          background-color: #bbb;
          border-radius: 50%;
          cursor: pointer;
        }

        .dot.active {
          background-color: #717171;
        }

        @media (max-width: 1024px) {
          .slides {
            max-height: 60vh;
          }
        }

        @media (max-width: 768px) {
          .slides {
            max-height: 50vh;
          }

          .prev, .next {
            padding: 10px;
            font-size: 18px;
          }
        }

        @media (max-width: 480px) {
          .slides {
            max-height: 40vh;
          }

          .prev, .next {
            padding: 8px;
            font-size: 16px;
          }

          .dot {
            height: 10px;
            width: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default SlideshowHeader;
