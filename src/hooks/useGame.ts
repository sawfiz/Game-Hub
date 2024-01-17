import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient from "../services/api-client";
import { Platform } from "./usePlatform";
import ms from 'ms';

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

  return useInfiniteQuery({
    queryKey: ["games", gameQuery], // re-fetch when gameQuery change
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.ordering,
          search: gameQuery.search,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined,
      staleTime: ms("24h"), // 24 hours
  });
};

export default useGame;
