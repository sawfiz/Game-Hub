import { GameQuery } from "../App";
import useFetchData from "./useFetchData";
import { Platform } from "./usePlatform";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  // platforms is an array of objects
  // each object has a property called platform
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGame = (gameQuery: GameQuery) => {
  const {
    data: games,
    errors,
    isLoading,
  } = useFetchData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.ordering,
        search: gameQuery.search,
      },
    },
    [gameQuery]
  );

  return { games, errors, isLoading };
};

export default useGame;
