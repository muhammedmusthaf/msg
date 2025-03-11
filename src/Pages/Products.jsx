import React from "react";
import "../styles/products.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import{Pagination} from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";


const images = [
  "/assets/11.webp", "/assets/12.webp", "/assets/13.webp", "/assets/14.webp", "/assets/15.webp", "/assets/16.webp", "/assets/17.webp", "/assets/18.webp", "/assets/19.webp", "/assets/20.webp", 
  "/assets/21.webp", "/assets/22.webp", "/assets/23.webp", "/assets/24.webp", "/assets/25.webp"
];

const Products = () => {
  return (
    <div className="gallery-container">
      {/* Gallery Header */}
      <div className="gallery-header">
        {/* <div className="overlay"></div> */}
        <h1>Our Gallery</h1>
      </div>

      {/* Products Section */}
      <div className="products-section">
        <h2>PRODUCTS</h2>
      </div>

      {/* Image Slider (Manual Sliding) */}
      <div className="gallery-slider">
      
        <Swiper
          modules={[Navigation,Pagination]}
          slidesPerView={1}  // Default to 1 for better mobile experience
           navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          speed={500} // Faster transition for smoother experience
          breakpoints={{
            1024: { slidesPerView: 3 },  // Large screens: 3 images
            768: { slidesPerView: 2 },   // Medium screens: 2 images
            480: { slidesPerView: 1 },   // Small screens: 1 image
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="gallery-item">
                <img src={src} alt={`Gallery item ${index + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Products;
