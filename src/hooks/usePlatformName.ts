import usePlatform from "./usePlatform";

const usePlatformName = (id?: number) => {
  const { data: platforms } = usePlatform();
  const selectedPlatform = platforms?.results.find(
    (platform) => platform.id === id
  );

  return selectedPlatform?.name;
};

export default usePlatformName;
