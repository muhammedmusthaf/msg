import { useEffect, useState } from "react";
import "../styles/Ourservice.css";

function Ourservice() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 2 : 100));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: "TESTING",
      description:
        "With our vast experience, we are well aware of the Testing requirements of our Clientele. We can arrange for Third party inspections on customer requests. Depending on our customers requirements we can outsource all kinds of relevant Testing.",
      img: "/assets/testing.webp",
    },
    {
      title: "INSPECTION",
      description:
        "With our vast experience, we are well aware of the inspection requirements of our Clientele. We can arrange for Third party inspections on customer requests. Depending on our customers requirements we can outsource all kinds of relevant inspection.",
      img: "/assets/inspection.webp",
    },
    {
      title: "CLADDING",
      description:
        "Cladding is the process by which layer of Corrosion Resistant Alloy (CRA) is bonded internally on to the normal Carbon Steel (CS) Pipe by various processes. There by providing corrosion resistant properties of CRA and Mechanical Properties of Carbon Steel Pipes. ",
      img: "/assets/cladding.webp",
    },
  ];

  return (
    <div className="service-page">
      <div
        className="service-hero"
        style={{ backgroundImage: "url(/assets/servbac1.jpg)" }}
      >
        <div className="service-overlay">
          <h1 className="service-title1">
            <center>Our Services</center>
          </h1>
        </div>
      </div>

      <div className="services-container">
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${
                index === 0 ? "right" : index === 1 ? "center" : "left"
              }`}
            >
              <img
                src={service.img}
                alt={service.title}
                className="service-image"
              />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#" className="service-link">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="progress-section" >
        <h1>Reach The Top With The Oil Industry</h1>
        
        <div className="progress-wrapper">
        
          <CircularProgress percentage={progress} title="Professional" />
          <CircularProgress percentage={progress} title="Quality" />
          <CircularProgress percentage={progress} title="Expert" />
        </div>
      </div>
    </div>
  );
}

const CircularProgress = ({ percentage, title }) => {
  return (
    <div className="progress-container">
      <svg className="progress-ring">
        <circle className="background" cx="60" cy="60" r="50"></circle>
        <circle className="progress" cx="60" cy="60" r="50" style={{ strokeDashoffset: `calc(314 - (314 * ${percentage}) / 100)` }}>
        </circle>
      </svg>
      <div className="progress-text">{percentage}%</div>
      <h3>{title}</h3>
    </div>
  );
};

export default Ourservice;