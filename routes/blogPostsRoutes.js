const express = require('express');

const blogPostsController = require('../controllers/blogPostsController');
const validator = require('../middlewares/validator');
const { create } = require('../schemas/blogPostsSchemas');
const { authToken } = require('../middlewares/authMiddleware');
// const blogPost = require('../middlewares/blogPostMiddlware');

const router = express.Router();

router.post(
  '/',
  authToken,
  validator(create),
  // blogPost.validateCategories,
  blogPostsController.create,
);

// router.get('/', authToken, blogPostsController.findAll);

module.exports = router;
