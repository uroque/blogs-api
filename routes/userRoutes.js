const express = require('express');
const userController = require('../controllers/userController');
// const validator = require('../middlewares/validator');
// const createUser = require('../schemas/userSchemas');

const router = express.Router();

router.post('/', userController.createUser);

module.exports = router;
