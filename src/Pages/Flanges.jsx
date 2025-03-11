import { useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/service.css";

export default function Flanges() {
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
                    Flanges
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
                    <img src="/assets/flange.png" alt="Inspection Process" className="inspection-image" />
                </motion.div>

                {/* Right: Text */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-content">
                    <h2 className="section-title">Flanges</h2>
                    <p className="section-text">
                    We at MSG, supply flanges as per the needs of our Client. We also have the provision of keeping flanges that are ‘semi-finished’ in order to allow special facing, end preparation or drilling to meet Clients immediate requirements.</p>
                    <ul className="testing-list">
                        <li>Range: 1/2″ to 96″ 150# to 2500#, 3000psi to 10,000 psi. As per standard Wide Range of thickness & Spec.</li>
                        <li> Type: Weldneck, Socketweld, Blind, Threaded, Slipon.</li>
                        {/* <li> Ends: Buttweld, Socketweld, Plainends, Threaded</li> */}
                        <li>Standards: API, ASTM/ASME, ISO.</li>
                        <li>Materials : Carbon Steel, Alloys, Stainless Steel, Duplex, Super Duplex, Inconel, Titanium, Monel, Hastalloy Grade: A105, A350 LE2, LF3, LF6,A182 F316, 304/304L,

F316/316L, F11, F12, F22, F51, F53, F55, High Yield F42 to F70, Inconel 625/825.</li>
                        <li>Grade: WPB, WPL6, A105, LF2

                            WPHY 42/52/60/65/70

                            WP304/304L, 316/316L

                            UNS S31803, S32205, 32750, S32760, Alloy 625/825, WP11, WP22, WP91, 321/321H, 347/347H</li>
                        <li>Special: Spectacle Blinds, Drp kings, Long Weldnecks, Nozzles, Insurauon Fanges, An Swivel Flange, Orifice Flange, Nippoflanges.</li>

                    </ul>
                </motion.div>
            </section>
        </div>
    );
}

