const {
  putItem,
  getItem,
  deleteItem,
  queryByTipo,
} = require("../models/dynamoClient");

// Función helper para transformar los datos de DynamoDB al formato del frontend
const transformarAsignatura = (item) => {
  if (!item) return null;

  return {
    id: item.PK.replace("ASG#", ""), // Remover el prefijo ASG#
    nombre: item.nombre,
    codigo: item.codigo,
    docenteId: item.docenteId,
    // Incluir otros campos si los hay
  };
};

// Función helper para transformar múltiples asignaturas
const transformarAsignaturas = (items) => {
  return items.map(transformarAsignatura);
};

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

  // Retornar la asignatura creada sin prefijos
  return {
    mensaje: "Asignatura creada exitosamente",
    asignatura: transformarAsignatura(item),
  };
};

module.exports.obtenerAsignaturas = async () => {
  const items = await queryByTipo("Asignatura");
  // Transformar todos los items antes de retornarlos
  return transformarAsignaturas(items);
};

module.exports.obtenerAsignaturaPorId = async (id) => {
  const item = await getItem(`ASG#${id}`, "META");
  // Transformar el item antes de retornarlo
  return transformarAsignatura(item);
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

  return {
    mensaje: "Asignatura actualizada exitosamente",
    asignatura: transformarAsignatura(item),
  };
};

module.exports.eliminarAsignatura = async (id) => {
  await deleteItem(`ASG#${id}`, "META");
};
