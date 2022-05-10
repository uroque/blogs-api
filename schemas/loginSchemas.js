const Joi = require('joi');

const loginSchemas = Joi.object({
  email: Joi.string().required().email().messages({
    'any.required': '400|"email" is required',
  }),
  password: Joi.string().required().messages({
    'any.required': '400|"password" is required',
  }),
});

module.exports = { loginSchemas };
