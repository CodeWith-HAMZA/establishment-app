const mongoose = require('mongoose');

const Otp = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    // unique: true, // Ensure only one pending OTP per email
    lowercase: true,
  },
  otp: {
    type: String,
    required: true,
  },
  otpExpiresAt: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 600, // Automatically delete document after 10 minutes
  },
});

module.exports = mongoose.models['Otp'] || mongoose.model('Otp', Otp);
