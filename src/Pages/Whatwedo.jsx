import React from "react";
import "../styles/Whatwedo.css";

function Whatwedo() {
  return (
    <div className="whatwedo-about-container">
      <div className="whatwedo-content-wrapper">
        <div className="whatwedo-content1">
          <div className="whatwedo-main-image1">
            <img src="/assets/image2.jpg" alt="Golden Retrievers in pet care" />
          </div>
        </div>
        <div className="whatwedo-right-content1">
          <h2 className="whatwedo-heading3">WHAT WE DO</h2>
          <p>
            MSG specializes in providing a consistent global supply of Oil and Gas materials and equipment. Their focus is on ensuring smooth operational activities for their clients. With extensive experience in managing supplies, they offer a service unmatched by many competitors. A dedicated team works to meet both project and daily operational needs.
            <br />
            MSG provides reliable, worldwide supply of Oil and Gas materials, equipment, and spares, streamlining customer operations. Our experienced team delivers exceptional service, focusing on quality, timely delivery, and strong client partnerships. We are committed to industry best practices and customer success.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Whatwedo;