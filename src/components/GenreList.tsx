import {
  Button,
  Flex,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImgUrl from "../services/image-url.ts";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { genres, errors, isLoading } = useGenre();
  if (errors) return null;
  return (
    <>
      {isLoading && (
        <Flex justify="center" alignItems={"middle"}>
          <Spinner />
        </Flex>
      )}
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                src={getCroppedImgUrl(genre.image_background)}
                boxSize={"32px"}
                borderRadius={"8px"}
              />
              <Button
                fontSize="lg"
                fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                variant="link"
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
