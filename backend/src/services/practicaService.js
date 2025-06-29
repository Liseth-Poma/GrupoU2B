const {
  putItem,
  getItem,
  deleteItem,
  queryByTipo,
} = require("../models/dynamoClient");

// Función helper para transformar los datos de DynamoDB al formato del frontend
const transformarPractica = (item) => {
  if (!item) return null;

  return {
    id: item.PK.replace("PRACTICA#", ""), // Remover el prefijo PRACTICA#
    nombre: item.nombre,
    fecha: item.fecha,
    parcialId: item.parcialId,
    laboratorioId: item.laboratorioId,
    docenteId: item.docenteId,
  };
};

// Función helper para transformar múltiples prácticas
const transformarPracticas = (items) => {
  return items.map(transformarPractica);
};

module.exports.crearPractica = async (data) => {
  const item = {
    PK: `PRACTICA#${data.id}`,
    SK: "META",
    Tipo: "Practica",
    nombre: data.nombre,
    fecha: data.fecha,
    parcialId: data.parcialId,
    laboratorioId: data.laboratorioId,
    docenteId: data.docenteId,
  };
  await putItem(item);

  return {
    mensaje: "Práctica creada exitosamente",
    practica: transformarPractica(item),
  };
};

module.exports.obtenerPracticas = async () => {
  const items = await queryByTipo("Practica");
  return transformarPracticas(items);
};

module.exports.obtenerPracticaPorId = async (id) => {
  const item = await getItem(`PRACTICA#${id}`, "META");
  return transformarPractica(item);
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

  return {
    mensaje: "Práctica actualizada exitosamente",
    practica: transformarPractica(item),
  };
};

module.exports.eliminarPractica = async (id) => {
  await deleteItem(`PRACTICA#${id}`, "META");
};

module.exports.listarPracticas = async () => {
  const practicas = await queryByTipo("Practica");
  const usosEquipo = await queryByTipo("UsoEquipo");
  const resultados = [];

  for (const practica of practicas) {
    const practicaId = practica.PK.replace("PRACTICA#", "");

    // Docente
    let docente = null;
    if (practica.docenteId) {
      const docenteItem = await getItem(`USU#${practica.docenteId}`, "META");
      if (docenteItem) {
        docente = {
          id: docenteItem.PK.replace("USU#", ""),
          nombre: docenteItem.nombre,
          correo: docenteItem.correo,
          rol: docenteItem.rol,
        };
      }
    }

    // Laboratorio
    let laboratorio = null;
    if (practica.laboratorioId) {
      const laboratorioItem = await getItem(
        `LAB#${practica.laboratorioId}`,
        "META"
      );
      if (laboratorioItem) {
        laboratorio = {
          id: laboratorioItem.PK.replace("LAB#", ""),
          nombre: laboratorioItem.nombre,
          ubicacion: laboratorioItem.ubicacion,
          equipos: Array.isArray(laboratorioItem.equipos)
            ? laboratorioItem.equipos.map((e) => e.S || e)
            : [],
        };
      }
    }

    // Estudiantes
    const estudiantes = [];
    for (const uso of usosEquipo) {
      if (uso.SK === `PRACTICA#${practicaId}`) {
        const estudianteId = uso.PK.replace("EST#", "");
        const estudianteItem = await getItem(`USU#${estudianteId}`, "META");
        if (estudianteItem) {
          estudiantes.push({
            id: estudianteId,
            nombre: estudianteItem.nombre,
            correo: estudianteItem.correo,
            rol: estudianteItem.rol || "estudiante",
            fechaInicio: uso.horaInicio,
            fechaFin: uso.horaFin,
          });
        }
      }
    }

    resultados.push({
      practica: {
        id: practicaId,
        nombre: practica.nombre,
        fecha: practica.fecha,
        nota: practica.nota || null,
        equipos: practica.equipos || [],
        parcialId: practica.parcialId,
        laboratorioId: practica.laboratorioId,
        docenteId: practica.docenteId,
      },
      docente: docente,
      estudiantes: estudiantes,
      laboratorio: laboratorio,
    });
  }

  return resultados;
};
