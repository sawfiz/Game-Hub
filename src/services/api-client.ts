import axios, { CanceledError } from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY

// Export an instance of axios called apiClient
export default axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
  }
});

export { CanceledError };
