import React from "react";
import GameCard from "../components/GameCard";

export default function Library() {
  const games = [
    { title: "Jogo 1", image: "/game1.jpg", plays: 1200 },
    { title: "Jogo 2", image: "/game2.jpg", plays: 950 },
  ];

  return (
    <div className="library">
      <h2>Biblioteca de Jogos</h2>
      <div className="games-grid">
        {games.map((game, index) => (
          <GameCard key={index} {...game} />
        ))}
      </div>
    </div>
  );
}
