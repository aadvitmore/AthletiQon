import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Trophy, Users, Zap } from 'lucide-react';

interface WelcomeScreenProps {
  onGetStarted: () => void;
}

const onboardingSlides = [
  {
    icon: <Zap className="w-16 h-16 text-accent-500" />,
    title: "AI-Powered Fitness Tests",
    description: "Get real-time feedback on your form and performance using advanced AI pose estimation technology."
  },
  {
    icon: <Trophy className="w-16 h-16 text-secondary-500" />,
    title: "Compete & Climb",
    description: "Challenge athletes across your city, state, and nation. See where you rank on our live leaderboards."
  },
  {
    icon: <Users className="w-16 h-16 text-primary-500" />,
    title: "Train Anywhere",
    description: "No gym? No problem. Train at home, in the park, or anywhere with just your smartphone camera."
  }
];

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onGetStarted }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % onboardingSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + onboardingSlides.length) % onboardingSlides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 flex flex-col">
      {/* Logo Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="mb-8 animate-bounce-gentle">
          <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-4">
            <Trophy className="w-12 h-12 text-white" />
          </div>
        </div>
        
        <h1 className="text-4xl font-black text-white mb-2">
          AthletiQon
        </h1>
        <p className="text-xl text-white/90 font-medium mb-12">
          Train, Test, Triumph
        </p>

        {/* Carousel */}
        <div className="w-full max-w-sm">
          <div className="card text-center min-h-[280px] flex flex-col justify-center">
            <div className="flex justify-center mb-6">
              {onboardingSlides[currentSlide].icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {onboardingSlides[currentSlide].title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {onboardingSlides[currentSlide].description}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prevSlide}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex space-x-2">
              {onboardingSlides.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Get Started Button */}
      <div className="p-6">
        <button
          onClick={onGetStarted}
          className="w-full bg-white text-primary-600 font-bold py-4 px-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};