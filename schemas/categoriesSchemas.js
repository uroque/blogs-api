const Joi = require('joi');

const createCategory = Joi.object({
  name: Joi.string().required().messages({
    'any.required': '400|"name" is required',
  }),
});

module.exports = { createCategory };
