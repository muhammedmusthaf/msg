import { useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/service.css";

export default function Inspection() {
  useEffect(() => {
    document.title = "Inspection - MSG Oilfield";
  }, []);

  return (
    <div className="inspection-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="overlay"></div>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="hero-title">
          Inspection
        </motion.h1>
      </section>

      {/* Content Section */}
      <section className="content-section">
        {/* Left: Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="image-container">
          <img src="/assets/inspec.jpg" alt="Inspection Process" className="inspection-image" />
        </motion.div>

        {/* Right: Text */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-content">
          <h2 className="section-title">Comprehensive Inspection Solutions</h2>
          <p className="section-text">
          With our vast experience, we are well aware of the  inspection requirements of our Clientele. We can arrange for Third party inspections on customer requests. Depending on our customers requirements we can outsource all kinds of relevant inspection.</p>
        </motion.div>
      </section>
    </div>
  );
}

