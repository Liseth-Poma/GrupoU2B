const {
  putItem,
  getItem,
  deleteItem,
  queryByTipo,
} = require("../models/dynamoClient");

// Función helper para transformar los datos de DynamoDB al formato del frontend
const transformarParcial = (item) => {
  if (!item) return null;

  return {
    id: item.SK.replace("PARCIAL#", ""), // Remover el prefijo PARCIAL#
    asignaturaId: item.PK.replace("ASG#", ""), // Remover el prefijo ASG#
    nombre: item.nombre,
    fechaInicio: item.fechaInicio,
    idestudiante: item.idestudiante,
    nota: item.nota,
  };
};

// Función helper para transformar múltiples parciales
const transformarParciales = (items) => {
  return items.map(transformarParcial);
};

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

  return {
    mensaje: "Parcial creado exitosamente",
    parcial: transformarParcial(item),
  };
};

module.exports.obtenerParciales = async () => {
  const items = await queryByTipo("Parcial");
  return transformarParciales(items);
};

module.exports.obtenerParcialPorId = async (asignaturaId, parcialId) => {
  const item = await getItem(`ASG#${asignaturaId}`, `PARCIAL#${parcialId}`);
  return transformarParcial(item);
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

  return {
    mensaje: "Parcial actualizado exitosamente",
    parcial: transformarParcial(item),
  };
};

module.exports.eliminarParcial = async (asignaturaId, parcialId) => {
  await deleteItem(`ASG#${asignaturaId}`, `PARCIAL#${parcialId}`);
};
