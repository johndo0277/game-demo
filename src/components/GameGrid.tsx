import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import useGameQueryStore from "../store";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return <Text>{error.message}</Text>;

  const games = data?.results.filter((game) => game.platforms !== null);

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      padding="10px"
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {games?.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
