import React from "react";
import "../styles/whoweare.css";

const Whoweare = () => {
  return (
    <div className="whoweare-app-container">
      {/* Hero Section */}
      <section className="whoweare-hero">
        <div className="whoweare-hero-content">
          <h1>About Us</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="whoweare-main-content">
        <div className="whoweare-left-content">
          <h2 className="whoweare-heading2">WHO WE ARE</h2>
          <p>
            OMSG Oilfield Equipment Trading LLC specializes in products such as Pipes, Fittings, Flanges, Valves, Fasteners, and Gaskets.
            We also possess expertise in offering our services to source Coating of Pipes & Pipe Fittings.
            Moreover, if our clients demand renewed products, we support them by advising and suggesting good quality refurbished equipment, as per their requirements, which can be project-specific.
          </p>
        </div>
        <div className="whoweare-right-content">
          <div className="whoweare-image-circle">
            <img src="./assets/about.jpg" alt="Main Image" className="whoweare-main-image" />
            <img src="./assets/image1.jpg" alt="Overlay Image" className="whoweare-overlay-image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Whoweare;
