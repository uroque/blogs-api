const blogPostsService = require('../services/blogPostsService');
const categoriesService = require('../services/categoriesService');
const err = require('../middlewares/error');

const create = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const userId = req.auth;

    const categoriesList = await categoriesService.findAll();

    let categoryExists = true;

    categoryIds.forEach((categoryId) => {
      const findCategory = categoriesList.find((category) => categoryId === category.id);

      if (!findCategory) categoryExists = false;
    });

    if (categoryExists === false) {
      return res.status(400).json({ message: '"categoryIds" not found' });
    }

    const newPost = await blogPostsService.create(title, content, categoryIds, userId);

    return res.status(201).json(newPost);
  } catch (e) {
    return err;
  }
};

const findAll = async (req, res) => {
  try {
    const userId = req.auth;

    const posts = await blogPostsService.findAll(userId);

    return res.status(200).json(posts);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const findById = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await blogPostsService.findById(id);

    if (!post) {
      return res.status(404).json({ message: 'Post does not exist' });
    }

    return res.status(200).json(post);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const update = async (req, res) => {
  try {
    if (req.body.categoryIds) {
      return res.status(400).json({ message: 'Categories cannot be edited' });
    }

    const { id } = req.params;
    const userId = req.auth;
    const post = await blogPostsService.update(userId, id, req.body);

    if (post.status) {
      return res.status(post.status).json({ message: post.message });
    }

    return res.status(200).json(post);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.auth;

    const error = await blogPostsService.destroy(userId, id);

    if (error) {
      return res.status(error.status).json({ message: error.message });
    }

    return res.status(204).end();
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  create,
  findAll,
  findById,
  destroy,
  update,
};
