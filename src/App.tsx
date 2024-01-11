import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "asid main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="asid" bg="gold">
            Aside
          </GridItem>
        </Show>
        <GridItem area="main">
         <GameGrid /> 
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
