import axios from 'axios';

// Replace port if your backend is running on a different port
const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const fetchTasks = () => API.get('/tasks');
export const createTask = (task) => API.post('/tasks', task);
export const toggleTask = (id) => API.put(`/tasks/${id}`);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);
