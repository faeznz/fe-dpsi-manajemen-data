import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const fetchStatistikData = async () => {
  try {
    const token = localStorage.getItem('authToken');

    const response = await axios.get(`${API_URL}/reports/monthly`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response.data.map(item => ({
      month: `${new Date(item.year, item.month - 1).toLocaleString('default', { month: 'long' }).toUpperCase()} ${item.year}`,
      values: [item.totalItemsIn, item.totalItemsOut, item.employeesPresent],
    }));
  } catch (error) {
    throw new Error('Error fetching data');
  }
};
