import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import PlatformIconList from "./PlatformIconList";
import MeteCritic from "./Rating";
import getCroppedImgUrl from "../services/image-url.ts";

const GameCard = ({ game }: { game: Game }) => {
  return (
    <Card width={"300px"} borderRadius={10} overflow="hidden">
      <Image src={getCroppedImgUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl" marginBottom={2}>
          {game.name}
        </Heading>
        <HStack justify="space-between">
          <PlatformIconList platforms={game.platforms} />
          <MeteCritic metacritic={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
