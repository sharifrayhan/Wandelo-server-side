const User = require('../models/User');

const roleVerifier = async (req, res, next) => {
    try {
        const email = req.user?.email || null;

        if (!email) {
            return res.status(401).json({ error: 'Unauthorized, email not found' });
        }

        const query = { email: email };
        const user = await User.findOne(query);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        if (user.role === 'guide' || user.role === 'tourist') {
            req.userData = { userEmail: email, userRole: user.role };
            next();
        } else {
            return res.status(403).json({ error: 'You do not have the required role for this action' });
        }
    } catch (error) {
        console.error('Error checking user role:', error);
        return res.status(500).json({ error: 'Server Error' });
    }
};

module.exports = roleVerifier;
