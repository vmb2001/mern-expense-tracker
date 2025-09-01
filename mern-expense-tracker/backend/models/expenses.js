// If using CommonJS (require/module.exports):
const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  category: String,
  date: { type: Date, default: Date.now },
  description: String,
});

module.exports = mongoose.model("Expense", expenseSchema);
