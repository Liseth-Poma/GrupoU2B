"use client";

import AsignaturasEstudiante from "@/components/estudiante/AsignaturasEstudiante";
import ParcialesEstudiante from "@/components/estudiante/ParcialesEstudiante";
import PracticasEstudiante from "@/components/estudiante/PracticasEstudiante";
import UsoEquiposForm from "@/components/estudiante/UsoEquiposForm";

export default function EstudianteDashboard() {
  return (
    <main className="min-h-screen bg-green-100 py-12 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg p-8">
          <h1 className="text-4xl font-extrabold text-center text-green-700 mb-6">
            🎓 Panel del Estudiante
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow p-6">
            <AsignaturasEstudiante />
          </div>

          <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow p-6">
            <ParcialesEstudiante />
          </div>

          <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow p-6">
            <PracticasEstudiante />
          </div>

          <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow p-6">
            <UsoEquiposForm />
          </div>
        </div>
      </div>
    </main>
  );
}
