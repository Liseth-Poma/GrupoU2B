const {
  putItem,
  getItem,
  deleteItem,
  queryByTipo,
} = require("../models/dynamoClient");

module.exports.crearPractica = async (data) => {
  const item = {
    PK: `PRACTICA#${data.id}`,
    SK: "META",
    Tipo: "Practica",
    nombre: data.nombre,
    fecha: data.fecha,
    parcialId: data.parcialId,
    laboratorioId: data.laboratorioId,
  };
  await putItem(item);
  return { mensaje: "Práctica creada exitosamente" };
};

module.exports.obtenerPracticas = async () => {
  return await queryByTipo("Practica");
};

module.exports.obtenerPracticaPorId = async (id) => {
  return await getItem(`PRACTICA#${id}`, "META");
};

module.exports.actualizarPractica = async (id, data) => {
  const item = {
    PK: `PRACTICA#${id}`,
    SK: "META",
    Tipo: "Practica",
    nombre: data.nombre,
    fecha: data.fecha,
    parcialId: data.parcialId,
    laboratorioId: data.laboratorioId,
  };
  await putItem(item); // sobrescribe el item
  return { mensaje: "Práctica actualizada exitosamente" };
};

module.exports.eliminarPractica = async (id) => {
  await deleteItem(`PRACTICA#${id}`, "META");
};
