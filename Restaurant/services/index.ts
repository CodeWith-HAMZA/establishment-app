import axios from 'axios';
import {getAuthToken} from '../utils/storage';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.0.105:3000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  async config => {
    const token = await getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    console.log('token, satuhteohasohestu: ', token)
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized access. Redirecting to login...');
    }
    return Promise.reject(error);
  },
);

async function getToken() {
  const token = await getAuthToken();
  return token;
}

export default axiosInstance;
