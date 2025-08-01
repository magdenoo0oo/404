import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Gamepad2, Zap } from 'lucide-react';

const LevelNotFound: React.FC = () => {
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [glitchActive, setGlitchActive] = useState(false);
  const [powerUp, setPowerUp] = useState(false);

  useEffect(() => {
    const scoreInterval = setInterval(() => {
      setScore(prev => prev + 10);
    }, 1000);

    return () => clearInterval(scoreInterval);
  }, []);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  useEffect(() => {
    const powerUpInterval = setInterval(() => {
      setPowerUp(true);
      setTimeout(() => setPowerUp(false), 1000);
    }, 5000);

    return () => clearInterval(powerUpInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-pink-900 to-black relative overflow-hidden">
      {/* Pixel Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}
        ></div>
      </div>

      {/* Glitch Effect */}
      {glitchActive && (
        <div className="absolute inset-0 bg-red-500 opacity-30 animate-ping"></div>
      )}

      {/* Back Button */}
      <Link 
        to="/" 
        className="absolute top-4 left-4 z-50 bg-black/50 backdrop-blur-sm rounded-lg p-3 hover:bg-black/70 transition-colors duration-200"
      >
        <ArrowLeft className="w-5 h-5 text-white" />
      </Link>

      {/* Game UI Header */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-40">
        <div className="bg-black/80 backdrop-blur-sm rounded-lg px-6 py-2 border border-pink-500/50">
          <div className="flex items-center space-x-6 text-white font-mono">
            <div className="flex items-center space-x-2">
              <span className="text-yellow-400">SCORE:</span>
              <span>{score.toLocaleString()}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-red-400">LIVES:</span>
              <div className="flex space-x-1">
                {Array.from({ length: lives }, (_, i) => (
                  <span key={i} className="text-red-500">❤️</span>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-400">LEVEL:</span>
              <span className="text-red-400 animate-pulse">ERROR</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Power-ups */}
      {powerUp && (
        <div className="absolute top-1/4 right-1/4 animate-bounce">
          <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
            <Zap className="w-5 h-5 text-black" />
          </div>
        </div>
      )}

      {/* Main Game Screen */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Game Character */}
        <div className="mb-8 relative">
          <div className="text-8xl mb-4 animate-bounce">🎮</div>
          <div className={`text-6xl ${glitchActive ? 'animate-pulse' : ''}`}>👾</div>
        </div>

        {/* Game Over Screen */}
        <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-8 max-w-2xl border-4 border-pink-500/50 relative">
          {/* Pixel Border Decoration */}
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-pink-500"></div>
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-pink-500"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-pink-500"></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-pink-500"></div>

          <div className="text-center">
            <h1 className={`text-6xl sm:text-8xl font-bold text-red-400 mb-4 font-mono ${glitchActive ? 'animate-pulse' : ''}`}>
              404
            </h1>
            <h2 className="text-2xl sm:text-4xl font-bold text-pink-400 mb-6 font-mono">
              LEVEL NOT FOUND
            </h2>
            <p className="text-lg text-white/90 leading-relaxed mb-6 font-mono">
              Oops! This level is locked, corrupted, or doesn't exist in our game database. 
              The developers forgot to code this part of the adventure.
            </p>

            {/* Game Status */}
            <div className="bg-red-900/50 border border-red-500/50 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Gamepad2 className="w-5 h-5 text-red-400" />
                <span className="text-red-300 font-semibold font-mono">SYSTEM ERROR</span>
              </div>
              <div className="space-y-1 text-sm font-mono">
                <div className="text-red-200">ERROR CODE: 0x404GAME</div>
                <div className="text-red-200">STATUS: LEVEL_NOT_LOADED</div>
                <div className="text-red-200">SUGGESTION: RETURN_TO_MENU</div>
              </div>
            </div>

            {/* Game Controls */}
            <div className="flex justify-center space-x-4 mb-6 text-sm font-mono">
              <div className="bg-gray-800 px-3 py-1 rounded border border-gray-600">
                <span className="text-gray-400">A</span> <span className="text-white">Jump</span>
              </div>
              <div className="bg-gray-800 px-3 py-1 rounded border border-gray-600">
                <span className="text-gray-400">B</span> <span className="text-white">Attack</span>
              </div>
              <div className="bg-gray-800 px-3 py-1 rounded border border-gray-600">
                <span className="text-gray-400">START</span> <span className="text-white">Menu</span>
              </div>
            </div>

            <Link 
              to="/" 
              className="inline-flex items-center space-x-2 bg-pink-600/30 hover:bg-pink-600/50 backdrop-blur-sm text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 border border-pink-400/30 font-mono"
            >
              <Home className="w-5 h-5" />
              <span>RETURN TO MENU</span>
            </Link>
          </div>
        </div>

        {/* Game Elements */}
        <div className="absolute bottom-20 left-10 text-4xl animate-bounce delay-1000">🕹️</div>
        <div className="absolute top-1/4 right-10 text-3xl animate-float">⭐</div>
        <div className="absolute bottom-32 right-20 text-2xl animate-pulse">💎</div>
      </div>

      {/* Scanlines Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="w-full h-full opacity-10"
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'
          }}
        ></div>
      </div>
    </div>
  );
};

export default LevelNotFound;