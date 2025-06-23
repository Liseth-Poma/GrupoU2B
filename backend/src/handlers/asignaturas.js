require("dotenv").config();
const { validateAsignatura } = require("../validations/asignaturaSchema");
const servicio = require("../services/asignaturaService");
const response = require("../utils/response");

module.exports.create = async (event) => {
  try {
    const data = JSON.parse(event.body);
    const { error } = validateAsignatura(data);
    if (error) return response(400, { mensaje: error.details[0].message });

    const result = await servicio.crearAsignatura(data);
    return response(201, result);
  } catch (err) {
    return response(500, {
      error: "Error al crear asignatura",
      detalle: err.message,
    });
  }
};

module.exports.getAll = async () => {
  try {
    const result = await servicio.obtenerAsignaturas();
    return response(200, result);
  } catch (err) {
    return response(500, {
      error: "Error al obtener asignaturas",
      detalle: err.message,
    });
  }
};

module.exports.getById = async (event) => {
  try {
    const id = event.pathParameters.id;
    const result = await servicio.obtenerAsignaturaPorId(id);
    if (!result) return response(404, { mensaje: "Asignatura no encontrada" });
    return response(200, result);
  } catch (err) {
    return response(500, {
      error: "Error al obtener asignatura",
      detalle: err.message,
    });
  }
};

module.exports.update = async (event) => {
  try {
    const id = event.pathParameters.id;
    const data = JSON.parse(event.body);
    const { error } = validateAsignatura(data);
    if (error) return response(400, { mensaje: error.details[0].message });
    const result = await servicio.actualizarAsignatura(id, data);
    return response(200, result);
  } catch (err) {
    return response(500, {
      error: "Error al actualizar asignatura",
      detalle: err.message,
    });
  }
};

module.exports.delete = async (event) => {
  try {
    const id = event.pathParameters.id;
    await servicio.eliminarAsignatura(id);
    return response(200, { mensaje: "Asignatura eliminada correctamente" });
  } catch (err) {
    return response(500, {
      error: "Error al eliminar asignatura",
      detalle: err.message,
    });
  }
};
