"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AsignaturasEstudiante() {
  const [asignaturas, setAsignaturas] = useState([]);

  useEffect(() => {
    axios.get("/api/asignaturas").then((res) => setAsignaturas(res.data.asignaturas));
  }, []);

  return (
    <section>
      <h2 className="text-2xl font-semibold text-green-700 mb-4">📚 Asignaturas</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {asignaturas.map((a: any) => (
          <div key={a.id} className="bg-white rounded-xl shadow-md p-4 border hover:shadow-lg transition">
            <h3 className="text-lg font-medium text-gray-800">{a.nombre}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
