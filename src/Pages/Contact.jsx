import React, { useEffect, useState } from "react";
import "../App.css";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div
        className="contact-hero"
        style={{ backgroundImage: `url(/assets/contbac.webp)` }}
      >
        <h1 className="contact-title"><center>Contact Us</center></h1>
      </div>

      <div className="contact-grid">
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed/v1/place?q=Pais+catering&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact-boxes">
          <div className="contact-box contact-box-1">
            <img src="/assets/telephone.png" alt="Image 1" />
            <h4>+97150 850 2350</h4>
            <h4>+97142 951 222</h4>
            <p>Contact us today and let’s start optimizing your oilfield operations for success.</p>
          </div>
          <div className="contact-box contact-box-2">
            <img src="/assets/email.png" alt="Image 2" />
            <h4>info@msgoilfield.com</h4>
            <p>For inquiries, assistance, or to explore our oilfield solutions, feel free to reach out to us. We’re here to help you achieve excellence in the oil and gas industry.</p>
          </div>
          <div className="contact-box contact-box-3">
            <img src="/assets/location.png" alt="Image 3" />
            <h4>Dubai Indestrial city Phase 1, Salih Shuaib 2, Warehouse No:J-04 Dubai, United Arab Emirates</h4>
            <p>We’re strategically located to serve your oilfield equipment needs. Feel free to visit us or contact us for any assistance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
