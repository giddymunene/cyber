const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.models.Message || mongoose.model("Message", messageSchema);
