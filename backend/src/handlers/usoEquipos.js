require("dotenv").config();
const { validateUsoEquipo } = require("../validations/usoEquipoSchema");
const servicio = require("../services/usoEquipoService");
const response = require("../utils/response");

module.exports.create = async (event) => {
  try {
    const data = JSON.parse(event.body);
    const { error } = validateUsoEquipo(data);
    if (error) return response(400, { mensaje: error.details[0].message });
    const result = await servicio.crearUsoEquipo(data);
    return response(201, result);
  } catch (err) {
    return response(500, {
      error: "Error al registrar uso de equipo",
      detalle: err.message,
    });
  }
};

module.exports.getAll = async () => {
  try {
    const result = await servicio.obtenerUsosEquipo();
    return response(200, result);
  } catch (err) {
    return response(500, {
      error: "Error al obtener registros de uso",
      detalle: err.message,
    });
  }
};

module.exports.getById = async (event) => {
  try {
    const estudianteId = event.pathParameters.estudianteId;
    const practicaId = event.pathParameters.practicaId;
    const result = await servicio.obtenerUsoEquipoPorId(
      estudianteId,
      practicaId
    );
    if (!result)
      return response(404, {
        mensaje: "Registro de uso de equipo no encontrado",
      });
    return response(200, result);
  } catch (err) {
    return response(500, {
      error: "Error al obtener registro de uso de equipo",
      detalle: err.message,
    });
  }
};

module.exports.update = async (event) => {
  try {
    const estudianteId = event.pathParameters.estudianteId;
    const practicaId = event.pathParameters.practicaId;
    const data = JSON.parse(event.body);
    const { error } = validateUsoEquipo(data);
    if (error) return response(400, { mensaje: error.details[0].message });
    const result = await servicio.actualizarUsoEquipo(
      estudianteId,
      practicaId,
      data
    );
    return response(200, result);
  } catch (err) {
    return response(500, {
      error: "Error al actualizar uso de equipo",
      detalle: err.message,
    });
  }
};

module.exports.delete = async (event) => {
  try {
    const estudianteId = event.pathParameters.estudianteId;
    const practicaId = event.pathParameters.practicaId;
    await servicio.eliminarUsoEquipo(estudianteId, practicaId);
    return response(200, {
      mensaje: "Registro de uso de equipo eliminado correctamente",
    });
  } catch (err) {
    return response(500, {
      error: "Error al eliminar registro de uso de equipo",
      detalle: err.message,
    });
  }
};
