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

const update = async (userId, id, body) => {
  const post = await BlogPost.findOne({ where: { id } });

  if (userId !== post.userId) {
    const error = { status: 401, message: 'Unauthorized user' };
    return error;
  }

  const { title, content } = body;

  await BlogPost.update({ title, content }, { where: { id } });

  const updatedPost = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return updatedPost;
};

const destroy = async (userId, id) => {
  const post = await BlogPost.findOne({ where: { id } });

  if (!post) {
    const error = { status: 404, message: 'Post does not exist' };
    return error;
  }

  if (userId !== post.userId) {
    const error = { status: 401, message: 'Unauthorized user' };
    return error;
  }

  await BlogPost.destroy({ where: { id } });
};

module.exports = {
  create,
  findAll,
  findById,
  destroy,
  update,
};
