const {
  putItem,
  getItem,
  deleteItem,
  queryByTipo,
} = require("../models/dynamoClient");

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
  return { mensaje: "Usuario creado exitosamente" };
};

module.exports.obtenerUsuarios = async () => {
  return await queryByTipo("Usuario");
};

module.exports.obtenerUsuarioPorId = async (id) => {
  return await getItem(`USU#${id}`, "META");
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
  return { mensaje: "Usuario actualizado exitosamente" };
};

module.exports.eliminarUsuario = async (id) => {
  await deleteItem(`USU#${id}`, "META");
};
