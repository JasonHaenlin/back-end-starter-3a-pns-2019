const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

module.exports = new BaseModel('Ticket', {
  title: Joi.string().required(),
  date: Joi.date().required(),
  studentId: Joi.array().items(Joi.number().integer().required()).required(),
  description: Joi.string(),
  major: Joi.string().required(),
  archived: Joi.boolean().required(),
});
