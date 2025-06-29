"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ParcialesEstudiante() {
  const [parciales, setParciales] = useState([]);

  useEffect(() => {
    axios.get("/api/parciales").then((res) => setParciales(res.data));
  }, []);

  return (
    <section>
      <h2 className="text-2xl font-semibold text-green-700 mb-4">📝 Parciales</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {parciales.map((p: any, index: number) => (
          <div key={`${p.id}-${index}`} className="bg-white rounded-xl shadow-md p-4 border hover:shadow-lg transition">
            <p className="text-gray-800">{p.nombre}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
