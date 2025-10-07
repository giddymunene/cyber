import React from "react";
import { useNavigate } from "react-router-dom";
import { FaQuestion } from "react-icons/fa"; // For the question mark icon
import "./Services.css";

function Services() {
  const navigate = useNavigate();

  const services = [
    {
      title: "All Government Services",
      description:
        "We offer a variety of government services including SHA Applications, Filing returns, and all E-citizen services.",
      image: "images/serv3.jpeg",
    },
    {
      title: "High-Speed Internet",
      description:
        "Enjoy reliable and fast internet for browsing, streaming, and work. We also offer Wi-Fi installation services.",
      image: "images/serv.jpeg",
    },
    {
      title: "M-Pesa, Airtel Money & Bank Agents",
      description:
        "Experience top-notch and reliable M-Pesa services. We also offer banking agent services for KCB, Co-op, and others.",
      image: "images/view3.jpeg",
    },
    {
      title: "Printing, Scanning & Passport",
      description:
        "Quick and affordable printing, scanning, and photocopy services.",
      image: "images/sev.jpeg",
    },
    {
      title: "Computer Training & Tutorials",
      description:
        "Learn digital skills through our guided tutorials and training sessions.",
      image: "images/train.jpeg",
    },
  ];

  return (
    <div className="services-page">
      <h1 className="services-title">Our Services</h1>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-img-wrapper">
              <img
                src={service.image}
                alt={service.title}
                className="service-img"
              />
            </div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      {/* Floating Talk to Us Button */}
      <div
        className="talk-to-us-btn"
        title="Talk to Us"
        onClick={() => navigate("/contact")}
      >
        <FaQuestion className="talk-icon" />
        <span className="tooltip-text">Talk to Us</span>
      </div>
    </div>
  );
}

export default Services;
