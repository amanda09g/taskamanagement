// client/src/services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Endereço do backend
});

export default api;
