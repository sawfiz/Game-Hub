import axios, { CanceledError } from "axios";

// Export an instance of axios called apiClient
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "24ab5b4f742b4772989c6be1e2175813",
  }
});

export { CanceledError };
