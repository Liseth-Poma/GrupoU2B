const {
  putItem,
  getItem,
  deleteItem,
  queryByTipo,
} = require("../models/dynamoClient");

module.exports.crearAsignatura = async (data) => {
  const item = {
    PK: `ASG#${data.id}`,
    SK: "META",
    Tipo: "Asignatura",
    nombre: data.nombre,
    codigo: data.codigo,
    docenteId: data.docenteId,
  };
  await putItem(item);
  return { mensaje: "Asignatura creada exitosamente" };
};

module.exports.obtenerAsignaturas = async () => {
  return await queryByTipo("Asignatura");
};

module.exports.obtenerAsignaturaPorId = async (id) => {
  return await getItem(`ASG#${id}`, "META");
};

module.exports.actualizarAsignatura = async (id, data) => {
  const item = {
    PK: `ASG#${id}`,
    SK: "META",
    Tipo: "Asignatura",
    nombre: data.nombre,
    codigo: data.codigo,
    docenteId: data.docenteId,
  };
  await putItem(item); // sobrescribe el item
  return { mensaje: "Asignatura actualizada exitosamente" };
};

module.exports.eliminarAsignatura = async (id) => {
  await deleteItem(`ASG#${id}`, "META");
};
