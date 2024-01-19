import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import PlatformIconList from "./PlatformIconList";
import MeteCritic from "./Rating";
import getCroppedImgUrl from "../services/image-url.ts";
import Emoji from "./Emoji.tsx";
import { Link } from "react-router-dom";

const GameCard = ({ game }: { game: Game }) => {
  return (
    <Link to={`/games/${game.id}`}>
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
          <Emoji rating={game.rating_top} />
        </CardBody>
      </Card>
    </Link>
  );
};

export default GameCard;
