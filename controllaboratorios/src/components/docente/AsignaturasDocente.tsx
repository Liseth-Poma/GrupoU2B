"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function AsignaturasDocente() {
  const [asignaturas, setAsignaturas] = useState([]);

  useEffect(() => {
    axios.get("/api/asignaturas").then((res) => setAsignaturas(res.data));
  }, []);

  return (
    <section className="bg-white rounded-xl shadow-md p-6 border border-green-200">
      <h2 className="text-2xl font-semibold text-green-700 mb-4">📚 Asignaturas</h2>
      <ul className="divide-y divide-gray-200 max-h-64 overflow-y-auto">
        {asignaturas.map((a: any) => (
          <li
            key={a.id}
            className="py-3 px-4 hover:bg-green-50 cursor-pointer rounded-md transition"
          >
            {a.nombre}
          </li>
        ))}
      </ul>
    </section>
  );
}
