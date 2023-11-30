const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
  package: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'packages',
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  
});

const Wishlist = mongoose.model('wishlist', wishlistSchema);

module.exports = Wishlist;
