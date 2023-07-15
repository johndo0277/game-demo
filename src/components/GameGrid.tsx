import React, { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import useGames, { Game } from "../hooks/useGames";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();

  return (
    <ul>
      {data.map((game) => (
        <li key={game.id}> {game.name}</li>
      ))}
    </ul>
  );
};

export default GameGrid;
