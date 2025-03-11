import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  

  
  return (
    <div>
     

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <img
              src="/assets/msglogo.png"
              alt="Venus Catering"
              className="footerlogo"
            />
            <p >
            MSG Oilfield Equipment Trading LLC
            </p>
            <div className="social-icons">
              <a href="https://www.facebook.com/msgoilfield" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/msgoilfield/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/msg-oilfield-equipment-trading-llc/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              {/* <a href="https://wa.me/9591584523" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a> */}
            </div>
          </div>

          <div className="footer-services">
            <h3>Our Services</h3>
            <div className="services-list">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Our Services</Link></li>
                <li><Link to="/inspection">Inspection</Link></li>
                <li><Link to="/testing">Testing</Link></li>
                <li><Link to="/cladding">Cladding</Link></li>
                <li><Link to="/product">Our Products</Link></li>
                <li><Link to="/pipefitting">Pipe Fittings</Link></li>
              </ul>
              <ul>
               
                <li><Link to="/pipes">Pipes</Link></li>
                <li><Link to="/flanges">Flanges</Link></li>
                <li><Link to="/valves">Valves</Link></li>
                <li><Link to="/strainers">Strainers</Link></li>
                <li><Link to="/plates">Plates</Link></li>
                <li><Link to="/specialitems">Special Items</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/certificate">Certification</Link></li>
              </ul>
            </div>
          </div>

          <div className="footer-contact">
            <h3>Contact Now</h3>
            <p><FontAwesomeIcon icon={faLocationDot} className="icon1" />Dubai industrial city Phase 1, Salih Shuaib 2, Warehouse No:J-04 Dubai, United Arab Emirates </p>
            <p><FontAwesomeIcon icon={faPhone} className="icon1" /> +97142 951 222</p>
            {/* <p><FontAwesomeIcon icon={faPhone} className="icon1" /> +91 98451 48523</p> */}
            <p><FontAwesomeIcon icon={faEnvelope} className="icon1" />info@msgoilfield.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © 2023 <b>MSG</b> All rights reserved | Designed By <b>Vision Flow Technologies</b>.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;