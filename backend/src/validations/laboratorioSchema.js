const Joi = require("joi");

const schema = Joi.object({
  id: Joi.string().required(),
  nombre: Joi.string().required(),
  ubicacion: Joi.string().required(),
  equipos: Joi.array().items(Joi.string()).required(),
});

module.exports.validateLaboratorio = (data) => schema.validate(data);
