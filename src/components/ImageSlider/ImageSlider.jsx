import React, { useState } from "react";
import "./ImageSlider.css";

const ImageSlider = ({ images }) => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  if (!images || images.length === 0) return null;

  return (
    <div className="carousel" aria-label="Screenshot carousel">
      <div className="carousel-image-container">
        <img
          src={images[index]}
          alt={`Screenshot ${index + 1} of ${images.length}`}
          className="carousel-image"
        />
        <button
          className="carousel-arrow left"
          onClick={prev}
          aria-label="Previous screenshot"
          type="button"
        >
          ‹
        </button>
        <button
          className="carousel-arrow right"
          onClick={next}
          aria-label="Next screenshot"
          type="button"
        >
          ›
        </button>
      </div>
      <div className="carousel-dots" aria-hidden="true">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
