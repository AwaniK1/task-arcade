import axios from 'axios';

const API = axios.create({ baseURL: 'https://task-arcade-backend.onrender.com/api' });

export const fetchTasks = () => API.get('/tasks');
export const createTask = (task) => API.post('/tasks', task);
export const toggleTask = (id) => API.put(`/tasks/${id}`);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);