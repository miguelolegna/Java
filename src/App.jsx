import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Support from "./components/Support"; // MOVIDO PARA CIMA

// Importação dinâmica (lazy) das páginas
const Home = React.lazy(() => import("./pages/Home"));
const Library = React.lazy(() => import("./pages/Library"));
const Login = React.lazy(() => import("./pages/Login"));
const Profile = React.lazy(() => import("./pages/Profile"));
const GameDetails = React.lazy(() => import("./pages/GameDetails"));

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      {/* Suspense para carregar as páginas de forma assíncrona */}
      <Suspense fallback={<h1>Carregando...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/game/:id" element={<GameDetails />} />
        </Routes>
      </Suspense>

      <Support />
    </div>
  );
}
