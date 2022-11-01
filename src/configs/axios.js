import axios from 'axios';

const api = axios.create({
  baseURL: process.env.SERVER || '',
});

export default api;
