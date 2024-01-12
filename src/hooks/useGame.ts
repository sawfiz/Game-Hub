import useFetchData from "./useFetchData";
import { Genre } from "./useGenre";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  // platforms is an array of objects
  // each object has a property called platform
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGame = (selectedGenre?: Genre | null) => {
  const {
    data: games,
    errors,
    isLoading,
  } = useFetchData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

  return { games, errors, isLoading };
};

export default useGame;
