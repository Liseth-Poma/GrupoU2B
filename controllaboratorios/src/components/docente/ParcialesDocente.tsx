"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function ParcialesDocente() {
  const [parciales, setParciales] = useState([]);

  useEffect(() => {
    axios.get("/api/parciales").then((res) => setParciales(res.data));
  }, []);

  return (
    <section className="bg-white rounded-xl shadow-md p-6 border border-green-200">
      <h2 className="text-2xl font-semibold text-green-700 mb-4">📝 Parciales</h2>
      <ul className="divide-y divide-gray-200 max-h-64 overflow-y-auto">
        {parciales.map((p: any) => (
          <li
            key={p.id}
            className="py-3 px-4 hover:bg-green-50 cursor-pointer rounded-md transition"
          >
            {p.nombre}
          </li>
        ))}
      </ul>
    </section>
  );
}
