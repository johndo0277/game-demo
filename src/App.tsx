import { useState } from "react";
import { Grid, GridItem, HStack, Show, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";
import PlatformSelector from "./components/PlatformSelector";
import GameHeading from "./components/GameHeading";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  parent_platforms: Platform | null;
  searchText: string;
  sortOrder: string;
}
function App() {
  const [gameQuery, setGameQuery] = useState({} as GameQuery);
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
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX="5px">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameHeading gameQuery={gameQuery} />
        <HStack spacing={5} paddingLeft={2} marginBottom={5}>
          <PlatformSelector
            seletedPlatform={gameQuery.parent_platforms}
            onSelectedPlatform={(parent_platforms) =>
              setGameQuery({ ...gameQuery, parent_platforms })
            }
          />
          <SortSelector
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
