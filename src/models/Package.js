const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  place: { type: String, required: true },
  image: { type: String, required: true },
  tourTitle: { type: String, required: true },
  tourType: String, 
  price: Number,   
  details: String,  
  tourPlan: [{
    day: String,
    spots: [String]     
  }],
  spotImages: [String],
});

const Package = mongoose.model('packages', packageSchema);

module.exports = Package;
