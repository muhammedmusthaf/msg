import React, { useEffect, useState } from 'react';
import '../styles/Certification.css';

const Certification = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/assets/AdobeStock_96205929-2-scaled.jpeg',
    '/assets/AdobeStock_196976486-2-scaled.jpeg',
    '/assets/AdobeStock_224068688-2-scaled.jpeg',
    '/assets/AdobeStock_232654911-2-scaled.jpeg',
    '/assets/AdobeStock_279914997-2-scaled.jpeg',
    '/assets/AdobeStock_298681853-2-scaled.jpeg',
    '/assets/aerial-view-oil-terminal-industrial-facility-stora-2023-01-24-13-09-28-utc.jpg',
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <div className="certification-app-container">
      <div className="certification-card">
        <div className="certification-background-image">
          <img src="/assets/faqbac.webp" alt="Background" className="certification-background-img" />
        </div>
        <div className="certification-image-container">
          <img src="/assets/ISO-9001-2015-MSG-New_page-0001.jpg" alt="Certificate" className="certification-image" />
        </div>
      </div>
   
      <div className="certification-quote-container">
        <p>
          Our certification is a reflection of our dedication to excellence and
          our ongoing efforts to provide you with the best-in-class solutions.
          When you partner with us, you can trust that you are working with a
          reputable and certified company, dedicated to delivering the highest
          standards of quality and safety.
        </p>
        {/* <div className="certification-quote-icon">❝</div> */}
      </div>
      

      <div className="certification-content-section"><p>
          MSG Oilfield Equipment Trading LLC is proud to be a registered and certified
          entity in the field of oil and gas equipment. Our certification is a testament
          to our commitment to quality, safety, and compliance with industry
          standards. We have undergone rigorous assessments and audits to ensure
          that our products and services meet or exceed the expectations and
          regulations of the oilfield industry.<br></br>
          <br></br>
          MSG Oilfield Equipment Trading LLC is committed to upholding the highest standards of quality assurance and industry compliance. Our certification of registration serves as a testament to our unwavering dedication to providing products and services that consistently meet or exceed industry regulations and expectations. This certification is a mark of our relentless pursuit of excellence, ensuring that your projects are supported by a trusted partner who prioritizes quality, safety, and compliance in every facet of our operations.
        </p>
        
        <div className="certification-social-media">
          <h3>Social Media :</h3>
          <a href="https://www.facebook.com/MSG-Oilfield-Equipment-Trading-LLC-101501272331381" target="_blank" rel="noopener noreferrer">
            <img src="/assets/facebook.png" alt="Facebook" className="certification-social-icon" width="50" height="50" />
          </a>
          <a href="https://twitter.com/MSGOilfield" target="_blank" rel="noopener noreferrer">
            <img src="/assets/twitter.png" alt="Twitter" className="certification-social-icon" width="50" height="50" />
          </a>
          <a href="https://www.youtube.com/channel/UCeJd5VzFwZwCm6Zr6zV9lCQ" target="_blank" rel="noopener noreferrer">
            <img src="/assets/youtube.jpg" alt="YouTube" className="certification-social-icon" width="50" height="50" />
          </a>
        </div>
       
   

      <div className="certification-slideshow-container">
        {slides.map((slide, index) => (
          <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
            <img src={slide} alt={`Slide ${index + 1}`} className="slide-image" />
          </div>
        ))}
        
      </div>
    </div>
    </div>
  );
};

export default Certification;

