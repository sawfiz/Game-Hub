import { Heading } from "@chakra-ui/react";
import useGenreName from "../hooks/useGenreName";
import usePlatformName from "../hooks/usePlatformName";
import useGameQueryStore from "../zustand/store";

const GameHeading = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);

  return (
    <Heading as={"h1"} marginY={5}>
      {usePlatformName(selectedPlatformId)} {useGenreName(selectedGenreId)}{" "}
      Games
    </Heading>
  );
};

export default GameHeading;
