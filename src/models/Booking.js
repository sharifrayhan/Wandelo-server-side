const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    required: true,
  },

  tourDate: {
    type: Date,
    required: true,
  },

//  Object id diye guides collection er shathe connection establish kortesi
  tourGuide: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'guides', 
    required: true,
  },

//  Client side theke pathano Object id use kore package collection theke specific package ke point kortesi
  package: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'packages',
    required: true,
  },
}, 

// Creation time store kore rakhtesi
{
  timestamps: true, 
});

const Booking = mongoose.model('bookings', bookingSchema);

module.exports = Booking;
