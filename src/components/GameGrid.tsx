import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame  from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";
import { Genre } from "../hooks/useGenre.ts";
import { Platform } from "../hooks/usePlatform.ts";

interface Props {
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null,
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { games, errors, isLoading } = useGame(selectedGenre, selectedPlatform);
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      {errors && <Text>{errors}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }}
        spacing={5}
        padding={5}
      >
        {isLoading &&
          array.map((item) => (
            <GameCardContainer key={item}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
