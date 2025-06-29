'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

function generateUniqueId() {
  const now = Date.now(); // milisegundos desde 1970
  const random = Math.floor(Math.random() * 10000); // número aleatorio 0-9999
  return `id_${now}_${random}`;
}

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    id: '',
    nombre: '',
    correo: '',
    rol: 'docente',
  });

  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const uniqueId = generateUniqueId();
    try {
      const res = await axios.post('/api/usuarios', {
        ...formData,
        id: uniqueId,
      });

      if (res.status === 200 || res.status === 201) {
        setMessage(`Registro exitoso. Tu ID es: ${uniqueId}`);
        setFormData({
          id: '',
          nombre: '',
          correo: '',
          rol: 'docente',
        });
      } else {
        setMessage('Error en el registro.');
      }
    } catch (err) {
      console.error(err);
      setMessage('Error en la solicitud.');
    }
  };

  const goToLogin = () => {
    router.push('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">Registro</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Correo</label>
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Rol</label>
            <select
              name="rol"
              value={formData.rol}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-gray-700"
            >
              <option value="docente">Docente</option>
              <option value="estudiante">Estudiante</option>
              <option value="encargado">Encargado</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Registrarse
          </button>
        </form>

        {message && <p className="mt-4 text-center text-sm text-red-600">{message}</p>}

        <button
          onClick={goToLogin}
          className="mt-6 w-full bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400 transition"
          type="button"
        >
          Ir a Login
        </button>
      </div>
    </div>
  );
}
