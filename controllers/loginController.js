require('dotenv').config();
const jwt = require('jsonwebtoken');
const { findByEmail } = require('../services/loginService');

const jwtConfig = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await findByEmail(email);

    if (!user) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    if (user.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, jwtConfig);

    return res.status(200).json({ token });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  Login,
};
