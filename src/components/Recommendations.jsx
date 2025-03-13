export default function Recommendations() {
    const recommendedGames = [
      { name: "Jogo A", plays: 1500 },
      { name: "Jogo B", plays: 1200 },
      { name: "Jogo C", plays: 1000 },
    ];
  
    return (
      <div className="mt-6 p-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl font-bold">🔥 Recomendações</h2>
        <ul>
          {recommendedGames.map((game, i) => (
            <li key={i} className="text-gray-700">{game.name} - {game.plays} jogadas</li>
          ))}
        </ul>
      </div>
    );
  }
  