import axios from "axios";

// axios instance for making requests
const axiosInstance = axios.create();

// request interceptor for adding token
axiosInstance.interceptors.request.use((config) => {
  console.log(config);
  // add token to request headers
  config.headers["Authorization"] = localStorage.getItem("token");
  return config;
});
axiosInstance.interceptors.response.use((response) => {
    console.log(response);
    return response
}, (error) => {
    console.log(error);
    throw error;
});

export default axiosInstance;
