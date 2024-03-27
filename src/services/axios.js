import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1',
  headers: {
    'Content-type': 'application/json',
  },
});

export default axiosInstance;
