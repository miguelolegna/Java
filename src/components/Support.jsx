import React, { useState } from "react";

export default function Support() {
  const [formData, setFormData] = useState({
    game: "site",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = "seuemail@exemplo.com"; // Substituir pelo seu email
    const subject = `Suporte - ${formData.game}`;
    const body = encodeURIComponent(formData.message);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <footer className="support">
      <h3>Precisa de ajuda?</h3>
      <form onSubmit={handleSubmit}>
        <select name="game" value={formData.game} onChange={handleChange}>
          <option value="site">Site inteiro</option>
          <option value="jogo1">Jogo 1</option>
          <option value="jogo2">Jogo 2</option>
          <option value="jogo3">Jogo 3</option>
        </select>
        <textarea
          name="message"
          placeholder="Digite sua mensagem..."
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </footer>
  );
}
