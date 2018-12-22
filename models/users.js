const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  creditLimit: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  bal: {type: Number, default: 0},
  interest: {type: Number, default: 0},
  apr: { type: Number, default: 0.35},
  numDays: {type: Number, default: 0},
  numCharge: {type: Number, default: 0}
});

const User = mongoose.model("User", userSchema);

module.exports = User;