const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  username: String,
  contact: String,
  items: Array,
  total: Number
});

module.exports = mongoose.model("Order", orderSchema);