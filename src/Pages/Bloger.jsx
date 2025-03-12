import React, { useState } from "react";
import "../styles/Bloger.css";

const brands = [
  { id: 1, name: "Benkan", logo: "/assets/dis1.jpg" },
  { id: 2, name: "Yuanda Valve", logo: "/assets/dis2.gif" },
  { id: 3, name: "Maass Global", logo: "/assets/dis3.png" },
  { id: 4, name: "Another Brand", logo: "/assets/dis4.webp" },
];

const Bloger = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleBrands = 3; // Show only 3 brands at a time

  // Ensure smooth looping when clicking 3rd and 4th dot
  const handleDotClick = (index) => {
    if (index >= brands.length - (visibleBrands - 1)) {
      setCurrentIndex(index % brands.length); // Loop to the first logos
    } else {
      setCurrentIndex(index);
    }
  };

  return (
    <div className="brand-slider">
      <h1>Discover Our Brand</h1>
      <h2>Brands We Stock</h2>

      {/* Logos Slider */}
      <div className="slider-container">
        <div
          className="brands-wrapper"
          style={{ transform: `translateX(-${currentIndex * 220}px)` }}
        >
          {/* Clone the first two logos at the end for seamless looping */}
          {brands.concat(brands.slice(0, 4)).map((brand, idx) => (
            <div key={idx} className="brand-logo">
              <img src={brand.logo} alt={brand.name} className="brand-image" />
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="dots">
        {brands.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`dot ${currentIndex === index ? "active-dot" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Bloger;
