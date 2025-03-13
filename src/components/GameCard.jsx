import React from "react";

export default function GameCard({ title, image, plays }) {
  return (
    <div className="game-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{plays} jogadas</p>
    </div>
  );
}
