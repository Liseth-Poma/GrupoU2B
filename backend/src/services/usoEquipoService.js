const {
  putItem,
  getItem,
  deleteItem,
  queryByTipo,
} = require("../models/dynamoClient");

// Función helper para transformar los datos de DynamoDB al formato del frontend
const transformarUsoEquipo = (item) => {
  if (!item) return null;

  return {
    estudianteId: item.PK.replace("EST#", ""), // Remover el prefijo EST#
    practicaId: item.SK.replace("PRACTICA#", ""), // Remover el prefijo PRACTICA#
    equipo: item.equipo,
    horaInicio: item.horaInicio,
    horaFin: item.horaFin,
  };
};

// Función helper para transformar múltiples usos de equipo
const transformarUsosEquipo = (items) => {
  return items.map(transformarUsoEquipo);
};

module.exports.crearUsoEquipo = async (data) => {
  const item = {
    PK: `EST#${data.estudianteId}`,
    SK: `PRACTICA#${data.practicaId}`,
    Tipo: "UsoEquipo",
    equipo: data.equipo,
    horaInicio: data.horaInicio,
    horaFin: data.horaFin,
  };
  await putItem(item);

  return {
    mensaje: "Uso de equipo registrado exitosamente",
    usoEquipo: transformarUsoEquipo(item),
  };
};

module.exports.obtenerUsosEquipo = async () => {
  const items = await queryByTipo("UsoEquipo");
  return transformarUsosEquipo(items);
};

module.exports.obtenerUsoEquipoPorId = async (estudianteId, practicaId) => {
  const item = await getItem(`EST#${estudianteId}`, `PRACTICA#${practicaId}`);
  return transformarUsoEquipo(item);
};

module.exports.actualizarUsoEquipo = async (estudianteId, practicaId, data) => {
  const item = {
    PK: `EST#${estudianteId}`,
    SK: `PRACTICA#${practicaId}`,
    Tipo: "UsoEquipo",
    equipo: data.equipo,
    horaInicio: data.horaInicio,
    horaFin: data.horaFin,
  };
  await putItem(item); // sobrescribe el item

  return {
    mensaje: "Uso de equipo actualizado exitosamente",
    usoEquipo: transformarUsoEquipo(item),
  };
};

module.exports.eliminarUsoEquipo = async (estudianteId, practicaId) => {
  await deleteItem(`EST#${estudianteId}`, `PRACTICA#${practicaId}`);
};
