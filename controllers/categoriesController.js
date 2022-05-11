const CategoriesService = require('../services/categoriesService');

const create = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json();
    }

    const createdCategory = await CategoriesService.create(name);

    return res.status(201).json(createdCategory);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  create,
};
