import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { platform, genre } = gameQuery;
  return (
    <Heading as={"h1"} marginY={5}>
      {platform?.name} {genre?.name} Games
    </Heading>
  );
};

export default GameHeading;
