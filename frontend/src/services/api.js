import axios from 'axios';

const api = axios.create({
  baseURL: 'https://lovepetsitters.herokuapp.com/',
});

export default api;
