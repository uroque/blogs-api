const { User } = require('../models');

const emailDoNotExists = async (req, res, next) => {
  const { email } = req.body;
  const findByEmail = await User.findOne({ where: { email } });

  if (!findByEmail) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  next();
};

const emptyEmail = (req, res, next) => {
  const { email } = req.body;
  if (email === '') {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }
  next();
};

const emptyPassword = (req, res, next) => {
  const { password } = req.body;
  if (password === '') {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }
  next();
};

module.exports = { emailDoNotExists, emptyEmail, emptyPassword };
