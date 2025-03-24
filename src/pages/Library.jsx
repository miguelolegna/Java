import { Link } from "react-router-dom";
import gamesData from "../data/gamesData";

export default function Library() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Biblioteca de Jogos</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {gamesData.map((game) => (
          <div key={game.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <h2>{game.name}</h2>
            <p>{game.description}</p>
            <Link to={`/game/${game.id}`}>
              <button style={{ padding: "10px", background: "blue", color: "white" }}>
                Jogar Agora
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}