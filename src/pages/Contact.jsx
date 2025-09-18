import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setStatus(data.message || "Error sending message.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="page">
      <h1>Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name"
          value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email"
          value={form.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message"
          value={form.message} onChange={handleChange} required />
        <button type="submit">Send</button>
      </form>
      {status && <p className="status">{status}</p>}
    </div>
  );
}

export default Contact;