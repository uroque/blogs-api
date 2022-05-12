const blogPostsService = require('../services/blogPostsService');
const categoriesService = require('../services/categoriesService');

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
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  create,
};
