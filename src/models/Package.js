const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  place: { type: String, required: true },
  image: { type: String, required: true },
  tourTitle: { type: String, required: true },
  about: {
    tourType: String,
    price: Number,
    details: String,
  },
  spots: [{
    day1: [{
      spot: String,
      image: String,
      details: String,
    }],
    day2: [{
      spot: String,
      image: String,
      details: String,
    }],
    day3: [{
      spot: String,
      image: String,
      details: String,
    }],
  }],
});

const Package = mongoose.model('packages', packageSchema);

module.exports = Package;
