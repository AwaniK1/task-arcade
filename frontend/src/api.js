import axios from "axios";

const API = axios.create({
  baseURL: "/api", // proxy will forward to backend
});

export default API;
