import React, { useState, useEffect } from "react";
import "../styles/HomePage.css";
import { useNavigate } from "react-router-dom";

import Header from "./header.jsx";
import SocialMedia from "./SocialMedia.jsx";
import Bloger from "./Bloger.jsx";

const images = [
  "/assets/1.PNG",
  "/assets/2.webp",
  "/assets/3.webp",
  "/assets/4.webp",
  "/assets/5.webp",
  "/assets/6.webp",
  "/assets/7.webp",
];

const products = [
  {
    image: "/assets/1.webp",
    title: "FLANGES",
    description: "We can supply a wide range of Flanges in all grades.",
    bgColor: "#FFEB3B",
  },
  {
    image: "/assets/2.webp",
    title: "PIPES",
    description: "We can supply a wide range of seamless and welded pipes in all grades.",
    bgColor: "#FFFFFF",
  },
  {
    image: "/assets/3.webp",
    title: "FITTINGS",
    description: "We provide a complete package of pipe fittings to almost every industry.",
    bgColor: "#FFEB3B",
  },
  {
    image: "/assets/13_20240520_170725_0012.webp",
    title: "FASTENERS & GASKET",
    description: "We serve a wide range of customer base with various kinds of Fastener & Gasket.",
    bgColor: "#FFEB3B",
  },
  {
    image: "/assets/6.png",
    title: "VALVES",
    description: "We serve a wide range of customer base with various kinds of valves.",
    bgColor: "#FFEB3B",
  },
  {
    image: "/assets/7-2.webp",
    title: "SPECIAL PRODUCTS",
    description: "We provide a wide range of special products to almost every industry.",
    bgColor: "#FFEB3B",
  },
 
 
];

const HomePage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Header />
      {/* Banner Section */}
      <div className="homepage-banner"></div>

      {/* Content Section */}
      <div className="homepage-container">
        <div className="homepage-text-content">
          <h1>Top Supplier of Quality Piping Products</h1>
          <div className="homepage-dots-underline">
            <div className="homepage-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="homepage-underline"></div>
          </div>
          <p>
            Material Solutions Grid Oilfield Equipment Trading LLC is a top supplier of quality oilfield flanges, pipes, valves, fittings, fasteners, and gaskets. Known for our dedication to quality and dependability, we provide a wide variety of products to meet the strict requirements of modern oil and gas industrial needs.
          </p>
          <p>
            Our products meet strict industry regulations, guaranteeing long-lasting quality and top performance in the field, helping clients improve productivity and uphold safety in challenging settings.
          </p>
          <p>
            MSG Oilfield Equipment Trading LLC not only offers high-quality equipment but also provides expert advice and full support services. Our team works closely with clients to understand their individual requirements and provide customized solutions.
          </p>
        </div>

        {/* Image Slider Section */}
        <div className="homepage-image-content">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Piping Product ${index + 1}`}
              className={`homepage-slider-image ${index === currentImage ? "homepage-active" : ""}`}
            />
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className="homepage-products-section">
        <h2 className="homepage-products-title">Our Products</h2>
        <p className="homepage-products-subtitle">Following are some of our Main Products</p>

        <div className="homepage-products-grid">
          {products.map((product, index) => (
            <div key={index} className="homepage-product-card-container">
              <div
                className={`homepage-product-card ${product.bgColor === "#FFEB3B" ? "homepage-yellow-bg" : ""}`}
              >
                <div className="homepage-product-image-container">
                  <img src={product.image} alt={product.title} className="homepage-product-image" />
                </div>
                <div className="homepage-product-card-content">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="homepage-button-container">
          <button className="homepage-cta-button" onClick={()=> navigate("/product")}>GO TO OUR PRODUCTS</button>
        </div>
      </div>
     <SocialMedia/>
     <Bloger/>
    </div>
  );
};

export default HomePage;
