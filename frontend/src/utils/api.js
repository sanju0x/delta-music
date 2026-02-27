import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api",
  timeout: 8000,
});

api.interceptors.response.use(
  (res) => res.data,
  (err) => Promise.reject(err.response?.data?.error || "Request failed")
);

export const getBot = () => api.get("/bot");
export const getCommands = (params) => api.get("/commands", { params });
export const getOwners = () => api.get("/owners");
export const getPartners = (params) => api.get("/partners", { params });
export const getFeatures = (params) => api.get("/features", { params });
