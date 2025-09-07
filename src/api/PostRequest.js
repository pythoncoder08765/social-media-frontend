import axios from 'axios';

const API = axios.create({ baseURL: 'https://social-media-backend-production-e391.up.railway.app' });

export const getTimelinePosts = (id) => API.get(`/post/${id}/timeline`);
export const likePost = (id, userId) => API.put(`post/${id}/like_dislike`, { userId: userId })