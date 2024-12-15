const crypto = require('crypto');

// Generate a 6-digit OTP
exports.generateOtp = () => {
  return crypto.randomInt(100000, 999999).toString();
};

// Check if the OTP is still valid
exports.isOtpValid = (otpExpiresAt) => {
  return otpExpiresAt > new Date();
};
