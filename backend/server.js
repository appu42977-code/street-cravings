const express = require("express");
const cors = require("cors");
const path = require("path");

const db = require("./db"); // MySQL connection

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend")));

// Test Route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// ✅ SAVE ORDER (MySQL)
app.post("/order", (req, res) => {
  console.log("API HIT ✅");   // 🔍 Debug
  console.log(req.body);      // 🔍 Check data coming

  const { username, contact, items, total } = req.body;

  const sql = "INSERT INTO orders (username, contact, items, total) VALUES (?, ?, ?, ?)";

  db.query(sql, [username, contact, JSON.stringify(items), total], (err, result) => {
    if (err) {
      console.log("DB Error:", err);
      return res.status(500).send("❌ Failed to save order");
    } else {
      console.log("order saved")
      res.send("✅ Order Saved Successfully");
    }
  });
});

// Start Server
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});