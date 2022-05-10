const express = require('express');
const userController = require('../controllers/userController');
const { authToken } = require('../middlewares/authMiddleware');
const validator = require('../middlewares/validator');
const { createUser } = require('../schemas/userSchemas');
const { emailExists } = require('../middlewares/userMiddlewares');

const router = express.Router();

router.post('/', validator(createUser), emailExists, userController.create);

router.get('/', authToken, userController.findAll);

router.get('/:id', authToken, userController.findById);

module.exports = router;
