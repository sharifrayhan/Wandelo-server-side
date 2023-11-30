const Story = require('../models/Story');

const allStories = async (req, res) => {
  try {
    const stories = await Story.find();
    res.status(200).json(stories);
  } catch (error) {
    console.error('Error fetching stories:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const singleStory = async (req, res) => {
  const { id } = req.params;
  try {
    const story = await Story.findById(id);
    if (!story) {
      return res.status(404).json({ error: 'Story not found' });
    }
    res.status(200).json(story);
  } catch (error) {
    console.error('Error fetching story:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const postStory = async (req, res) => {
//   const { name, title, content, profile_image } = req.body;
  try {
    const newStory = new Story(req.body);
    const savedStory = await newStory.save();
    res.status(201).json(savedStory);
  } catch (error) {
    console.error('Error creating story:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  allStories,
  singleStory,
  postStory,
};
