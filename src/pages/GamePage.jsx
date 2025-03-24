import { useParams } from "react-router-dom";
import gamesData from "../data/gamesData";

export default function GamePage() {
  const { id } = useParams();
  const game = gamesData.find((g) => String(g.id) === String(id));

  console.log("ID recebido:", id);
  console.log("Lista de jogos:", gamesData);

  if (!game) {
    return <h1 style={{ textAlign: "center", marginTop: "50px" }}>Jogo não encontrado</h1>;
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>{game.name}</h1>
      <p>{game.description}</p>
      <iframe
        src={game.url}
        width="100%"
        height="600px"
        style={{ border: "none", marginTop: "20px", maxWidth: "900px" }}
        title={game.name}
      ></iframe>
    </div>
  );
}
