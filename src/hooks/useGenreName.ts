import useGenre from "./useGenre";

const useGenreName = (id?: number) => {
  const { data: genres } = useGenre();
  const selectedGenre = genres?.results.find((genre) => genre.id === id);

  return selectedGenre?.name;
};

export default useGenreName;
