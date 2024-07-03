import axios from "axios";
import AuthCookies from "../cookie/authToken.cookie";

const BASE_URL = import.meta.env.VITE_BASE_API_URL || 'http://127.0.0.1:8000/';  // Ensure the URL is correct

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = AuthCookies.GetAccessToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
