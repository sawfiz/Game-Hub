import { Box, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { genres, errors, isLoading } = useGenre();
  return (
    <>
      {isLoading && <Text>loading</Text>}
      {errors && <Text>{errors}</Text>}
      <Box>
        {genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </Box>
    </>
  );
};

export default GenreList;
