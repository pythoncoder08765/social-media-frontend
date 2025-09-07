import axios from 'axios';

const API = axios.create({ baseURL: 'https://social-media-backend-production-e391.up.railway.app' });

export const logIn = (formData) => API.post('/auth/login', formData); 

export const signUp = (formData) => API.post('/auth/register', formData);