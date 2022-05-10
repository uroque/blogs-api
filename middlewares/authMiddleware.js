require('dotenv').config();
const jwt = require('jsonwebtoken');

const authToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.auth = decoded.id;
    next();
  } catch (e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { authToken };
