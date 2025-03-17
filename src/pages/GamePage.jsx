import { useParams } from "react-router-dom";
import gamesData from "../data/gamesData";

export default function GamePage() {
  const { id } = useParams();
  const game = gamesData.find((g) => g.id === id);

  if (!game) {
    return <h1 style={{ textAlign: "center", marginTop: "50px" }}>Jogo não encontrado</h1>;
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>{game.name}</h1>
      <p>{game.description}</p>
      <iframe
        src={game.url}
        width="800"
        height="600"
        style={{ border: "none", marginTop: "20px" }}
      ></iframe>
    </div>
  );
}
