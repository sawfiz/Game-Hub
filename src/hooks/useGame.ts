import useFetchData from "./useFetchData";
import { Genre } from "./useGenre";
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

const useGame = (
  selectedGenre?: Genre | null,
  selectedPlatform?: Platform | null
) => {
  const {
    data: games,
    errors,
    isLoading,
  } = useFetchData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        parent_platforms: selectedPlatform?.id,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );

  return { games, errors, isLoading };
};

export default useGame;
