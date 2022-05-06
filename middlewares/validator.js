const validator = (schema) => (req, res, next) => {
  let error;
  if (req.body[0]) {
    req.body.forEach((entry) => {
      ({ error } = schema.validate(entry));
    });
  } else {
    ({ error } = schema.validate(req.body));
  }
  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(code).json({ message });
  }
  next();
};

module.exports = validator;
