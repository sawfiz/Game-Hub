import {
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImgUrl from "../services/image-url.ts";

interface Props {
  selectedGenre?: number;
  onSelectGenre: (id: number) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenre();

  if (error) return null;

  return (
    <>
      {isLoading && (
        <Flex justify="center" alignItems={"middle"}>
          <Spinner />
        </Flex>
      )}
      <Heading fontSize="2xl" marginY={4}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                src={getCroppedImgUrl(genre.image_background)}
                boxSize={"32px"}
                borderRadius={"8px"}
                objectFit="cover"
              />
              <Button
                fontSize="lg"
                fontWeight={genre.id === selectedGenre ? "bold" : "normal"}
                variant="link"
                whiteSpace={"normal"}
                textAlign={"left"}
                onClick={() => onSelectGenre(genre.id)}
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
