import axios from "axios";

// axios instance for making requests
const axiosInstance = axios.create();

// request interceptor for adding token
axiosInstance.interceptors.request.use((config) => {
  // add token to request headers
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = token;
  }
  return config;
});

axiosInstance.interceptors.response.use((response) => {
  return response
}, (error) => {
  throw error;
});

export default axiosInstance;
