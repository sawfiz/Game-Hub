import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Platform } from "./usePlatform";
import { FetchResponse } from "../services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  // platforms is an array of objects
  // each object has a property called platform
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGame = (gameQuery: GameQuery) => {
  const fetchData = () =>
    apiClient
      .get<FetchResponse<Game>>("/games", {
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.ordering,
          search: gameQuery.search,
        },
      })
      .then((res) => res.data.results);

  return useQuery({
    queryKey: ["games", gameQuery],  // re-fetch when gameQuery change
    queryFn: fetchData,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });
};

export default useGame;
