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
        <HStack justify="space-between" align="start" marginBottom={1}>
          <PlatformIconList platforms={game.parent_platforms} />
          <MeteCritic metacritic={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl" marginBottom={1}>
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
