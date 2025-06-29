"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface Estudiante {
  id: string;
  nombre: string;
  correo: string;
  rol: string;
  fechaInicio: string;
  fechaFin: string;
}

interface Practica {
  id: string;
  nombre: string;
  fecha: string;
  laboratorioId: string;
  docenteId: string;
}

interface Docente {
  id: string;
  nombre: string;
  correo: string;
  rol: string;
}

interface Laboratorio {
  id: string;
  nombre: string;
  ubicacion: string;
  equipos: string[];
}

interface Reporte {
  practica: Practica;
  docente: Docente;
  laboratorio: Laboratorio;
  estudiantes: Estudiante[];
}

export default function ReporteFinalLaboratorio() {
  const [reportes, setReportes] = useState<Reporte[]>([]);

  useEffect(() => {
    axios.get("/api/uso-equipos").then((res) => {
      setReportes(res.data);
    });
  }, []);

  return (
    <main className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
        📊 Reporte Final de Laboratorios
      </h1>

      <div className="grid gap-8">
        {reportes.map((reporte, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-6 border">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              🧪 {reporte.practica?.nombre}
            </h2>

            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div>
                <h3 className="font-semibold text-gray-700">📅 Fecha de práctica</h3>
                <p>{reporte.practica?.fecha}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">👨‍🏫 Docente</h3>
                <p>{reporte.docente?.nombre} ({reporte.docente?.correo})</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">🏢 Laboratorio</h3>
                <p>{reporte.laboratorio?.nombre} - {reporte.laboratorio?.ubicacion}</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mt-4 mb-2">💻 Equipos Disponibles</h3>
              <ul className="list-disc list-inside text-gray-600">
                {reporte.laboratorio?.equipos.map((eq, idx) => (
                  <li key={idx}>{eq}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">👨‍🎓 Estudiantes Participantes</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border rounded">
                  <thead className="bg-green-200 text-gray-700">
                    <tr>
                      <th className="p-2">ID</th>
                      <th className="p-2">Nombre</th>
                      <th className="p-2">Correo</th>
                      <th className="p-2">Inicio</th>
                      <th className="p-2">Fin</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reporte.estudiantes.map((est, i) => (
                      <tr key={i} className="border-t">
                        <td className="p-2">{est?.id}</td>
                        <td className="p-2">{est?.nombre}</td>
                        <td className="p-2">{est?.correo}</td>
                        <td className="p-2">{new Date(est?.fechaInicio).toLocaleString()}</td>
                        <td className="p-2">{new Date(est?.fechaFin).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
