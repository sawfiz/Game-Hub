import axios, { AxiosRequestConfig, CanceledError } from "axios";

// Define interface FetchResponse to expect an array of generic data type T
// Add T as the generic type parameter to this interface
export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

// Create an instance of axios 
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  // config is optional, used when there is a gameQuery object
  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;

export { CanceledError };
