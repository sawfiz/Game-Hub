import {
  Flex,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImgUrl from "../services/image-url.ts";

const GenreList = () => {
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
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
