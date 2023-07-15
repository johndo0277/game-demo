import { useState } from "react";
import { Grid, GridItem, Show, Text } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, //mobile device
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav" bg="coral">
        <Text>NavBar</Text>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          <Text>Aside</Text>
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        <Text>Main</Text>
      </GridItem>
    </Grid>
  );
}

export default App;
