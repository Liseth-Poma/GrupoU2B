const {
  putItem,
  getItem,
  deleteItem,
  queryByTipo,
} = require("../models/dynamoClient");

module.exports.crearParcial = async (data) => {
  const item = {
    PK: `ASG#${data.asignaturaId}`,
    SK: `PARCIAL#${data.id}`,
    Tipo: "Parcial",
    nombre: data.nombre,
    fechaInicio: data.fechaInicio,
  };

  // Agregar opcionalmente idestudiante y nota si existen
  if (data.idestudiante) item.idestudiante = data.idestudiante;
  if (data.nota) item.nota = data.nota;

  await putItem(item);
  return { mensaje: "Parcial creado exitosamente" };
};

module.exports.obtenerParciales = async () => {
  return await queryByTipo("Parcial");
};

module.exports.obtenerParcialPorId = async (asignaturaId, parcialId) => {
  return await getItem(`ASG#${asignaturaId}`, `PARCIAL#${parcialId}`);
};

module.exports.actualizarParcial = async (asignaturaId, parcialId, data) => {
  const item = {
    PK: `ASG#${asignaturaId}`,
    SK: `PARCIAL#${parcialId}`,
    Tipo: "Parcial",
    nombre: data.nombre,
    fechaInicio: data.fechaInicio,
  };

  if (data.idestudiante) item.idestudiante = data.idestudiante;
  if (data.nota) item.nota = data.nota;

  await putItem(item);
  return { mensaje: "Parcial actualizado exitosamente" };
};

module.exports.eliminarParcial = async (asignaturaId, parcialId) => {
  await deleteItem(`ASG#${asignaturaId}`, `PARCIAL#${parcialId}`);
};
