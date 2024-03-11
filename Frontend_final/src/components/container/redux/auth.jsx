import axios from 'axios';

export const login = async (credentials) => {
  try {
    const response = await axios.post('http://localhost:8080/auth/authenticate', credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};
