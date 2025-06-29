"use client";

import ReporteFinalLaboratorio from "@/components/encargado/reporteLaboratorio";

export default function PanelEncargado() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
          👨‍🔧 Panel del Encargado de Laboratorio
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Consulta los reportes de uso de equipos por semana o mes.
        </p>

        <ReporteFinalLaboratorio />
      </div>
    </main>
  );
}
