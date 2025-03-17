import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import GamePage from "./pages/GamePage";
import Support from "./components/Support";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-200">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/game/:id" element={<GamePage />} /> {/* 🔥 Rota dinâmica */}
      </Routes>
      <Support />
    </div>
  );
}
