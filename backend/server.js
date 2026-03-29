const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config()

const Order = require("./models/Order");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ MongoDB Atlas Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log("DB Error:", err));
// Test Route
app.get("/", (req, res) => {
  res.send("Backend Running ✅");
});

// Save Order
app.post("/order", async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();

    res.json({ message: "✅ Order Saved Successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "❌ Failed to save order" });
  }
});

// Start Server
app.listen(process.env.PORT || 5000, () => {
  console.log("🚀 Server running");
});