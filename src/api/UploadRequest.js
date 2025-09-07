import axios from 'axios';

const API = axios.create({ baseURL: 'https://social-media-backend-production-e391.up.railway.app' });

export const uploadImage = (data) => API.post('/upload/', data);
export const uploadPost = (data) => API.post('/post', data);