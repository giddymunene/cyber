const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Temporary database (in-memory)
let messages = [];

// API route to handle contact form
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }
  const newMessage = { id: Date.now(), name, email, message };
  messages.push(newMessage);
  res.json({ success: true, message: "Message received!" });
});

// Admin route to view messages
app.get("/api/admin/messages", (req, res) => {
  res.json(messages);
});

// Dummy admin credentials
const ADMIN = { username: "admin", password: "12345" };

// Login route
app.post("/api/admin/login", (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN.username && password === ADMIN.password) {
    return res.json({ success: true, token: "secret-token" }); 
  }
  res.status(401).json({ success: false, message: "Invalid credentials" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
