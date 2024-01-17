// import useFetchData from "./useFetchData";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platform";
import APIClient from "../services/api-client";

interface Platforms {
  games_count: number;
  name: string;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
  platforms: Platforms[];
}

const usePlatform = () => {
  const apiClient = new APIClient<Platform>("/platforms/list/parents");

  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: {count: 14, results: platforms, next: null}, // Use static data before fetching
  });

};

export default usePlatform;
