import { useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/service.css";

export default function Plates() {
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
                   Plates
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
                    <img src="/assets/plate.webp" alt="Inspection Process" className="plates-image" />
                </motion.div>

                {/* Right: Text */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-content">
                    <h2 className="section-title">Plates</h2>
                    <p className="section-text">
                    One may have heard of clients talking about stainless steel sheets and plates in the same vein which are commonly used interchangeably. We typically classify sheets as having a thickness of 6mm and below but exceptions are made also based on their surface finishes. Commonly No. 1 Surface finishes are referred to as plates due to their main usage as structural components. Both stainless steel sheets and plates have a wide variety of usage in the construction, chemical, oil & gas and many other sectors.</p>
                    <ul className="testing-list">
                        <h2 className="section-title">PLATE GRADES:</h2>
                        <li><strong>SS304/L </strong>: is the most popular grades of stainless steel are namely SS 304 and SS316. SS304 contains 18% Chromium and 8% Nickel and are commonly used worldwide.</li>
                        <li> <strong>SS316/L</strong>: on the other hand, contains 16% Chromium and 10% Nickel but there is an additional 2% Molybdenum. This addition allows SS316 materials to have increased corrosion resistance as compared to SS304 materials. SS316 materials are favored for use outdoors and nearer to marine and coastal settlements.</li>
                        <li><strong> SS31803/2205</strong>:  is also commonly known as duplex stainless steel. This grade is the most popular duplex product on the market which offers good resistance to uniform and localized corrosion and as well as stress corrosion cracking. </li>
                        <li><strong>SS32750 </strong>:is a super duplex product with higher corrosive resistance and mechanical strength when compared with SS31803/2205. The PREN of Super Duplex is between 40 to 45. Super duplex has seen increasing usage in the Asia pacific region for usages such as scrubbers.</li>
                        <li><strong>SS310S </strong>:is an austenitic heat- and creep-resisting stainless steel with excellent oxidation resistance in mildly cyclic conditions and is best employed in high temperatures up to 1050°C/1920°F.</li>
                        <li><strong>SS253MA</strong>: is an austenitic heat-resisting stainless steel with excellent oxidation and creep resistance in cyclic conditions and is best employed in high temperatures up to 1100°C/2012°F. This material grade is trademarked by Outokumpu, of which HH Stainless is a appointed distributor for in the South East Asia Region.</li>
                        <li><strong>SS904L</strong>: is an austenitic high alloy stainless steel with low carbon content but with copper being added to improve its resistance to strong reducing acids. It is also resistant to stress corrosion cracking and crevice corrosion.</li>
                        {/* <li><strong>Construction</strong>: Wafer Type, Semi-lug, Single & Double Flanged</li>
                        <li><strong>Materials & Grades</strong>: A105N, WCB, WCC, LF2, LCB, LCC, F316L, F304L, F321, CF8, CF8C, CF8NM, F5, F9, F11, F51, F53, 625/825 Alloys</li>
                        <li><strong>Specials</strong>: Metal Seated valves, Cryogenic Valves, Actuated Valves, Exotic Alloy Valves Coating : Polythene, Epoxy, Cement Lined</li>
                        <li><strong>Operation</strong>: Lever, Gear, Hydraulic, Electric Movement, Motor Operated</li> */}
                    </ul>
                </motion.div>
            </section>
        </div>
    );
}

