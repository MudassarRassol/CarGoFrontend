import axios from 'axios';

const API = axios.create({
  baseURL: 'http://192.168.100.6:3000/', // 👈 your PC IP address
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;
