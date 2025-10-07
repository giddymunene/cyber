import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_d1lrenf",
        "template_5bcynlk",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "KPUU17xXP64ocJGnB"
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error);
          setStatus("❌ Failed to send message. Try again later.");
        }
      );
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>
          Contact <span>Us</span>
        </h1>
        <p className="contact-desc">
          We'd love to hear from you! Send us a message and we’ll get back to you soon.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>

        {status && <p className="status-message">{status}</p>}

        {/* Contact Cards */}
        <div className="contact-cards">
          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <h3>Email Us</h3>
            <a href="mailto:dantechcyber32@gmail.com">dantechcyber32@gmail.com</a>
          </div>

          <div className="contact-card">
            <FaPhoneAlt className="contact-icon" />
            <h3>Call Us</h3>
            <a href="tel:+254705830813">+2547 0583 0813</a>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default Contact;
