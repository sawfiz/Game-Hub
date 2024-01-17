import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient from "../services/api-client";
import { Platform } from "./usePlatform";

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
  const apiClient = new APIClient<Game>("/games");

  return useQuery({
    queryKey: ["games", gameQuery], // re-fetch when gameQuery change
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.ordering,
          search: gameQuery.search,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });
};

export default useGame;
