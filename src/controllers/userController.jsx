import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const fetchUserProfile = async () => {
  const token = localStorage.getItem('authToken');
  const response = await axios.get(`${API_URL}/users/profile`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};

export const updateUserProfile = async (profileData) => {
  const token = localStorage.getItem('authToken');
  await axios.put(`${API_URL}/users/profile`, profileData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export const changeUserPassword = async (passwordData) => {
  const token = localStorage.getItem('authToken');
  await axios.put(`${API_URL}/users/change-password`, passwordData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
