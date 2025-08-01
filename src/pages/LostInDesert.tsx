import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sun, Home } from 'lucide-react';

const LostInDesert: React.FC = () => {
  const [mirageVisible, setMirageVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setMirageVisible(prev => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-300 via-orange-400 to-red-500 relative overflow-hidden">
      {/* Sun */}
      <div className="absolute top-8 right-8 w-24 h-24 bg-yellow-200 rounded-full shadow-2xl animate-pulse">
        <Sun className="w-16 h-16 text-yellow-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Back Button */}
      <Link 
        to="/" 
        className="absolute top-4 left-4 z-50 bg-white/20 backdrop-blur-sm rounded-lg p-3 hover:bg-white/30 transition-colors duration-200"
      >
        <ArrowLeft className="w-5 h-5 text-white" />
      </Link>

      {/* Sand Dunes */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 300" className="w-full h-64">
          <path d="M0,150 Q300,50 600,150 T1200,150 L1200,300 L0,300 Z" fill="rgba(245,158,11,0.8)" />
          <path d="M0,200 Q200,100 400,200 T800,200 Q1000,150 1200,200 L1200,300 L0,300 Z" fill="rgba(217,119,6,0.6)" />
        </svg>
      </div>

      {/* Floating Sand Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-200 rounded-full opacity-60 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Lost Character */}
        <div className="mb-8 relative">
          <div className="text-8xl mb-4 animate-bounce">🧭</div>
          <div className="text-6xl animate-pulse">😵</div>
        </div>

        {/* 404 Message */}
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 max-w-2xl border border-white/20">
          <h1 className="text-6xl sm:text-8xl font-bold text-white mb-4 drop-shadow-lg">
            404
          </h1>
          <h2 className="text-2xl sm:text-4xl font-bold text-yellow-100 mb-6">
            Lost in the Desert
          </h2>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8">
            You've reached nowhere... this page is lost in the vast digital desert. 
            The sun is blazing, the sand is shifting, and there's no sign of your destination.
          </p>
          
          {/* Mirage Effect */}
          <div className={`transition-opacity duration-1000 ${mirageVisible ? 'opacity-100' : 'opacity-0'} mb-6`}>
            <div className="text-blue-300 italic">
              Wait... is that an oasis? No, just another mirage... 💧
            </div>
          </div>

          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 border border-white/30"
          >
            <Home className="w-5 h-5" />
            <span>Find Your Way Home</span>
          </Link>
        </div>

        {/* Desert Elements */}
        <div className="absolute bottom-20 left-10 text-4xl animate-bounce delay-1000">🌵</div>
        <div className="absolute bottom-32 right-20 text-3xl animate-bounce delay-2000">🦂</div>
        <div className="absolute top-1/3 left-1/4 text-2xl animate-float delay-500">💀</div>
      </div>

      {/* Heat Wave Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-t from-transparent via-white/5 to-transparent animate-pulse"></div>
      </div>
    </div>
  );
};

export default LostInDesert;