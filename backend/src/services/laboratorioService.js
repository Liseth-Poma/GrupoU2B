const {
  putItem,
  getItem,
  deleteItem,
  queryByTipo,
} = require("../models/dynamoClient");

module.exports.crearLaboratorio = async (data) => {
  const item = {
    PK: `LAB#${data.id}`,
    SK: "META",
    Tipo: "Laboratorio",
    nombre: data.nombre,
    ubicacion: data.ubicacion,
    equipos: data.equipos,
  };
  await putItem(item);
  return { mensaje: "Laboratorio creado exitosamente" };
};

module.exports.obtenerLaboratorios = async () => {
  return await queryByTipo("Laboratorio");
};

module.exports.obtenerLaboratorioPorId = async (id) => {
  return await getItem(`LAB#${id}`, "META");
};

module.exports.actualizarLaboratorio = async (id, data) => {
  const item = {
    PK: `LAB#${id}`,
    SK: "META",
    Tipo: "Laboratorio",
    nombre: data.nombre,
    ubicacion: data.ubicacion,
    equipos: data.equipos,
  };
  await putItem(item); // sobrescribe el item
  return { mensaje: "Laboratorio actualizado exitosamente" };
};

module.exports.eliminarLaboratorio = async (id) => {
  const pk = `LAB#${id}`;
  const sk = "META";

  const item = await getItem(pk, sk);

  if (!item) {
    const error = new Error("Laboratorio no encontrado");
    error.statusCode = 404;
    throw error;
  }

  await deleteItem(pk, sk);
  return { mensaje: "Laboratorio eliminado correctamente" };
};
