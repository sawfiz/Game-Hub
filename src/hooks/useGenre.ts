import { useQuery } from "@tanstack/react-query";
import ms from 'ms';
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

  const apiClient = new APIClient<Genre>("/genres");

  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), // 24 hours
    initialData: genres, // Use static data before fetching
  });
};

export default useGenre;
