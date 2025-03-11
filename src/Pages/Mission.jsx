import React from "react";
import "../styles/Mission.css";
import { FaEye, FaRocket } from "react-icons/fa"; 

const Mission = () => {
  return (
    <section className="missionvision-mission-vision">
      <h2 className="missionvision-heading4">OUR VISION & MISSION </h2>
      <div className="missionvision-cards">
        <div className="missionvision-card missionvision-vision">
          <FaEye className="missionvision-icon" />
          <h3>VISION</h3>
          <p>To become the foremost company among the best in the sector we serve.</p>
        </div>
        <div className="missionvision-card missionvision-mission">
          <FaRocket className="missionvision-icon" />
          <h3>MISSION</h3>
          <p>To provide unparalleled values, services, and qualities to the core industry we serve 
            and keep on upgrading so as to set new benchmark in the industry.</p>
        </div>
      </div>
    </section>
  );
};

export default Mission;