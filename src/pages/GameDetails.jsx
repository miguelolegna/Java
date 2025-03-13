import { useParams } from "react-router-dom";

export default function GameDetails() {
  const { id } = useParams();

  return (
    <div className="text-center p-6">
      <h2 className="text-3xl font-bold text-white">📌 Detalhes do Jogo</h2>
      <p className="text-white">ID do jogo: {id}</p>
      <button className="bg-green-500 px-4 py-2 rounded-full text-white mt-4">Jogar Agora</button>
    </div>
  );
}
