import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  // Allowed admin emails (only 3 registered admins)
  const allowedAdmins = [
    "admin1@example.com",
    "admin2@example.com",
    "admin3@example.com",
  ];

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    const adminEmail = localStorage.getItem("adminEmail"); // store this during login

    if (!token || !allowedAdmins.includes(adminEmail)) {
      navigate("/admin-login"); // redirect if not logged in or not allowed
      return;
    }

    fetch("http://localhost:5000/api/admin/messages")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error("Error fetching messages:", err));
  }, [navigate]);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/admin/messages/${id}`, {
        method: "DELETE",
      });
      setMessages(messages.filter((msg) => msg.id !== id));
    } catch (err) {
      console.error("Error deleting message:", err);
    }
  };

  return (
    <div className="page">
      <h1>Admin Dashboard</h1>
      <button
        style={{ marginBottom: "20px" }}
        onClick={() => {
          localStorage.removeItem("adminToken");
          localStorage.removeItem("adminEmail");
          navigate("/admin-login");
        }}
      >
        Logout
      </button>

      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg, index) => (
              <tr key={msg.id}>
                <td>{index + 1}</td>
                <td>{msg.name}</td>
                <td>{msg.email}</td>
                <td>{msg.message}</td>
                <td>
                  <button onClick={() => handleDelete(msg.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Admin;
