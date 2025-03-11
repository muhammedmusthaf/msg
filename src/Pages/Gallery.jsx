import React from "react";
import "../styles/products.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import{Pagination} from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";


const images = [
  "/assets/90.webp", "/assets/91.webp", "/assets/92.webp", "/assets/93.webp", "/assets/94.webp", "/assets/95.webp", "/assets/96.webp"
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      {/* Gallery Header */}
      <div className="gallery-header">
        {/* <div className="overlay"></div> */}
        <h1>Our Gallery</h1>
      </div>

      {/* Products Section */}
      <div className="products-section">
        <h2>Testing & Inspection </h2>
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

export default Gallery;
