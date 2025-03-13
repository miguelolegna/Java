import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">🎮 Jogos Java</h1>
      <div className="nav-links">
        <Link to="/">Início</Link>
        <Link to="/library">Biblioteca</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
