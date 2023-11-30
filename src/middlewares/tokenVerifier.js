const jwt = require('jsonwebtoken');

const tokenVerifier = (req, res, next) => {
  const token = req?.cookies?.token;

  console.log(token)

  if (!token) {
    return res.status(401).json({ message: 'No Token, Unauthorized' });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    req.user = decoded;
    next();
  });
};

module.exports = tokenVerifier;