import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Zap } from 'lucide-react';

const AlienEncounter: React.FC = () => {
  const [ufoPosition, setUfoPosition] = useState({ x: 50, y: 30 });
  const [beamActive, setBeamActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setUfoPosition({
        x: 30 + Math.sin(Date.now() / 2000) * 20,
        y: 20 + Math.cos(Date.now() / 3000) * 10
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const beamInterval = setInterval(() => {
      setBeamActive(prev => !prev);
    }, 2000);

    return () => clearInterval(beamInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-black relative overflow-hidden">
      {/* Stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 100 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Planets */}
      <div className="absolute top-16 right-16 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-80"></div>
      <div className="absolute top-32 left-20 w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-full opacity-60"></div>

      {/* Back Button */}
      <Link 
        to="/" 
        className="absolute top-4 left-4 z-50 bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-colors duration-200"
      >
        <ArrowLeft className="w-5 h-5 text-white" />
      </Link>

      {/* UFO */}
      <div 
        className="absolute transition-all duration-1000 ease-in-out"
        style={{ 
          left: `${ufoPosition.x}%`, 
          top: `${ufoPosition.y}%`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        {/* UFO Body */}
        <div className="relative">
          <div className="w-24 h-12 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full relative shadow-2xl">
            {/* UFO Lights */}
            <div className="absolute bottom-0 left-2 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-0 left-6 w-2 h-2 bg-green-400 rounded-full animate-ping delay-300"></div>
            <div className="absolute bottom-0 right-6 w-2 h-2 bg-red-400 rounded-full animate-ping delay-600"></div>
            <div className="absolute bottom-0 right-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping delay-900"></div>
          </div>
          
          {/* UFO Dome */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gradient-to-t from-cyan-200/50 to-cyan-400/30 rounded-t-full"></div>
          
          {/* Abduction Beam */}
          <div className={`absolute top-12 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${beamActive ? 'opacity-70' : 'opacity-30'}`}>
            <div className="w-2 h-32 bg-gradient-to-b from-cyan-400 to-transparent"></div>
            <div className="w-8 h-32 bg-gradient-to-b from-cyan-300/50 to-transparent absolute -left-3 top-0"></div>
            <div className="w-16 h-32 bg-gradient-to-b from-cyan-200/30 to-transparent absolute -left-7 top-0"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Alien Character */}
        <div className="mb-8">
          <div className="text-8xl mb-4 animate-bounce">👽</div>
          <div className="text-4xl animate-pulse">🛸</div>
        </div>

        {/* 404 Message */}
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-2xl border border-purple-500/30">
          <h1 className="text-6xl sm:text-8xl font-bold text-white mb-4 drop-shadow-lg">
            404
          </h1>
          <h2 className="text-2xl sm:text-4xl font-bold text-purple-300 mb-6">
            Page Abducted by Aliens
          </h2>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-6">
            This page doesn't exist on your planet. Our alien friends have taken it 
            for research purposes. They promise to return it... eventually.
          </p>
          
          {/* Alien Message */}
          <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Zap className="w-5 h-5 text-green-400" />
              <span className="text-green-300 font-semibold">Alien Transmission</span>
            </div>
            <p className="text-green-200 italic">
              "Greetings, human. Your requested data has been relocated to our mothership 
              for analysis. Please try a different coordinate."
            </p>
          </div>

          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 bg-purple-600/30 hover:bg-purple-600/50 backdrop-blur-sm text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 border border-purple-400/30"
          >
            <Home className="w-5 h-5" />
            <span>Return to Earth</span>
          </Link>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-20 left-10 text-3xl animate-float">🌌</div>
        <div className="absolute top-1/4 right-10 text-2xl animate-float delay-1000">⭐</div>
        <div className="absolute bottom-32 right-20 text-4xl animate-bounce delay-2000">🚀</div>
      </div>

      {/* Nebula Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-radial from-purple-500/10 via-transparent to-transparent animate-pulse"></div>
      </div>
    </div>
  );
};

export default AlienEncounter;