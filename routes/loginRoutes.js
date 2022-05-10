const express = require('express');
const validator = require('../middlewares/validator');
const loginController = require('../controllers/loginController');
const { loginSchemas } = require('../schemas/loginSchemas');
const { emptyEmail, emptyPassword } = require('../middlewares/loginMiddleware');

const router = express.Router();

router.post('/', emptyEmail, emptyPassword, validator(loginSchemas), loginController.Login);

module.exports = router;
