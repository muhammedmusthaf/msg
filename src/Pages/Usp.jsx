import React, { useRef, useState, useEffect } from "react";
import "../styles/Usp.css";

const cardData = [
  { image: "/assets/knowledge.png", title: "KNOWLEDGE", description: "Acquiring and applying the knowledge for better product procurement and service is our aim." },
  { image: "/assets/skill.png", title: "SKILL", description: "Our team holds the key skills to deliver the right solution and service for customers." },
  { image: "/assets/excellence.png", title: "EXCELLENCE", description: "Excellence in creating ‘success’ for our clients by supplying the right material in right time." },
  { image: "/assets/solution.png", title: "SOLUTION", description: "Solving problems of our customers by offering different ways through our product and service." },
  { image: "/assets/quality.png", title: "QUALITY", description: "Supreme quality of product and quality of manpower always define MSG’s core values." },
  { image: "/assets/service.png", title: "SERVICE", description: "We go miles to serve our customers thus fulfilling their requirements within given time-frame." }
];

const Usp = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const cardWidth = scrollRef.current.children[0]?.offsetWidth || 0;
        const index = Math.round(scrollRef.current.scrollLeft / cardWidth);
        setActiveIndex(index);
      }
    };

    const scrollBox = scrollRef.current;
    scrollBox?.addEventListener("scroll", handleScroll);
    return () => scrollBox?.removeEventListener("scroll", handleScroll);
  }, []);

  const goToCard = (index) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0]?.offsetWidth || 0;
      scrollRef.current.scrollTo({ left: index * cardWidth, behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  return (
    <div className="usp-container">
      <h2 className="usp-heading">OUR SERVICES</h2>
      <div className="usp-wrapper">
        
        <div className="usp-scroll-box" ref={scrollRef}>
          {cardData.map((card, i) => (
            <div key={i} className={`usp-card card-${i + 1}`}>
              <img src={card.image} alt={card.title} className="usp-card-image" />
              <h3 className="usp-card-title">{card.title}</h3>
              <p className="usp-card-description">{card.description}</p>
            </div>
          ))}
        </div>
        
      </div>
      <div className="usp-dots">
        {cardData.map((_, i) => (
          <span
            key={i}
            className={`usp-dot ${i === activeIndex ? "active" : ""}`}
            onClick={() => goToCard(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Usp;
