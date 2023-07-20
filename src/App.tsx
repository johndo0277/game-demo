import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";

//undefined: the absence of a value : use ?
//null: the intenational absence of a value

export interface GameQuery {
  genreId?: number;
  parent_platformsId?: number;
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
            selectedGenreId={gameQuery.genreId}
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genreId: genre.id })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameHeading gameQuery={gameQuery} />
        <HStack spacing={5} paddingLeft={2} marginBottom={5}>
          <PlatformSelector
            seletedPlatformId={gameQuery.parent_platformsId}
            onSelectPlatform={(parent_platforms) =>
              setGameQuery({
                ...gameQuery,
                parent_platformsId: parent_platforms.id,
              })
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
