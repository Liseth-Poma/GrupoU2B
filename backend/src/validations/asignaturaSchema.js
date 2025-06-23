const Joi = require("joi");

const schema = Joi.object({
  id: Joi.string().required(),
  nombre: Joi.string().required(),
  codigo: Joi.string().required(),
  docenteId: Joi.string().required(),
});

module.exports.validateAsignatura = (data) => schema.validate(data);
