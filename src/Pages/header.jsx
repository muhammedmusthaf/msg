// Header.jsx
import { useState } from 'react';
import '../styles/header.css';


const Header = () => {
  const [videoError, setVideoError] = useState(false);


  return (
    <div className="header-header-container">
      {/* Separate div for the background video */}
      <div className="header-video-background-container">
        {videoError ? (
          <div className="header-video-error">
            <p>Video could not be loaded. Please try again later.</p>
          </div>
        ) : (
          <video
            autoPlay
            loop
            muted
            className="header-video-background"
            onError={() => setVideoError(true)}
          >
            <source
              src="/assets/WhatsApp-Video-2024-05-16-at-11.58.57-PM.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      {/* Overlay and Text Content */}
      <div className="header-overlay">
        <div className="header-content">
          <div className="header-text-overlay">
            <h1 className="header-main-heading">Material Solutions Grid</h1>
            <p className="header-subheading">CREATING A BRIGHTER FUTURE, TOGETHER</p>
          </div>
          <div className="header-who-we-are">
            <p style={{
              display: 'inline-block',
              marginTop: '20px',
              position: 'relative',
              paddingBottom: '8px',
            }}>
              {/* &#8594; Who We Are
              <span style={{
                position: 'absolute',
                bottom: -5,
                left: '0',
                right: '50',
                width: '100%',
                borderBottom: '2px solid yellow',
              }} onClick={()=> navigate("/about")}></span> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

