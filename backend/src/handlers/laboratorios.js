require("dotenv").config();
const { validateLaboratorio } = require("../validations/laboratorioSchema.js");
const servicio = require("../services/laboratorioService");
const response = require("../utils/response");

module.exports.create = async (event) => {
  try {
    const data = JSON.parse(event.body);
    const { error } = validateLaboratorio(data);
    if (error) return response(400, { mensaje: error.details[0].message });

    const result = await servicio.crearLaboratorio(data);
    return response(201, result);
  } catch (err) {
    return response(500, {
      error: "Error al crear laboratorio",
      detalle: err.message,
    });
  }
};

module.exports.getAll = async () => {
  try {
    const result = await servicio.obtenerLaboratorios();
    return response(200, result);
  } catch (err) {
    return response(500, {
      error: "Error al obtener laboratorios",
      detalle: err.message,
    });
  }
};

module.exports.getById = async (event) => {
  try {
    const id = event.pathParameters.id;
    const result = await servicio.obtenerLaboratorioPorId(id);
    if (!result) return response(404, { mensaje: "Laboratorio no encontrado" });
    return response(200, result);
  } catch (err) {
    return response(500, {
      error: "Error al obtener laboratorio",
      detalle: err.message,
    });
  }
};

module.exports.update = async (event) => {
  try {
    const id = event.pathParameters.id;
    const data = JSON.parse(event.body);
    const { error } = validateLaboratorio(data);
    if (error) return response(400, { mensaje: error.details[0].message });
    const result = await servicio.actualizarLaboratorio(id, data);
    return response(200, result);
  } catch (err) {
    return response(500, {
      error: "Error al actualizar laboratorio",
      detalle: err.message,
    });
  }
};

module.exports.delete = async (event) => {
  try {
    const id = event.pathParameters.id;
    const result = await servicio.eliminarLaboratorio(id);
    return response(200, result);
  } catch (err) {
    return response(err.statusCode || 500, {
      error: "Error al eliminar laboratorio",
      detalle: err.message,
    });
  }
};
