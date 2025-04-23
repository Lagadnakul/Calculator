import axios from 'axios';

const API_URL = 'http://localhost:3000/api/calculator';

export const calculateResult = async (num1, num2, operation) => {
  const response = await axios.post(`${API_URL}/calculate`, {
    num1: parseFloat(num1),
    num2: parseFloat(num2),
    operation
  });
  return response.data;
};

export const getHistory = async () => {
  const response = await axios.get(`${API_URL}/history`);
  return response.data;
};