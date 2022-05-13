const UserService = require('../services/userService');

const create = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const newUser = await UserService.create({ displayName, email, password, image });

    return res.status(201).json(newUser);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const findAll = async (_req, res) => {
  try {
    const usersList = await UserService.findAll();
    return res.status(200).json(usersList);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const findById = async (req, res) => {
  try {
    const id = req.params;
    const foundUser = await UserService.findById(id);

    if (!foundUser) {
      return res.status(404).json({ message: 'User does not exist' });
    }

    return res.status(200).json(foundUser);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const destroy = async (req, res) => {
  const userId = req.auth;

  await UserService.destroy(userId);

  return res.status(204).end();
};

module.exports = {
  create,
  findAll,
  findById,
  destroy,
};
