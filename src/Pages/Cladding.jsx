import { useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/service.css";

export default function Cladding() {
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
                    Cladding
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
                    <img src="/assets/cladding.jpg" alt="Inspection Process" className="inspection-image" />
                </motion.div>

                {/* Right: Text */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-content">
                    <h2 className="section-title">Cladding</h2>
                    <p className="section-text">
                        In highly corrosive environment or for transporting highly corrosive liquid, it is generally preferred to use Corrosion Resistant Alloy (CRA). However, the cost of CRA Pipes is extremely prohibitive, which leads cost overrun of the project. In order to overcome, this high economic cost, Cladding is the process by which cost can be reduced drastically.</p>
                    <h2 className="section-title">What is Cladding</h2>
                    <p className="section-text">Cladding is the process by which layer of Corrosion Resistant Alloy (CRA) is bonded internally on to the normal Carbon Steel (CS) Pipe by various processes. There by providing corrosion resistant properties of CRA and Mechanical Properties of Carbon Steel Pipes. Hence, overall cost is brought down drastically. Efficacy of the Cladded Pipes is same as CRA Pipes. Apart from Pipes, Cladding Process can be carried out on Fittings, as well as on Valves too. Cladding process can be carried out externally as well as internally, depending upon requirement.MSG represents one of the leading exponents of Cladding process in China. MSG, shall provide full technical support till completion of the project, to the Clients satisfaction.</p>
                </motion.div>
            </section>
        </div>
    );
}
