"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { parseCookies } from "nookies";

interface Laboratorio {
  PK: string;
  nombre: string;
}

export default function CrearPracticaForm() {
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [parcialId, setParcialId] = useState("");
  const [laboratorioId, setLaboratorioId] = useState("");
  const [laboratorios, setLaboratorios] = useState<Laboratorio[]>([]);

  const { UserId } = parseCookies();
  
  useEffect(() => {
    axios.get("/api/laboratorios").then((res) => setLaboratorios(res.data));
  }, []);

  // Función para generar un ID tipo PRA10, PRA42...
  const generarPracticaId = (): string => {
    const numero = Math.floor(Math.random() * 100) + 1; // de 1 a 100
    return `PRA${numero}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const practicaId = generarPracticaId();

    try {
      await axios.post("/api/practicas", {
        id: practicaId,       // ID generado
        docenteId: UserId,
        nombre,
        fecha,
        laboratorioId,
      });

      alert(`✅ Práctica ${practicaId} creada exitosamente`);
      setNombre("");
      setFecha("");
      setLaboratorioId("");
      setParcialId("");
    } catch (err) {
      alert("❌ Error al crear práctica");
    }
  };

  return (
    <section className="bg-white rounded-xl shadow-md p-6 border border-green-200 col-span-2">
      <h2 className="text-2xl font-semibold text-green-700 mb-6 text-center">
        ➕ Crear Práctica
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          placeholder="Nombre de la práctica"
          className="border border-gray-300 p-3 rounded-md w-full focus:ring-2 focus:ring-green-500"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <input
          type="date"
          className="border border-gray-300 p-3 rounded-md w-full focus:ring-2 focus:ring-green-500"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          required
        />

        <select
          value={laboratorioId}
          onChange={(e) => setLaboratorioId(e.target.value)}
          required
          className="border border-gray-300 p-3 rounded-md w-full focus:ring-2 focus:ring-green-500"
        >
          <option value="">Seleccione un laboratorio</option>
          {laboratorios.map((lab) => (
            <option key={lab.PK} value={lab.PK}>
              {lab.nombre}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition"
        >
          Crear Práctica
        </button>
      </form>
    </section>
  );
}
