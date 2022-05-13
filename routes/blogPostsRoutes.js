const express = require('express');

const blogPostsController = require('../controllers/blogPostsController');
const validator = require('../middlewares/validator');
const { create, update } = require('../schemas/blogPostsSchemas');
const { authToken } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authToken, validator(create), blogPostsController.create);

router.get('/', authToken, blogPostsController.findAll);

router.get('/:id', authToken, blogPostsController.findById);

router.put('/:id', authToken, validator(update), blogPostsController.update);

router.delete('/:id', authToken, blogPostsController.destroy);

module.exports = router;
