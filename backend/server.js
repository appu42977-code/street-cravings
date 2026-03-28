const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Order = require("./models/Order");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/streetcravings");

app.post("/order", async (req, res) => {
  const newOrder = new Order(req.body);
  await newOrder.save();
  res.json({ message: "Saved" });
});

app.listen(5000, () => console.log("Server running"));