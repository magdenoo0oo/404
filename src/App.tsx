import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LostInDesert from './pages/LostInDesert';
import AlienEncounter from './pages/AlienEncounter';
import AIConfusion from './pages/AIConfusion';
import BehindTheScenes from './pages/BehindTheScenes';
import LevelNotFound from './pages/LevelNotFound';

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/desert" element={<LostInDesert />} />
        <Route path="/alien" element={<AlienEncounter />} />
        <Route path="/ai" element={<AIConfusion />} />
        <Route path="/movie" element={<BehindTheScenes />} />
        <Route path="/game" element={<LevelNotFound />} />
      </Routes>
    </div>
  );
}

export default App;