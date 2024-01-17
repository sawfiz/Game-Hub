import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatfromSelector from "./components/PlatfromSelector";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  ordering: string | null;
  search: string | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          md: `"nav nav" "asid main"`,
        }}
        templateColumns={{
          base: "1fr",
          md: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar
            onSearch={(search) => setGameQuery({ ...gameQuery, search })}
          />
        </GridItem>
        <Show above="md">
          <GridItem area="asid" paddingX={5}>
            <GenreList
              selectedGenre={gameQuery.genreId}
              onSelectGenre={(id) =>
                setGameQuery({ ...gameQuery, genreId: id })
              }
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingX={5}>
            <GameHeading gameQuery={gameQuery} />
            <HStack spacing={4} marginBottom={2}>
              <PlatfromSelector
                selectedPlatform={gameQuery.platformId}
                onSelectPlatform={(id) =>
                  setGameQuery({ ...gameQuery, platformId: id })
                }
              />
              <SortSelector
                sortOrder={gameQuery.ordering}
                onSelectOrder={(ordering) =>
                  setGameQuery({ ...gameQuery, ordering })
                }
              />
            </HStack>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
