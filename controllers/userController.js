// const { User } = require('../models');
const { createUserService } = require('../services/userService');

const createUser = async (req, res) => {
  try {
    const { displayName, email, password } = req.body;
    const newUser = await createUserService({ displayName, email, password });

    return res.status(201).json(newUser);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  createUser,
};
