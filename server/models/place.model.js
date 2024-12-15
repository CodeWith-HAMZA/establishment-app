const mongoose = require('mongoose');

const Place = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    
  },
  images: [
    {
        type: String
    }
  ],
  //  limited features 
  features: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Feature',
    },
  ],
  description: {
    type: String,
    trim: true,
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.models['Place'] || mongoose.model('Place', Place);
