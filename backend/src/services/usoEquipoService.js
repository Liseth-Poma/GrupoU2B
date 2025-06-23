const {
  putItem,
  getItem,
  deleteItem,
  queryByTipo,
} = require("../models/dynamoClient");

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
  return { mensaje: "Uso de equipo registrado exitosamente" };
};

module.exports.obtenerUsosEquipo = async () => {
  return await queryByTipo("UsoEquipo");
};

module.exports.obtenerUsoEquipoPorId = async (estudianteId, practicaId) => {
  return await getItem(`EST#${estudianteId}`, `PRACTICA#${practicaId}`);
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
  return { mensaje: "Uso de equipo actualizado exitosamente" };
};

module.exports.eliminarUsoEquipo = async (estudianteId, practicaId) => {
  await deleteItem(`EST#${estudianteId}`, `PRACTICA#${practicaId}`);
};
