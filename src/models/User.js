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
  photoURL: {
    type: String,
  },
  desiredRole: {
    type: String,
    default: 'tourist',
  },
  role: {
    type: String,
    default: 'tourist',
  },
});

const User = mongoose.model('users', userSchema);

module.exports = User;
