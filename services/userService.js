const { User } = require('../models');

const createUserService = async ({ displayName, email, password, image }) => {
  const newUser = await User.create({ displayName, email, password, image });
  return newUser;
};

const findAllService = async () => {
  const usersList = await User.findAll();
  return usersList;
};

module.exports = { createUserService, findAllService };
