const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    lat: {
      type: Number,
      required: true,
      min: -90,
      max: 90,
    },
    lng: {
      type: Number,
      required: true,
      min: -180,
      max: 180, 
    },
    country: {
      type: String,
      required: true, // now Further we can store more and apply validations for authenticity with states, city etc.
    },
  },
  phone: {
    type: String,
  },
    profile: {
            type: String, 
        },
        role: {
          type: String,
          enum: ['user', 'owner'],
          default: 'user'
        },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.models['User'] || mongoose.model('User', UserSchema);
