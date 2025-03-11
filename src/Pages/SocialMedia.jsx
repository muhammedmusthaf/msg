import React, { useState, useEffect } from "react";
import "../styles/SocialMedia.css";


function SocialMedia() {
  const [currentImage, setCurrentImage] = useState(0);
  const [showFirstText, setShowFirstText] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "We are here to serve your Piping need";

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % 2);
    }, 2000);
  
    setTimeout(() => {
      setShowFirstText(true);
      let index = 0;
      let newText = ""; // Initialize an empty string to prevent unwanted character flickering
  
      const textInterval = setInterval(() => {
        if (index < fullText.length) {
          newText += fullText[index]; // Add each character sequentially
          setDisplayedText(newText);
          index++;
        } else {
          clearInterval(textInterval);
        }
      }, 100);
    }, 1000);
  
    setTimeout(() => {
      setShowSecondText(true);
    }, 1800);
  
    setTimeout(() => {
      const intervalId1 = setInterval(() => {
        setCount1((prevCount) => (prevCount < 385 ? prevCount + 1 : prevCount));
      }, 2);
      return () => clearInterval(intervalId1);
    }, 2800);
  
    setTimeout(() => {
      const intervalId2 = setInterval(() => {
        setCount2((prevCount) => (prevCount < 125 ? prevCount + 1 : prevCount));
      }, 8);
      return () => clearInterval(intervalId2);
    }, 2800);
  
    setTimeout(() => {
      const intervalId3 = setInterval(() => {
        setCount3((prevCount) => (prevCount < 30 ? prevCount + 1 : prevCount));
      }, 33);
      return () => clearInterval(intervalId3);
    }, 2800);
  
    setTimeout(() => {
      const intervalId4 = setInterval(() => {
        setProgress1((prevProgress) => (prevProgress < 100 ? prevProgress + 1 : prevProgress));
      }, 20);
      return () => clearInterval(intervalId4);
    }, 3800);
  
    setTimeout(() => {
      const intervalId5 = setInterval(() => {
        setProgress2((prevProgress) => (prevProgress < 100 ? prevProgress + 1 : prevProgress));
      }, 20);
      return () => clearInterval(intervalId5);
    }, 3800);
  
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div className="container">
      <div className="image-section">
        <img
          src={
            currentImage === 0
              ? "https://img.freepik.com/free-photo/summer-sunset-landscape_1127-294.jpg?t=st=1741325463~exp=1741329063~hmac=84b8c8176dd69c413f780ac9ef1260eb33fd485b2a6c2ebaaeb29724fe14925a&w=1380"
              : "https://images.pexels.com/photos/10396410/pexels-photo-10396410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt="Piping"
        />
        <div className="animated-text">
          <div className="text-box">
            {showFirstText && <h1 className="first-line">{displayedText}</h1>}
            {showSecondText && (
              <div className="second-line">
                <p>
                  MSG Oilfield Equipment Trading LLC: Your Trusted Partner in Oil and Gas. Delivering Excellence, Every Well, Every Time.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="content-section">
        <div className="left-section">
          <div className="box">
            <img src="assets/" alt="Logo 1" className="box-logo" />
            <div className="counter">{count1}</div>
            <div className="box-text">Oil and Gas Projects</div>
          </div>
          <div className="box">
            <img src="assets/" alt="Logo 2" className="box-logo" />
            <div className="counter">{count2}</div>
            <div className="box-text">Power and Marine Projects</div>
          </div>
          <div className="box">
            <img src="assets/" alt="Logo 3" className="box-logo" />
            <div className="counter">{count3}</div>
            <div className="box-text">Other</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
