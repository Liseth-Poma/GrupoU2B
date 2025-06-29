const {
  putItem,
  getItem,
  deleteItem,
  queryByTipo,
} = require("../models/dynamoClient");

// Función helper para transformar los datos de DynamoDB al formato del frontend
const transformarLaboratorio = (item) => {
  if (!item) return null;

  return {
    id: item.PK.replace("LAB#", ""), // Remover el prefijo LAB#
    nombre: item.nombre,
    ubicacion: item.ubicacion,
    equipos: item.equipos,
  };
};

// Función helper para transformar múltiples laboratorios
const transformarLaboratorios = (items) => {
  return items.map(transformarLaboratorio);
};

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

  return {
    mensaje: "Laboratorio creado exitosamente",
    laboratorio: transformarLaboratorio(item),
  };
};

module.exports.obtenerLaboratorios = async () => {
  const items = await queryByTipo("Laboratorio");
  return transformarLaboratorios(items);
};

module.exports.obtenerLaboratorioPorId = async (id) => {
  const item = await getItem(`LAB#${id}`, "META");
  return transformarLaboratorio(item);
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

  return {
    mensaje: "Laboratorio actualizado exitosamente",
    laboratorio: transformarLaboratorio(item),
  };
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
