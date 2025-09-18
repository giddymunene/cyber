import React from "react";

function Services() {
  const services = [
    {
      title: "All Government Services",
      description: "We offer a varierty of goverment services including SHA Applications, Filling returns and All E-citizen services.",
      image: "images/serv3.jpeg",
    },
    {
      title: "High-Speed Internet",
      description: "Enjoy reliable and fast internet for browsing, streaming, and work. We also offer Wi-Fi installation Services",
      image: "images/serv.jpeg",
    },
    {
      title: "M-Pesa Services, Airtel Money & Bank Agents",
      description: "Experience top-notch and reliable M-pesa services. We also offer banking agent services for various banks including KCB, CO-OP BANK.",
      image: "images/view3.jpeg",
    },
    {
      title: "Printing & Scanning & Passport",
      description: "Quick and affordable printing, scanning, and photocopy services.",
      image: "images/sev.jpeg",
    },
    {
      title: "Computer Training & Tutorials",
      description: "Learn digital skills through our guided tutorials and training sessions.",
      image: "images/train.jpeg",
    },
  ];

  return (
    <div className="page">
      <h1>Our Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} className="service-img" />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
