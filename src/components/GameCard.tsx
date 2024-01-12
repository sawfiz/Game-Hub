import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import PlatformIconList from "./PlatformIconList";
import MeteCritic from "./Rating";
import getCroppedImgUrl from "../services/image-url.ts";

const GameCard = ({ game }: { game: Game }) => {
  return (
    <Card >
      <Image src={getCroppedImgUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl" marginBottom={2}>
          {game.name}
        </Heading>
        <HStack justify="space-between" align="start">
          <PlatformIconList platforms={game.parent_platforms} />
          <MeteCritic metacritic={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
