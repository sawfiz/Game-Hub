import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { platformId, genreId } = gameQuery;

  const { data: genres } = useGenre();
  const selectedGenre = genres?.results.find((genre) => genre.id === genreId);

  const { data: platforms } = usePlatform();
  const selectedPlatform = platforms?.results.find(
    (platform) => platform.id === platformId
  );

  return (
    <Heading as={"h1"} marginY={5}>
      {selectedPlatform?.name} {selectedGenre?.name} Games
    </Heading>
  );
};

export default GameHeading;
