import { GameQuery } from "../App";
import { Heading, Text } from "@chakra-ui/react";

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
