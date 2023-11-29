const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  profile_image: {
    type: String,
    required: true,
  },
});

const Story = mongoose.model('stories', storySchema);

module.exports = Story;
