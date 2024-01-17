import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "./useFetchData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => {
  // Pass <Genre> as the generic type for generic data fetching
  // Pass `/genres` as the endpoint for fetching data
  // Rename returned `data` to `genres`
  // const { data: genres, errors, isLoading } = useFetchData<Genre>("/genres");

  const fetchData = () =>
    apiClient
      .get<FetchResponse<Genre>>("/genres")
      .then((res) => res.data.results);

  return useQuery({
    queryKey: ["genres"],
    queryFn: fetchData,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: genres, // Use static data before fetching
  });
};

export default useGenre;
