import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenreName from "../hooks/useGenreName";
import usePlatformName from "../hooks/usePlatformName";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { platformId, genreId } = gameQuery;

  return (
    <Heading as={"h1"} marginY={5}>
      {usePlatformName(platformId)} {useGenreName(genreId)} Games
    </Heading>
  );
};

export default GameHeading;
