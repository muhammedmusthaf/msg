import { useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/service.css";

export default function Strainers() {
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
                   Strainers
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
                    <img src="/assets/strainer.jpg" alt="Inspection Process" className="inspection-image" />
                </motion.div>

                {/* Right: Text */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-content">
                    <h2 className="section-title">Strainers</h2>
                    <p className="section-text">
                    MSG provides a complete package of pipe fitting, to almost every industry ranging from Oil & Gas, Petrochemical, Onshore as well as Offshore, Power Generation, General Industries, and Shipbuilding. We take utmost care of every incoming as well as outgoing product with our stringent quality checks. If needed, we always do additional testing to assure ourselves as well as our Client, that every product conforms to the given Standards.</p>
                    {/* <ul className="testing-list">
                        <li><strong>Range</strong>: 1/2″ to 48″ — #150 Ibs thru #2500 Ibs Flanged, Threaded, Socketweld & Buttweld Connections</li>
                        <li> <strong>Ball</strong>: Floating & Trunnion Execution, Split Body, Top Entry, Side Entry, Fully Welded</li>
                        <li><strong> Standards</strong>: BS5352, BS1414, BS1873, BS1868, API 6D,API 602/600 and equivalent ISO standards</li>
                        <li><strong>Standard</strong>: BS5351, API 6D and API 6A Gate, Globe, Check : Forged & Castings</li>
                        <li><strong>Butterfly</strong>: Regular & Offset design. Castiron & Caststeel Execution</li>
                        <li><strong>Standards</strong>: BS5155, API609</li>
                        <li><strong>Construction</strong>: Wafer Type, Semi-lug, Single & Double Flanged</li>
                        <li><strong>Materials & Grades</strong>: A105N, WCB, WCC, LF2, LCB, LCC, F316L, F304L, F321, CF8, CF8C, CF8NM, F5, F9, F11, F51, F53, 625/825 Alloys</li>
                        <li><strong>Specials</strong>: Metal Seated valves, Cryogenic Valves, Actuated Valves, Exotic Alloy Valves Coating : Polythene, Epoxy, Cement Lined</li>
                        <li><strong>Operation</strong>: Lever, Gear, Hydraulic, Electric Movement, Motor Operated</li>
                    </ul> */}
                </motion.div>
            </section>
        </div>
    );
}

