const Joi = require("joi");

const schema = Joi.object({
  id: Joi.string().required(),
  nombre: Joi.string().required(),
  fechaInicio: Joi.string().isoDate().required(),
  asignaturaId: Joi.string().required(),
  idestudiante: Joi.string().optional(),
  nota: Joi.number().optional(),
});

module.exports.validateParcial = (data) => schema.validate(data);
