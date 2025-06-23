const Joi = require("joi");

const schema = Joi.object({
  estudianteId: Joi.string().required(),
  practicaId: Joi.string().required(),
  equipo: Joi.string().required(),
  horaInicio: Joi.string().isoDate().required(),
  horaFin: Joi.string().isoDate().required(),
});

module.exports.validateUsoEquipo = (data) => schema.validate(data);
