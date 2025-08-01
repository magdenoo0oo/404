import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Brain, AlertTriangle } from 'lucide-react';

const aiMessages = [
  'ANALYZING REQUEST...',
  'SCANNING DATABASE...',
  'ERROR: PAGE NOT FOUND IN MEMORY BANKS',
  'ATTEMPTING ALTERNATIVE ROUTES...',
  'LOGIC CIRCUITS OVERHEATING...',
  'CONSULTING NEURAL NETWORKS...',
  'RESULT: DOES NOT COMPUTE',
  'SUGGESTION: RETURN TO KNOWN COORDINATES',
  'REBOOTING SEARCH ALGORITHMS...',
  'STATUS: CONFUSED BUT FUNCTIONAL'
];

const AIConfusion: React.FC = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const message = aiMessages[currentMessage];
    let index = 0;
    
    const typeInterval = setInterval(() => {
      if (index < message.length) {
        setDisplayedText(message.substring(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        setTimeout(() => {
          setCurrentMessage((prev) => (prev + 1) % aiMessages.length);
          setDisplayedText('');
          setIsTyping(true);
        }, 1500);
        clearInterval(typeInterval);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [currentMessage]);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
      {/* Matrix Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="text-xs">
          {Array.from({ length: 200 }, (_, i) => (
            <div 
              key={i} 
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>
      </div>

      {/* Glitch Effect */}
      {glitchActive && (
        <div className="absolute inset-0 bg-red-500 opacity-20 animate-ping"></div>
      )}

      {/* Back Button */}
      <Link 
        to="/" 
        className="absolute top-4 left-4 z-50 bg-gray-800 hover:bg-gray-700 rounded-lg p-3 transition-colors duration-200"
      >
        <ArrowLeft className="w-5 h-5 text-green-400" />
      </Link>

      <div className="relative z-10 p-4">
        {/* AI Interface Header */}
        <div className="text-center mb-8 pt-16">
          <div className="flex justify-center items-center space-x-4 mb-6">
            <Brain className="w-16 h-16 text-cyan-400 animate-pulse" />
            <div className="text-6xl">🤖</div>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-cyan-400 mb-2">
            AI SYSTEM ERROR
          </h1>
          <p className="text-lg text-gray-400">
            Artificial Intelligence cannot compute your request
          </p>
        </div>

        {/* Terminal Window */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 border border-green-500 rounded-lg overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">AI_SYSTEM_v2.1.4</span>
              </div>
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span className="text-red-400 text-sm">ERROR STATE</span>
              </div>
            </div>
            
            {/* Terminal Content */}
            <div className="p-6 h-96">
              {/* 404 Display */}
              <div className="text-center mb-8">
                <div className={`text-8xl font-bold text-red-400 mb-4 ${glitchActive ? 'animate-pulse' : ''}`}>
                  404
                </div>
                <div className="text-2xl text-yellow-400 mb-2">PAGE.EXE NOT FOUND</div>
                <div className="text-gray-500">ERROR CODE: 0x00000404</div>
              </div>

              {/* AI Messages */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2">
                  <span className="text-cyan-400">AI&gt;</span>
                  <span className="text-white">
                    {displayedText}
                    {isTyping && <span className="animate-pulse">|</span>}
                  </span>
                </div>
              </div>

              {/* System Status */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-800 p-3 rounded">
                  <div className="text-gray-400 mb-1">CPU Usage</div>
                  <div className="text-red-400">99.7% (OVERLOAD)</div>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <div className="text-gray-400 mb-1">Memory</div>
                  <div className="text-yellow-400">7.2GB / 8GB</div>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <div className="text-gray-400 mb-1">Neural Networks</div>
                  <div className="text-red-400">CONFUSED</div>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <div className="text-gray-400 mb-1">Logic Circuits</div>
                  <div className="text-orange-400">OVERHEATING</div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Recommendation */}
          <div className="mt-6 bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Brain className="w-6 h-6 text-blue-400" />
              <span className="text-blue-300 font-semibold">AI RECOMMENDATION</span>
            </div>
            <p className="text-blue-200 mb-4">
              My neural pathways suggest returning to a known safe location. 
              This page exists in a quantum state of uncertainty.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center space-x-2 bg-blue-600/30 hover:bg-blue-600/50 backdrop-blur-sm text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 border border-blue-400/30"
            >
              <Home className="w-5 h-5" />
              <span>Return to Safety</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIConfusion;