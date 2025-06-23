const Joi = require("joi");

const schema = Joi.object({
  id: Joi.string().required(),
  nombre: Joi.string().required(),
  correo: Joi.string().email().required(),
  rol: Joi.string().valid("docente", "estudiante", "encargado").required(),
});

module.exports.validateUsuario = (data) => schema.validate(data);
