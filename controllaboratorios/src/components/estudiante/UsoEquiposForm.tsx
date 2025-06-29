"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { parseCookies } from "nookies";

export default function UsoEquiposForm() {
  const [practicaId, setPracticaId] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [horaInicio, setHoraInicio] = useState("");
  const [horaFin, setHoraFin] = useState("");

  const { UserId } = parseCookies();

  // Si usas datetime-local, el valor suele ser '2025-06-28T17:45'
  const formatDateTime = (dateTime: string) => {
    if (!dateTime) return "";
    return dateTime.length === 16 ? dateTime + ":00" : dateTime;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post("/api/uso-equipos", {
        practicaId,
        estudianteId: UserId,
        equipo: descripcion,
        horaInicio: formatDateTime(horaInicio),
        horaFin: formatDateTime(horaFin),
      });
      alert("Uso registrado exitosamente");
      setDescripcion("");
      setPracticaId("");
      setHoraInicio("");
      setHoraFin("");
    } catch (error) {
      alert("Error al registrar uso");
    }
  };


  return (
    <section>
      <h2 className="text-2xl font-semibold text-green-700 mb-4">💻 Registrar uso de equipos</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-md p-6 border space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">ID de Práctica</label>
          <input
            type="text"
            value={practicaId}
            onChange={(e) => setPracticaId(e.target.value)}
            className="w-full mt-1 border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Descripción</label>
          <input
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="w-full mt-1 border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Fecha y hora de inicio</label>
          <input
            type="datetime-local"
            value={horaInicio}
            onChange={(e) => setHoraInicio(e.target.value)}
            className="w-full mt-1 border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Fecha y hora de fin</label>
          <input
            type="datetime-local"
            value={horaFin}
            onChange={(e) => setHoraFin(e.target.value)}
            className="w-full mt-1 border p-2 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Registrar
        </button>
      </form>
    </section>
  );
}
