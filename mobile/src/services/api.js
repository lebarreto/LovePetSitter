import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.152:3335/',
});

export default api;