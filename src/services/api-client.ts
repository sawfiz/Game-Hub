import axios, { CanceledError } from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY

// Define interface FetchResponse to expect an array of generic data type T
// Add T as the generic type parameter to this interface
export interface FetchResponse<T> {
  count: number;
  results: T[];
}

// Export an instance of axios called apiClient
export default axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
  }
});

export { CanceledError };
