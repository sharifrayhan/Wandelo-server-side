const Wishlist = require("../models/Wishlist")


// Get all wishses
const allWishlist = async (req, res) => {
    try {
      const wishlist = await Wishlist.find();
      res.json(wishlist);
    } catch (error) {
      res.status(500).json({ error: 'Server Error' });
    }
  };


  // Get a single wish
const singleWish = async (req, res) => {
    const wishId = req.params.id;
  
    try {
      const wish = await Wishlist.findById(wishId);
  
      if (!wish) {
        return res.status(404).json({ error: 'Package not found' });
      }
  
      res.json(wish);
    } catch (error) {
      res.status(500).json({ error: 'Server Error' });
    }
  };

   // Create a new wish
const createWish = async (req, res) => {
    try {
      const newWish = new Wishlist(req.body);
      await newWish.save();
      res.status(201).send('Wish added successfully');
    } catch (error) {
      res.status(500).send('Server Error');
    }
  };


  // Delete a wish by ID
const deleteWish = async (req, res) => {
    const wishId = req.params.id;
  
    try {
      const deletedWish = await Wishlist.findByIdAndDelete(wishId);
  
      if (!deletedWish) {
        return res.status(404).json({ error: 'Wish not found' });
      }
  
      res.json({ message: 'Wish deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Server Error' });
    }
  };

  module.exports = {
allWishlist,
deleteWish,
createWish,
singleWish

  };