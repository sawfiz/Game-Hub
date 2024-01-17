import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => {
  // Pass <Genre> as the generic type for generic data fetching
  // Pass `/genres` as the endpoint for fetching data

  const apiClient = new APIClient<Genre>("/genres")

  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: {count: 19, results: genres, next: null}, // Use static data before fetching
  });
};

export default useGenre;
