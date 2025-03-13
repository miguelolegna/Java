import { useState } from "react";

export default function Filters() {
  const [open, setOpen] = useState(false);

  return (
    <div className="my-4">
      <button 
        className="bg-yellow-400 px-4 py-2 rounded-full font-bold"
        onClick={() => setOpen(!open)}
      >
        Filtros ⬇
      </button>
      {open && (
        <div className="bg-white p-4 rounded-lg mt-2 shadow-lg">
          <label className="block">
            <input type="checkbox" className="mr-2" /> Aventura
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2" /> Estratégia
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2" /> Puzzle
          </label>
        </div>
      )}
    </div>
  );
}
