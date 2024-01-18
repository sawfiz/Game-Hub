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
import useGameQueryStore from "../zustand/store.ts";

const GenreList = () => {
  const { data, error, isLoading } = useGenre();
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore(s => s.setGenreId);

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
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                variant="link"
                whiteSpace={"normal"}
                textAlign={"left"}
                onClick={() => setGenreId(genre.id)}
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
