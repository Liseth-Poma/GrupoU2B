"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PracticasEstudiante() {
  const [practicas, setPracticas] = useState([]);

  useEffect(() => {
    axios.get("/api/practicas").then((res) => setPracticas(res.data));
  }, []);

  return (
    <section>
      <h2 className="text-2xl font-semibold text-green-700 mb-4">🧪 Prácticas</h2>
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-green-100 text-left text-sm font-semibold text-green-800">
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">Nombre</th>
            </tr>
          </thead>
          <tbody>
            {practicas.map((p: any) => (
              <tr key={p.id} className="border-t text-sm text-gray-700 hover:bg-gray-50">
                <td className="py-2 px-4">{p.PK}</td>
                <td className="py-2 px-4">{p.nombre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
