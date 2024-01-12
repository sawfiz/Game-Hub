import useFetchData from "./useFetchData";

export interface Genre {
  id: number;
  name: string;
}

const useGenre = () => {
  // Pass <Genre> as the generic type for generic data fetching
  // Pass `/genres` as the endpoint for fetching data
  // Rename returned `data` to `genres`
  const { data: genres, errors, isLoading } = useFetchData<Genre>("/genres");

  return { genres, errors, isLoading };
};

export default useGenre;
