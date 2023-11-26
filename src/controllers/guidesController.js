const Guide = require('../models/Guide'); 


// Get all guides
const allGuides = async (req, res) => {
  try {
    const guides = await Guide.find();
    res.json(guides);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Get a single guide by ID
const singleGuide = async (req, res) => {
    const guideId = req.params.id;
  
    try {
      const guide = await Guide.findById(guideId);
  
      if (!guide) {
        return res.status(404).json({ error: 'Guide not found' });
      }
  
      res.json(guide);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

module.exports = {
    allGuides,
  singleGuide
};
