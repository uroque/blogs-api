const express = require('express');

const categoriesController = require('../controllers/categoriesController');
const validator = require('../middlewares/validator');
const { createCategory } = require('../schemas/categoriesSchemas');
const { authToken } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authToken, validator(createCategory), categoriesController.create);

// router.get('/', authToken, categoriesController.findAll);

// router.get('/:id', authToken, categoriesController.findById);

module.exports = router;
