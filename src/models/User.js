const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profile_image: {
    type: String,
    default: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
  },
  cover_image: {
    type: String,
    default: 'https://i.ibb.co/LvGz1MP/guide-cover-defaultt.jpg'
  },
  desiredRole: {
    type: String,
    default: 'tourist',
  },
  role: {
    type: String,
    default: 'tourist',
  },
  education: {
    type: String,
    default: ""
  },
  phone: {
    type: String,
    default: ""
  },
  skills: {
    type: [String],
    default: ["Tour Guide"]
  },
  experience: {
    type: String,
    default: ""
},
reviews: {
    type: [
      {
        name: {
          type: String,
          default: ''
        },
        message: {
          type: String,
          default: ''
        },
        rating: {
            type: Number,
            default: ""
        }
      }
    ],
    default: []
  }
},
{
  timestamps: true, 
});

const User = mongoose.model('users', userSchema);

module.exports = User;
