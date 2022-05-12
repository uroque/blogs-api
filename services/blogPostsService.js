const { BlogPost } = require('../models');

const create = async (title, content, categoryIds, userId) => {
  const newPost = await BlogPost.create({ title, content, categoryIds, userId });

  return newPost.dataValues;
};

module.exports = {
  create,
};
