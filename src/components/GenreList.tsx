import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImgUrl from "../services/image-url.ts";

const GenreList = () => {
  const { genres, errors, isLoading } = useGenre();
  return (
    <>
      {isLoading && <Text>loading</Text>}
      {errors && <Text>{errors}</Text>}
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
