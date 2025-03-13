import { useState } from "react";

export default function QuickStart() {
  const [open, setOpen] = useState(false);
  const recentGames = ["Jogo 1", "Jogo 2", "Jogo 3"];

  return (
    <div className="fixed top-20 right-0 p-4">
      <button 
        className="bg-red-500 text-white px-4 py-2 rounded-full"
        onClick={() => setOpen(!open)}
      >
        ⚡ Início Rápido
      </button>
      {open && (
        <div className="bg-white p-4 rounded-lg shadow-lg w-40">
          <h3 className="font-bold">Jogos Recentes</h3>
          <ul>
            {recentGames.map((game, i) => (
              <li key={i} className="text-blue-500">{game}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
