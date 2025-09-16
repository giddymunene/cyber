import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";   // ✅ New import
import Footer from "./components/Footer";
import AdminLogin from "./pages/AdminLogin";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <h2>Cyber Café</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/admin">Admin</Link></li> {/* ✅ New Link */}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />  {/* ✅ New Route */}
          <Route path="/admin-login" element={<AdminLogin />} /> {/* ✅ New */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
