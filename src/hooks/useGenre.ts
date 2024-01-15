// import useFetchData from "./useFetchData";

import genres from "../data/genres"

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => {
  console.log("🚀 ~ genres:", genres)
  // Pass <Genre> as the generic type for generic data fetching
  // Pass `/genres` as the endpoint for fetching data
  // Rename returned `data` to `genres`
  // const { data: genres, errors, isLoading } = useFetchData<Genre>("/genres");

  return { genres, errors: false, isLoading: false };
  // return { genres, errors, isLoading};
};

export default useGenre;
