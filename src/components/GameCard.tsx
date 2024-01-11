import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import PlatformIconList from "./PlatformIconList";

const GameCard = ({ game }: { game: Game }) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl" marginBottom={2}>{game.name}</Heading>
        <PlatformIconList  platforms={game.platforms} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
