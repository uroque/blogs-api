const { Category } = require('../models');

const create = async (name) => {
  const createdCategory = await Category.create({ name });

  return createdCategory.dataValues;
};

const findAll = async () => {
  const categoriesList = await Category.findAll();

  return categoriesList;
};

module.exports = {
  create,
  findAll,
};
