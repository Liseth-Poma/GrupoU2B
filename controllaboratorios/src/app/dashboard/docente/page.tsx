"use client";

import AsignaturasDocente from "@/components/docente/AsignaturasDocente";
import ParcialesDocente from "@/components/docente/ParcialesDocente";
import CrearPracticaForm from "@/components/docente/CrearPracticaForm";

export default function PanelDocente() {
  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-4xl font-extrabold text-green-800 mb-8 text-center">
        Panel del Docente
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-6">
        <AsignaturasDocente />
        <ParcialesDocente />
        <CrearPracticaForm />
      </div>
    </main>
  );
}
