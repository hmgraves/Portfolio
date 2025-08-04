import React, { useState } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ images }) => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="carousel">
      <div className="carousel-image-container">
        <img src={images[index]} alt={`Slide ${index}`} className="carousel-image" />
        <button className="carousel-arrow left" onClick={prev}>
          ‹
        </button>
        <button className="carousel-arrow right" onClick={next}>
          ›
        </button>
      </div>
      <div className="carousel-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
