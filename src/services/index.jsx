import axios from 'axios';

const BASE_URL = 'https://vidyasetu-backend-7hol.onrender.com/api';

const API = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getSchoolId = () => API.get('/schoolId/getSchoolId');

export const loginUser = async data => {
  return API.post('/users/login', data);
};

// export const registerUser = async (data) => {
//   return API.post('/register', data);
// };

// export const getUsers = async () => {
//   return API.get('/users');
// };

// export const getUserById = async (id) => {
//   return API.get(`/users/${id}`);
// };

// export const updateUser = async (id, data) => {
//   return API.put(`/users/${id}`, data);
// };

// export const deleteUser = async (id) => {
//   return API.delete(`/users/${id}`);
// };
