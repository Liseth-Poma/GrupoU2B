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
    docenteId: data.docenteId,
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

module.exports.listarPracticas = async () => {
  const practicas = await queryByTipo("Practica");
  const usosEquipo = await queryByTipo("UsoEquipo");

  const resultados = [];

  for (const practica of practicas) {
    const practicaId = practica.PK.replace("PRACTICA#", "");

    // Docente
    let docente = null;
    if (practica.docenteId) {
      docente = await getItem(`USU#${practica.docenteId}`, "META");
    }

    // Laboratorio
    let laboratorio = null;
    if (practica.laboratorioId) {
      laboratorio = await getItem(practica.laboratorioId, "META");
    }

    // Estudiantes
    const estudiantes = [];
    for (const uso of usosEquipo) {
      if (uso.SK === `PRACTICA#${practicaId}`) {
        const estudianteId = uso.PK.replace("EST#", "");
        const estudiante = await getItem(`USU#${estudianteId}`, "META");

        if (estudiante) {
          estudiantes.push({
            nombre: estudiante.nombre,
            correo: estudiante.correo,
            rol: estudiante.rol || "estudiante",
            fechaInicio: uso.horaInicio,
            fechaFin: uso.horaFin,
          });
        }
      }
    }

    resultados.push({
      practica: {
        nombre: practica.nombre,
        fecha: practica.fecha,
        nota: practica.nota || null,
        equipos: practica.equipos || [],
      },
      docente: docente
        ? {
            nombre: docente.nombre,
            correo: docente.correo,
            rol: docente.rol,
          }
        : null,
      estudiantes: estudiantes,
      laboratorio: laboratorio
        ? {
            nombre: laboratorio.nombre,
            ubicacion: laboratorio.ubicacion,
            equipos: Array.isArray(laboratorio.equipos)
              ? laboratorio.equipos.map((e) => e.S || e)
              : [],
          }
        : null,
    });
  }

  return resultados;
};
