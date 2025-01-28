import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4001/api',
  });
export const getSuperheroes = () => api.get('/superheroes');
export const addSuperhero = (superhero) => api.post('/superheroes', superhero);