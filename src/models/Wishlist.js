const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  package: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'packages',
    required: true,
  },
});

const Wishlist = mongoose.model('wishlist', wishlistSchema);

module.exports = Wishlist;
