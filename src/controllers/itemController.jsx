import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

export const fetchItems = async () => {
  try {
    const token = getAuthToken();
    const response = await axios.get(`${API_URL}/items`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};

export const tambahData = async (data) => {
  try {
    const token = getAuthToken();
    await axios.post(`${API_URL}/items`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  } catch (error) {
    console.error('Error adding item:', error);
    throw error;
  }
};

export const fetchItemById = async (id) => {
  try {
    const token = getAuthToken();
    const response = await axios.get(`${API_URL}/items/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching item:', error);
    throw error;
  }
};

export const updateItem = async (id, data) => {
  try {
    const token = getAuthToken();
    await axios.put(`${API_URL}/items/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  } catch (error) {
    console.error('Error updating item:', error);
    throw error;
  }
};

export const deleteItem = async (id) => {
  try {
    const token = getAuthToken();
    await axios.delete(`${API_URL}/items/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  } catch (error) {
    console.error('Error deleting item:', error);
    throw error;
  }
};
