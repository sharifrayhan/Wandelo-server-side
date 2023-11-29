const User = require('../models/User');

const touristAndGuideVerifier = async (req, res, next) => {
    const email = req.user ? req.user.email : null;
    const query = { email: email }
    try {
        const user = await User.findOne(query);
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
        if (user.role === 'guide' || user.role === 'tourist') {
          next();
        } else {
          // role match na korle
          return res.status(403).json({ error: 'Tumi guide o na, tourist o na tai access nai' });
        }
      } catch (error) {
        console.error('Error checking user role:', error);
        return res.status(500).json({ error: 'Server Error' });
      }
}

module.exports =  touristAndGuideVerifier;