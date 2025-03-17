import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // 🔥 Importação do CSS

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-title">
        🎮 Jogos Java
      </Link>
      <div className="navbar-links">
        <Link to="/library">Biblioteca</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
