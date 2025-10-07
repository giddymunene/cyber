import React from "react";
import {
  FaFacebook,
  FaTiktok,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom"; // Add this
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            <FaPhoneAlt /> <a href="tel:+2547735086">+2547 0773 5086</a>
          </p>
          <p>
            <FaPhoneAlt /> <a href="tel:+254705830813">+2547 0583 0813</a>
          </p>
          <p>
            <FaEnvelope />{" "}
            <a href="mailto:dantechcyber32@gmail.com">
              dantechcyber32@gmail.com
            </a>
          </p>
        </div>

        {/* Location Section */}
        <div className="footer-section">
          <h3>Our Location</h3>
          <p>
            <FaMapMarkerAlt />{" "}
            <a
              href="https://www.google.com/maps/place/Kianjokoma"
              target="_blank"
              rel="noreferrer"
            >
              Kianjokoma, Embu, Kenya
            </a>
          </p>
        </div>

        {/* Navigation Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <nav className="footer-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
          </nav>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="footer-socials">
            <a
              href="https://facebook.com/Dantech cyber and computing training"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <FaFacebook />
            </a>
            <a
              href="https://tiktok.com/dantechcyber"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <FaTiktok />
            </a>
            <a
              href="https://instagram.com/YourProfile"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} <span>Dantech Cyber</span>. All rights
        reserved.
      </p>
    </footer>
  );
}

export default Footer;
