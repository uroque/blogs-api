const { User } = require('../models');

const emailExists = async (req, res, next) => {
  const { email } = req.body;
  const findByEmail = await User.findOne({ where: { email } });

  if (findByEmail) {
    return res.status(409).json({ message: 'User already registered' });
  }

  next();
};

module.exports = { emailExists };
