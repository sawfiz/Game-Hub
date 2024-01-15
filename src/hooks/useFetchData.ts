import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";
import { AxiosRequestConfig } from "axios";
import { GameQuery } from "../App";

// Define interface FetchResponse to expect an array of generic data type T
// Add T as the generic type parameter to this interface
interface FetchResponse<T> {
  count: number;
  results: T[];
}

// Receive a generice type T from calling function
// Receive the endpoint for data fetching
const useFetchData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  dependencies?: GameQuery[]
) => {
  // data is an array of generic data type T
  const [data, setData] = useState<T[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () => {
      // Allow us to cancel aync operations
      const controller = new AbortController();

      setIsLoading(true);
      apiClient
        // Response should be for data type FetchResonse with <T> as parameter
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setIsLoading(false);
        })
        .catch((err) => {
          // Removes the error in strict mode, as the component is rendered twice
          if (err instanceof CanceledError) return;
          setErrors(err.message);
          setIsLoading(false);
        });
    },
    dependencies ? [...dependencies] : []
  );

  return { data, errors, isLoading };
};

export default useFetchData;
