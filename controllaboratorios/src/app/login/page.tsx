'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { setCookie } from 'nookies'; // para guardar cookies fácilmente

export default function LoginPage() {
  const [formData, setFormData] = useState({
    correo: '',
    nombre: '',
    rol: 'docente',
  });

  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.get(`/api/usuarios`);
      const usuarios = response.data;

      const usuario = usuarios.find(
        (u: any) =>
          u.correo === formData.correo &&
          u.nombre === formData.nombre &&
          u.rol === formData.rol
      );

      if (!usuario) {
        setError('Credenciales incorrectas o rol inválido');
        return;
      }

      // Guardar el ID en cookies
      setCookie(null, 'UserId', usuario.PK, {
        path: '/',
        maxAge: 60 * 60 * 24, // 1 día
      });

      // Redirigir según el rol
      switch (usuario.rol) {
        case 'docente':
          router.push('/dashboard/docente');
          break;
        case 'estudiante':
          router.push('/dashboard/estudiante');
          break;
        case 'encargado':
          router.push('/dashboard/encargado');
          break;
        default:
          router.push('/');
      }
    } catch (err) {
      console.error('Error al iniciar sesión:', err);
      setError('Error al conectar con el servidor.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">Login</h2>

        {error && (
          <div className="text-red-600 text-sm mb-4 text-center">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Correo</label>
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md  text-gray-700"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">nombre</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md  text-gray-700"
              required
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
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Ingresar
          </button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600">¿No tienes una cuenta? </span>
          <button
            onClick={() => router.push('/register')}
            className="text-green-600 hover:underline font-medium text-sm"
          >
            Registrarse
          </button>
        </div>
      </div>
    </div>
  );
}
