import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Zap, Brain, Camera, Gamepad2 } from 'lucide-react';

const experiences = [
  {
    id: 'lost-in-desert',
    title: 'Lost in the Desert',
    description: 'Stranded in a vast, endless desert',
    emoji: '🏜️',
    icon: Sun,
    path: '/desert',
    gradient: 'from-orange-400 to-red-500',
    hoverGradient: 'from-orange-500 to-red-600'
  },
  {
    id: 'alien-encounter',
    title: 'Alien Encounter',
    description: 'Your page was abducted by aliens',
    emoji: '👽',
    icon: Zap,
    path: '/alien',
    gradient: 'from-blue-500 to-purple-600',
    hoverGradient: 'from-blue-600 to-purple-700'
  },
  {
    id: 'ai-confusion',
    title: 'AI Confusion',
    description: 'Artificial intelligence cannot compute',
    emoji: '🤖',
    icon: Brain,
    path: '/ai',
    gradient: 'from-green-400 to-teal-500',
    hoverGradient: 'from-green-500 to-teal-600'
  },
  {
    id: 'behind-the-scenes',
    title: 'Behind the Scenes',
    description: 'Cut! This scene does not exist',
    emoji: '🎬',
    icon: Camera,
    path: '/movie',
    gradient: 'from-yellow-400 to-orange-500',
    hoverGradient: 'from-yellow-500 to-orange-600'
  },
  {
    id: 'level-not-found',
    title: 'Level Not Found',
    description: 'This level is locked or missing',
    emoji: '🎮',
    icon: Gamepad2,
    path: '/game',
    gradient: 'from-pink-400 to-purple-500',
    hoverGradient: 'from-pink-500 to-purple-600'
  }
];

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      </div>
      
      <div className="relative z-10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-6 tracking-tight">
              404 Experience
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-yellow-400 mb-8">
              Gallery
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore 404 pages like you've never seen before. 
              Each experience transforms the classic "Page Not Found" into something memorable and engaging.
            </p>
          </div>

          {/* Experience Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {experiences.map((experience) => (
              <Link
                key={experience.id}
                to={experience.path}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-white/20">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${experience.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon and Emoji */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-4xl">{experience.emoji}</div>
                      <experience.icon className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                      {experience.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {experience.description}
                    </p>
                  </div>

                  {/* Hover Effect Border */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${experience.hoverGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>
              </Link>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center mt-16">
            <p className="text-gray-500 text-sm">
              Choose an experience to discover creative 404 pages
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;