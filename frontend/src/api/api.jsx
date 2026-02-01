import axios from 'axios';

const API = axios.create({
  baseURL: 'https://codemind-backend-gvjk.onrender.com', // your backend URL
});

// Register
export const registerUser = (data) => API.post('/auth/register', data);

// Login
export const loginUser = (data) => API.post('/auth/login', data);

// Create project
export const createProject = (data, token) =>
  API.post('/projects', data, { headers: { Authorization: `Bearer ${token}` } });

// Query project
export const queryProject = (projectId, data, token) =>
  API.post(`/query/${projectId}`, data, { headers: { Authorization: `Bearer ${token}` } });
