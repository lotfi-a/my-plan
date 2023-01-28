import axios from "axios";
import environment from "../../environment";

const axiosInstance = axios.create({
  baseURL: environment.API_URL,
  headers: {
    Accepted: "application/json",
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    //get token from auth service
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default axiosInstance;
