import React, { useState } from "react";
import "../styles/Support.css"; // Importando o CSS

export default function Support() {
  const [message, setMessage] = useState("");
  const [game, setGame] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleMessageChange = (e) => setMessage(e.target.value);
  const handleGameChange = (e) => setGame(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!game || !message) {
      setErrorMessage("Por favor, preencha todos os campos.");
      return;
    }

    console.log("Mensagem enviada:", { message, game });
    setMessage("");
    setGame("");
    setSuccessMessage("Mensagem enviada com sucesso!");
    setTimeout(() => setErrorMessage(""), 3000);
  };

  return (
    <div className="support-container">
      <h1>Relatar Erro ou Problema</h1>
      <p>Descreva o erro ou problema encontrado e nossa equipe irá analisar o mais rápido possível.</p>

      {errorMessage && <p className="error">{errorMessage}</p>}
      {successMessage && <p className="success">{successMessage}</p>}

      <form onSubmit={handleSubmit} className="support-form">
        <div>
          <label htmlFor="game">Escolha um jogo:</label>
          <select
            id="game"
            value={game}
            onChange={handleGameChange}
          >
            <option value="">Selecione...</option>
            <option value="game1">Jogo 1</option>
            <option value="game2">Jogo 2</option>
          </select>
        </div>

        <div>
          <label htmlFor="message">Mensagem:</label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            rows="5"
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
