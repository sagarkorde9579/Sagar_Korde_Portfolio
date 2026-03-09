const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: "admin"
  },
  resetOtp: String,
  otpExpire: Date
});

module.exports = mongoose.model("Admin", adminSchema);