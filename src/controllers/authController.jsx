import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, { username, password });
    const { token, user } = response.data;

    if (token) {
      localStorage.setItem('authToken', token);
      localStorage.setItem('username', user.username);
    }

    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error('Login failed');
    }
  }
};
