import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // usa variables de entorno
  withCredentials: true, // si usas cookies para auth
});

export default api;
