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

module.exports = {
  allPackages,
  singlePackage
};
