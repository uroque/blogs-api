const Joi = require('joi');

const createUser = Joi.object({
  displayName: Joi.string().min(8).messages({
    'string.min': '400|"displayName" length must be at least 8 characters long',
  }),
  email: Joi.string().required().email().messages({
    'string.email': '400|"email" must be a valid email',
    'string.required': '400|"email" is required',
  }),
  password: Joi.string().required().min(6).messages({
    'string.min': '422|"password" length must be at least 6 characters long',
    'string.required': '400|"password" is required',
  }),
});

module.exports = { createUser };
