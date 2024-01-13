import useFetchData from "./useFetchData";

interface Platforms {
  games_count: number;
  name: string,
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
  platforms: Platforms[];
}

const usePlatform = () => {
  const { data, errors, isLoading } = useFetchData<Platform>(
    "/platforms/lists/parents"
  );

  const platforms = data.sort(
    (a, b) => b.platforms[0].games_count - a.platforms[0].games_count
  );

  return { platforms, errors, isLoading };
};

export default usePlatform;
