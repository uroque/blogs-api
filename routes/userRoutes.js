const express = require('express');
const userController = require('../controllers/userController');
const validator = require('../middlewares/validator');
const { createUser } = require('../schemas/userSchemas');
const { emailExists } = require('../middlewares/userMiddlewares');

const router = express.Router();

router.post('/', validator(createUser), emailExists, userController.createUser);

module.exports = router;
