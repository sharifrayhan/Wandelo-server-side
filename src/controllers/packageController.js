const Package = require('../models/Package'); 


// Get allpackages 
const allPackages = async (req, res) => {
  try {
    const packages = await Package.find();
    res.json(packages);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Get a single package by ID
const singlePackage = async (req, res) => {
    const packageId = req.params.id;
  
    try {
      const package = await Package.findById(packageId);
  
      if (!package) {
        return res.status(404).json({ error: 'Package not found' });
      }
  
      res.json(package);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

 // Create a new package
const createPackage = async (req, res) => {
  try {
    const newPackage = new Package(req.body);
    await newPackage.save();
    res.status(201).json(newPackage);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a package by ID
const updatePackage = async (req, res) => {
  const packageId = req.params.id;

  try {
    const updatedPackage = await Package.findByIdAndUpdate(
      packageId,
      req.body,
      { new: true }
    );

    if (!updatedPackage) {
      return res.status(404).json({ error: 'Package not found' });
    }

    res.json(updatedPackage);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a package by ID
const deletePackage = async (req, res) => {
  const packageId = req.params.id;

  try {
    const deletedPackage = await Package.findByIdAndDelete(packageId);

    if (!deletedPackage) {
      return res.status(404).json({ error: 'Package not found' });
    }

    res.json({ message: 'Package deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  allPackages,
  singlePackage,
  createPackage,
  updatePackage,
  deletePackage
};
