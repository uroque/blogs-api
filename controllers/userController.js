const { createUserService, findAllService } = require('../services/userService');

const create = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const newUser = await createUserService({ displayName, email, password, image });

    return res.status(201).json(newUser);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const findAll = async (_req, res) => {
  try {
    const usersList = await findAllService();
    return res.status(200).json(usersList);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  create,
  findAll,
};
