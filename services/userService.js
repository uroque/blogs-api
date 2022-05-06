const { User } = require('../models');

const createUserService = async ({ displayName, email, password }) => {
  const newUser = await User.create({ displayName, email, password });
  return newUser;
};

module.exports = { createUserService };
