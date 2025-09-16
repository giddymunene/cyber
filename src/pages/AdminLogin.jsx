import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem("adminToken", data.token); // ✅ Save token
        navigate("/admin");
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Server error. Try again.");
    }
  };

  return (
    <div className="page">
      <h1>Admin Login</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p className="status" style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default AdminLogin;
