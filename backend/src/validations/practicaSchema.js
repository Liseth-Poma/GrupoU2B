const Joi = require("joi");

const schema = Joi.object({
  id: Joi.string().required(),
  nombre: Joi.string().required(),
  fecha: Joi.string().isoDate().required(),
  // parcialId: Joi.string().required(),
  laboratorioId: Joi.string().required(),
  docenteId: Joi.string().required(),
});

module.exports.validatePractica = (data) => schema.validate(data);
