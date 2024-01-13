import useFetchData from "./useFetchData";

interface Platforms {
  games_count: number;
}

interface Platform {
  id: number;
  name: string;
  slug: string;
  platforms: Platforms[];
}

const usePlatform = (selectedPlatform?: Platform | null) => {
  const { data, errors, isLoading } = useFetchData<Platform>(
    "/platforms/lists/parents",
    { params: { genres: selectedPlatform?.id } },
    [selectedPlatform?.id]
  );
  console.log("🚀 ~ usePlatform ~ data:", data);

  const platforms = data.sort(
    (a, b) => b.platforms[0].games_count - a.platforms[0].games_count
  );
  console.log("🚀 ~ usePlatform ~ platforms:", platforms);

  return { platforms, errors, isLoading };
};

export default usePlatform;
