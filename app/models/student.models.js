const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

module.exports = new BaseModel('Student', {
  lastName: Joi.string().required(),
  firstName: Joi.string().required(),
  email: Joi.string().email({ minDomainAtoms: 2 }).required(),
  profilePicture: Joi.string(),
  note: Joi.string(),
});
