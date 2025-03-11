import { useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/service.css";

export default function Pipes() {
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
                    Pipes 
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
                    <img src="/assets/pipe.avif" alt="Inspection Process" className="inspection-image" />
                </motion.div>

                {/* Right: Text */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-content">
                    <h2 className="section-title">Pipes</h2>
                    <p className="section-text">
                    If you’re looking for high-quality pipes for your construction, plumbing, or industrial needs, then you need a reliable pipes supplier. With so many pipes suppliers in the market, it can be challenging to find the right one. That’s why it’s essential to do your research and choose a reputable supplier that can provide you with the best quality pipes at competitive prices.</p>
                    <ul className="testing-list">
                        <li>Range : 1/2″ to 96″</li>
                        <li> Execution: Seamless & Welded Pipes, ERW, HFW, SAW, DSAW, LSAW</li>
                        <li> Standards: API, ASTM/ASME, BS/ISO</li>
                        <li>Materials: Carbon Steel, Alloys, Stainless Steel, Duplex, Inconel, Titanium, Monel, Hastalloy</li>
                        <li>Grade : APISLB, A106 Gr B, APISL Gr X42, X52, X60, X65, X70, A333 Gr 6, A333 Gr 3,

                            A671 C65, A335 P5, P9, P11, P22, P91, A312, Gr 316/316L, 304/304L, 321/321H, 347/347H, A790 UNS S31803, $32750 / S32760, 6Moly, 310, 317L, 319TI, 904L, Alloy 400, 625, 825, 70600, 70620</li>
                        <li>Specials: Finned Tubes, Head Exchangers, Tubes & Duplex Tubing Coating: Polythene, Epoxy, Galvanized, 3LPE Cement Lining Galvanized (ASTM153, ASTM123) Electro galvanizing</li>


                    </ul>
                </motion.div>
            </section>
        </div>
    );
}
