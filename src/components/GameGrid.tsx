import React, { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import useGames, { Game } from "../hooks/useGames";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10}>
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
