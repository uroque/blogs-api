const { BlogPost, Category, User } = require('../models');

const create = async (title, content, categoryIds, userId) => {
  const newPost = await BlogPost.create({ title, content, categoryIds, userId });

  return newPost.dataValues;
};

const findAll = async (userId) => {
  const posts = await BlogPost.findAll({
    where: { userId },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });
  return posts;
};

const findById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!post) return false;

  return post;
};

module.exports = {
  create,
  findAll,
  findById,
};
