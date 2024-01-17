// import useFetchData from "./useFetchData";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platform";
import APIClient from "../services/api-client";
import ms from 'ms';

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
  const apiClient = new APIClient<Platform>("/platforms/lists/parents");

  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), // 24 hours
    initialData: platforms, // Use static data before fetching
  });
};

export default usePlatform;
