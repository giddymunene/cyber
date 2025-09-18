import React, { useState, useEffect } from "react";

function Home() {
  const images = [
    "images/serv.jpeg",
    "images/serv3.jpeg",
    "images/view3.jpeg",
    "images/sev.jpeg",
    "images/train.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="overlay">
        <div className="home-content">
          <h1>Welcome to DANTECH Cyber Café</h1>
          <p>
            At DANTECH Cyber Café, we provide reliable internet access, quality
            printing & scanning, professional training, and reliable mobile banking services.
            Our goal is to make digital services accessible, fast, and
            affordable for everyone.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
