import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Camera, Film, Clapperboard } from 'lucide-react';

const BehindTheScenes: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [clapperOpen, setClapperOpen] = useState(false);

  useEffect(() => {
    const recordingInterval = setInterval(() => {
      setIsRecording(prev => !prev);
    }, 2000);

    return () => clearInterval(recordingInterval);
  }, []);

  useEffect(() => {
    const clapperInterval = setInterval(() => {
      setClapperOpen(true);
      setTimeout(() => setClapperOpen(false), 300);
    }, 4000);

    return () => clearInterval(clapperInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-700 to-black relative overflow-hidden">
      {/* Studio Lights */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-yellow-300 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute top-0 right-1/4 w-32 h-32 bg-white rounded-full opacity-15 blur-3xl"></div>
      <div className="absolute top-1/3 left-0 w-24 h-24 bg-blue-300 rounded-full opacity-10 blur-2xl"></div>

      {/* Back Button */}
      <Link 
        to="/" 
        className="absolute top-4 left-4 z-50 bg-black/50 backdrop-blur-sm rounded-lg p-3 hover:bg-black/70 transition-colors duration-200"
      >
        <ArrowLeft className="w-5 h-5 text-white" />
      </Link>

      {/* Film Equipment */}
      <div className="absolute top-20 right-10">
        <div className="relative">
          <Camera className="w-16 h-16 text-gray-400" />
          {isRecording && (
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
          )}
        </div>
      </div>

      <div className="absolute bottom-20 left-10">
        <Film className="w-12 h-12 text-gray-500 animate-spin" style={{ animationDuration: '10s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Director and Clapperboard */}
        <div className="mb-8 relative">
          <div className="text-8xl mb-4">🎬</div>
          <div className={`transition-transform duration-300 ${clapperOpen ? 'scale-110' : 'scale-100'}`}>
            <Clapperboard className="w-16 h-16 text-yellow-400 mx-auto" />
          </div>
        </div>

        {/* Movie Set Frame */}
        <div className="relative bg-black/60 backdrop-blur-sm rounded-2xl p-8 max-w-3xl border-4 border-yellow-400/30">
          {/* Film Strip Decoration */}
          <div className="absolute -left-8 top-0 bottom-0 w-6 bg-gray-800 border-l-2 border-r-2 border-yellow-400">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="w-4 h-4 bg-yellow-400 mx-auto mt-2 rounded-sm"></div>
            ))}
          </div>
          <div className="absolute -right-8 top-0 bottom-0 w-6 bg-gray-800 border-l-2 border-r-2 border-yellow-400">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="w-4 h-4 bg-yellow-400 mx-auto mt-2 rounded-sm"></div>
            ))}
          </div>

          {/* Content */}
          <h1 className="text-6xl sm:text-8xl font-bold text-white mb-4 drop-shadow-lg">
            404
          </h1>
          <h2 className="text-2xl sm:text-4xl font-bold text-yellow-400 mb-6">
            CUT! Scene Not Found
          </h2>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-6">
            The director has called "CUT!" because this scene doesn't exist in our script. 
            The crew is confused, the actors have left the set, and the page you're looking for 
            seems to have been edited out in post-production.
          </p>

          {/* Director's Note */}
          <div className="bg-yellow-400/20 border border-yellow-400/40 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Clapperboard className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-300 font-semibold">Director's Note</span>
            </div>
            <p className="text-yellow-200 italic">
              "This page was supposed to be the climax of our digital story, 
              but it seems we forgot to film it. Back to the drawing board!"
            </p>
          </div>

          {/* Recording Indicator */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className={`w-3 h-3 rounded-full ${isRecording ? 'bg-red-500 animate-pulse' : 'bg-gray-500'}`}></div>
            <span className="text-gray-300 text-sm">
              {isRecording ? 'RECORDING' : 'STANDBY'}
            </span>
          </div>

          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 bg-yellow-600/30 hover:bg-yellow-600/50 backdrop-blur-sm text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 border border-yellow-400/30"
          >
            <Home className="w-5 h-5" />
            <span>Back to Main Set</span>
          </Link>
        </div>

        {/* Crew Members */}
        <div className="absolute bottom-10 left-20 text-4xl animate-bounce delay-1000">🎭</div>
        <div className="absolute top-1/4 right-20 text-3xl animate-float">🎪</div>
        <div className="absolute bottom-32 right-32 text-2xl animate-pulse">🎨</div>
      </div>

      {/* Spotlight Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-radial from-transparent via-transparent to-black/50"></div>
      </div>
    </div>
  );
};

export default BehindTheScenes;