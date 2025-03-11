import { useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/service.css";

export default function Valves() {
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
                   API 6A & API 6D VALVES
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
                    <img src="/assets/valves.jpg" alt="Inspection Process" className="valves-image" />
                </motion.div>

                {/* Right: Text */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-content">
                    <h2 className="section-title">Valves</h2>
                    <p className="section-text">
                    If you’re in the oil and gas industry, you’re likely familiar with API 6A & API 6D valves. These valves are used in a variety of applications, from drilling and production to refining and transportation. When it comes to finding a reliable supplier of API 6A & API 6D valves, there are several things you should consider.

First and foremost, you’ll want to look for a supplier that has a proven track record of quality and reliability. This means finding a supplier that uses high-quality materials and manufacturing processes to produce their valves. You’ll also want to make sure that the supplier has a rigorous quality control process in place to ensure that every valve they produce meets API 6A & API 6D standards.</p>
                    <ul className="testing-list">
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
                    </ul>
                </motion.div>
            </section>
        </div>
    );
}


