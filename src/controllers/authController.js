const jwt = require('jsonwebtoken');

const login = async (req, res) => {

  try {
    const user = req.body;
    console.log('user token chay', user);
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1hr' });

    res.cookie('token', token, {
      httpOnly: false,
      secure:  false,
      sameSite:  'none',
    });

    res.send({ success: true, token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }

};


const logout = (req, res) => {
    try {
        const user = req.body
        console.log('cookie delete kora dorkar', user)
      res.clearCookie('token', {
        maxAge: 0,
        secure: false,
        sameSite: 'none' 
      });
  
      res.json({ success: true });
    } catch (error) {
      console.error('Logout error:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  };

module.exports = {
  login,
  logout
};
