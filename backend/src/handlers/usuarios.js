require("dotenv").config();
const { validateUsuario } = require("../validations/usuarioSchema");
const servicio = require("../services/usuarioService");
const response = require("../utils/response");

module.exports.create = async (event) => {
  try {
    const data = JSON.parse(event.body);
    const { error } = validateUsuario(data);
    if (error) return response(400, { mensaje: error.details[0].message });

    const result = await servicio.crearUsuario(data);
    return response(201, result);
  } catch (err) {
    return response(500, {
      error: "Error al crear usuario",
      detalle: err.message,
    });
  }
};

module.exports.getAll = async () => {
  try {
    const result = await servicio.obtenerUsuarios();
    return response(200, result);
  } catch (err) {
    return response(500, {
      error: "Error al obtener usuarios",
      detalle: err.message,
    });
  }
};

module.exports.getById = async (event) => {
  try {
    const id = event.pathParameters.id;
    const result = await servicio.obtenerUsuarioPorId(id);
    if (!result) return response(404, { mensaje: "Usuario no encontrado" });
    return response(200, result);
  } catch (err) {
    return response(500, {
      error: "Error al obtener usuario",
      detalle: err.message,
    });
  }
};

module.exports.update = async (event) => {
  try {
    const id = event.pathParameters.id;
    const data = JSON.parse(event.body);
    const { error } = validateUsuario(data);
    if (error) return response(400, { mensaje: error.details[0].message });

    const result = await servicio.actualizarUsuario(id, data);
    return response(200, result);
  } catch (err) {
    return response(500, {
      error: "Error al actualizar usuario",
      detalle: err.message,
    });
  }
};

module.exports.delete = async (event) => {
  try {
    const id = event.pathParameters.id;
    await servicio.eliminarUsuario(id);
    return response(200, { mensaje: "Usuario eliminado correctamente" });
  } catch (err) {
    return response(500, {
      error: "Error al eliminar usuario",
      detalle: err.message,
    });
  }
};
