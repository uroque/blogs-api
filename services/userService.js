const { User, BlogPost } = require('../models');

const create = async ({ displayName, email, password, image }) => {
  const newUser = await User.create({ displayName, email, password, image });
  return newUser.dataValues;
};

const findAll = async () => {
  const usersList = await User.findAll();
  return usersList;
};

const findById = async (id) => {
  const foundUser = await User.findOne({ where: id });

  if (!foundUser) {
    return false;
  }

  return foundUser.dataValues;
};

const destroy = async (userId) => {
  await User.destroy({ where: { id: userId } });
};

module.exports = {
  create,
  findAll,
  findById,
  destroy,
};
