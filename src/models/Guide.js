const mongoose = require('mongoose');

const guideSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  profile_image: {
    type: String,
    required: true
  },
  cover_image: {
    type: String,
    default: 'https://i.ibb.co/LvGz1MP/guide-cover-defaultt.jpg'
  },
  email: {
    type: String,
    required: true
  },
  education: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  skills: {
    type: [String],
    default: ["Tour Guide"]
  },
  experience: {
    type: String,
    required: true
}
});

const Guide = mongoose.model('guide', guideSchema);

module.exports = Guide;
