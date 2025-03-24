import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import GamePage from "./pages/GamePage";
import Support from "./pages/Support";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/game/:id" element={<GamePage />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
  