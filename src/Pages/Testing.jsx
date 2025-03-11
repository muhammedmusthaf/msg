import { useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/service.css";

export default function Testing() {
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
                    Testing
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
                    <img src="/assets/testing.png" alt="Inspection Process" className="inspection-image" />
                </motion.div>

                {/* Right: Text */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-content">
                    <h2 className="section-title">Testing</h2>
                    <p className="section-text">
                        With our vast experience, we are well aware of the testing requirements of our Clientele. We can arrange for Third party testing on customer requests. Depending on our customers requirements we can outsource all kinds of relevant testing such as : requests. Depending on our customers requirements we can outsource all kinds of relevant inspection.</p>
                    <ul className="testing-list">
                        <li>SSCC (Sulphide Stress Corrosion Cracking)</li>
                          <li>  HIC (Hydrogen Induced Cracking)</li>
                           <li> Various Mechanical (Bend Test, Ultimate Tenstile Test etc. )</li>
                            <li>Chemical Analysis, Impact Test, Grain size.</li>
                            <li>Various NDE (Non-destructive examinations)</li>
                            <li> UT(Ultrasonic Testing Examination)</li>
                            <li>Radiography, LPE (LiquidPenetrant Examination)</li>
                            <li>MPE (Magnetic ParticleExamination)</li>
                            <li>PMI (Positive Material Identification) </li>
                    </ul>
                </motion.div>
            </section>
        </div>
    );
}