import { useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/service.css";

export default function Pipefitting() {
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
                    Pipes Fittings
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
                    <img src="/assets/fit.jpg" alt="Inspection Process" className="inspection-image" />
                </motion.div>

                {/* Right: Text */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-content">
                    <h2 className="section-title">Pipes Fittings</h2>
                    <p className="section-text">
                        MSG provides a comprehensive range of  pipe fittings in Dubai that can cater to the needs of almost any industry. From Oil & Gas, Petrochemical, Onshore, Offshore, Power Generation, General Industries, and Shipbuilding, MSG offers a complete package of pipe fitting solutions to meet the unique requirements of each sector. With their extensive experience in the piping industry, they are committed to providing reliable quality products and services at competitive prices.</p>
                    <ul className="testing-list">
                        <li>Range: 1/2″ to 96″ Standard & Special Wall Thickness</li>
                        <li> Type: Elbow, Tee, Reducer, Cap & Forged fittings</li>
                        <li> Ends: Buttweld, Socketweld, Plainends, Threaded</li>
                        <li>Standard : ANSI/ASME, MSS SP/ISO.</li>
                        <li>Materials: Carbon Steel, Alloys, Stainless Steel, Duplex, Super Duplex, Titanium, Monel, Hastalloy</li>
                        <li>Grade: WPB, WPL6, A105, LF2

                            WPHY 42/52/60/65/70

                            WP304/304L, 316/316L

                            UNS S31803, S32205, 32750, S32760, Alloy 625/825, WP11, WP22, WP91, 321/321H, 347/347H</li>
                        <li>Special : Barred & Barrel Flow Tees, Large Radius Bends, Sweep Bends, Stub Ends, Laterals.</li>

                    </ul>
                </motion.div>
            </section>
        </div>
    );
}

