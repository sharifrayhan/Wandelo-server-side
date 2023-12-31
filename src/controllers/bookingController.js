const Booking = require('../models/Booking');

// Create a new booking
const createBooking = async (req, res) => {
  try {
    const { name, email, tourDate, tourGuide, package, status} = req.body;
    const newBooking = new Booking({
      name,
      email,
      tourDate,
      tourGuide,
      package, 
      status
    });

    await newBooking.save();

    res.status(201).json({ message: 'Booking created successfully', booking: newBooking });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all bookings
const getAllBookings = async (req, res) => {
    try {
      const bookings = await Booking.find()
        .populate('tourGuide package')
        .exec();
  
      res.json(bookings);
    } catch (error) {
      console.error('Error getting bookings:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  // get a specific booking
  const getABooking = async (req, res) => {
    try {
      const booking = await Booking
        .findById(req.params.id)
        .populate('tourGuide package'); 
  
      if (!booking) {
        return res.status(404).json({ error: 'Booking not found' });
      }
  
      res.json(booking);
    } catch (error) {
      console.error('Error getting booking by ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

// Update a booking by ID
const updateBooking = async (req, res) => {
  try {
    const bookingId = req.params.id;
    const { status } = req.body;
    const updatedBooking = await Booking.findByIdAndUpdate(
        bookingId,
        { status },
        { new: true }
        );

    if (!updatedBooking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.json({ message: 'Booking status updated successfully', booking: updatedBooking });
  } catch (error) {
    console.error('Error updating booking by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a booking by ID
const deleteBooking = async (req, res) => {
  try {
    const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
    if (!deletedBooking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.json({ message: 'Booking deleted successfully', booking: deletedBooking });
  } catch (error) {
    console.error('Error deleting booking by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createBooking,
  getAllBookings,
  getABooking,
  updateBooking,
  deleteBooking,
};
