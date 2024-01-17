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
  const apiClient = new APIClient<Platform>("/platforms");

  const {
    data: unsortedPlatforms,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: platforms, // Use static data before fetching
  });

  const sorted_platforms = unsortedPlatforms.sort(
    (a, b) => b.platforms[0].games_count - a.platforms[0].games_count
  );

  return { sorted_platforms, error, isLoading };
};

export default usePlatform;
