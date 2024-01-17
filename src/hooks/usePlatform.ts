// import useFetchData from "./useFetchData";
import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client";
import platforms from "../data/platform";

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
  // const { data, errors, isLoading } = useFetchData<Platform>(
  //   "/platforms/lists/parents"
  // );

  const fetchData = () =>
    apiClient
      .get<FetchResponse<Platform>>("/platforms/list/parents")
      .then((res) => res.data.results);

  const {
    data: unsortedPlatforms,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["platforms"],
    queryFn: fetchData,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: platforms, // Use static data before fetching
  });

  const sorted_platforms = unsortedPlatforms.sort(
    (a, b) => b.platforms[0].games_count - a.platforms[0].games_count
  );

  return { sorted_platforms, error, isLoading };
};

export default usePlatform;
