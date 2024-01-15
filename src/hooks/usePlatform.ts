// import useFetchData from "./useFetchData";
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

  const sorted_platforms = platforms.sort(
    (a, b) => b.platforms[0].games_count - a.platforms[0].games_count
  );

  return { sorted_platforms, errors: false, isLoading: false };
};

export default usePlatform;
