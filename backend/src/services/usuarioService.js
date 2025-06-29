const {
  putItem,
  getItem,
  deleteItem,
  queryByTipo,
} = require("../models/dynamoClient");

// Función helper para transformar los datos de DynamoDB al formato del frontend
const transformarUsuario = (item) => {
  if (!item) return null;

  return {
    id: item.PK.replace("USU#", ""), // Remover el prefijo USU#
    nombre: item.nombre,
    correo: item.correo,
    rol: item.rol, // "docente", "estudiante", "encargado"
  };
};

// Función helper para transformar múltiples usuarios
const transformarUsuarios = (items) => {
  return items.map(transformarUsuario);
};

module.exports.crearUsuario = async (data) => {
  const item = {
    PK: `USU#${data.id}`,
    SK: "META",
    Tipo: "Usuario",
    nombre: data.nombre,
    correo: data.correo,
    rol: data.rol, // "docente", "estudiante", "encargado"
  };
  await putItem(item);

  return {
    mensaje: "Usuario creado exitosamente",
    usuario: transformarUsuario(item),
  };
};

module.exports.obtenerUsuarios = async () => {
  const items = await queryByTipo("Usuario");
  return transformarUsuarios(items);
};

module.exports.obtenerUsuarioPorId = async (id) => {
  const item = await getItem(`USU#${id}`, "META");
  return transformarUsuario(item);
};

module.exports.actualizarUsuario = async (id, data) => {
  const item = {
    PK: `USU#${id}`,
    SK: "META",
    Tipo: "Usuario",
    nombre: data.nombre,
    correo: data.correo,
    rol: data.rol,
  };
  await putItem(item); // sobrescribe el item

  return {
    mensaje: "Usuario actualizado exitosamente",
    usuario: transformarUsuario(item),
  };
};

module.exports.eliminarUsuario = async (id) => {
  await deleteItem(`USU#${id}`, "META");
};
