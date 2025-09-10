import React, { useState } from 'react';
import { Award, Lock, Calendar, TrendingUp, Target, Users } from 'lucide-react';
import { Layout } from '../Layout';
import { mockAchievements, mockUser } from '../../data/mockData';

interface AchievementsScreenProps {
  onBack: () => void;
}

export const AchievementsScreen: React.FC<AchievementsScreenProps> = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'earned' | 'locked'>('all');

  const earnedAchievements = mockAchievements.filter(a => a.earned);
  const lockedAchievements = mockAchievements.filter(a => !a.earned);

  const getFilteredAchievements = () => {
    switch (selectedCategory) {
      case 'earned': return earnedAchievements;
      case 'locked': return lockedAchievements;
      default: return mockAchievements;
    }
  };

  const categories = [
    { id: 'all', label: 'All', count: mockAchievements.length },
    { id: 'earned', label: 'Earned', count: earnedAchievements.length },
    { id: 'locked', label: 'Locked', count: lockedAchievements.length }
  ];

  return (
    <Layout title="Achievements" showBack onBack={onBack}>
      <div className="px-4 py-6 space-y-6">
        {/* Progress Overview */}
        <div className="card bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
          <div className="text-center">
            <Award className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Achievement Hunter</h2>
            <p className="text-lg opacity-90 mb-4">
              {earnedAchievements.length} of {mockAchievements.length} unlocked
            </p>
            <div className="w-full bg-white/20 rounded-full h-3">
              <div 
                className="bg-white h-3 rounded-full transition-all duration-500"
                style={{ width: `${(earnedAchievements.length / mockAchievements.length) * 100}%` }}
              ></div>
            </div>
            <p className="text-sm opacity-75 mt-2">
              {Math.round((earnedAchievements.length / mockAchievements.length) * 100)}% Complete
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex bg-gray-100 rounded-xl p-1">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id as any)}
              className={`flex-1 text-center py-2 px-3 rounded-lg transition-all ${
                selectedCategory === category.id
                  ? 'bg-white shadow-sm text-primary-600 font-semibold'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <span className="text-sm">{category.label}</span>
              <span className="text-xs ml-1 opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Recent Achievement */}
        {earnedAchievements.length > 0 && (
          <div className="card bg-gradient-to-r from-secondary-50 to-accent-50 border border-secondary-200">
            <div className="flex items-center">
              <div className="text-3xl mr-3">🎉</div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">Latest Achievement</h3>
                <p className="text-sm text-gray-600">
                  {earnedAchievements[earnedAchievements.length - 1].title} - {earnedAchievements[earnedAchievements.length - 1].earnedDate}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Achievement Grid */}
        <div className="space-y-4">
          <h3 className="font-bold text-gray-800">
            {selectedCategory === 'all' && 'All Achievements'}
            {selectedCategory === 'earned' && 'Earned Badges'}
            {selectedCategory === 'locked' && 'Locked Achievements'}
          </h3>

          <div className="grid grid-cols-1 gap-3">
            {getFilteredAchievements().map((achievement) => (
              <div
                key={achievement.id}
                className={`card transition-all duration-300 ${
                  achievement.earned
                    ? 'bg-gradient-to-r from-secondary-50 to-primary-50 border border-secondary-200 hover:shadow-xl'
                    : 'bg-gray-50 border border-gray-200 opacity-75'
                }`}
              >
                <div className="flex items-center">
                  <div className="relative mr-4">
                    <div className={`text-4xl ${achievement.earned ? '' : 'grayscale opacity-50'}`}>
                      {achievement.icon}
                    </div>
                    {!achievement.earned && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center">
                        <Lock className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h4 className={`font-semibold ${achievement.earned ? 'text-gray-800' : 'text-gray-500'}`}>
                      {achievement.title}
                    </h4>
                    <p className={`text-sm ${achievement.earned ? 'text-gray-600' : 'text-gray-400'}`}>
                      {achievement.description}
                    </p>
                    {achievement.earned && achievement.earnedDate && (
                      <div className="flex items-center mt-1 text-xs text-secondary-600">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>Earned {achievement.earnedDate}</span>
                      </div>
                    )}
                  </div>
                  
                  {achievement.earned && (
                    <div className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Categories */}
        <div className="space-y-4">
          <h3 className="font-bold text-gray-800">Categories</h3>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="card text-center">
              <Target className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-800 text-sm">Performance</h4>
              <p className="text-xs text-gray-600">2 of 4 earned</p>
            </div>
            
            <div className="card text-center">
              <TrendingUp className="w-8 h-8 text-secondary-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-800 text-sm">Consistency</h4>
              <p className="text-xs text-gray-600">1 of 3 earned</p>
            </div>
            
            <div className="card text-center">
              <Users className="w-8 h-8 text-accent-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-800 text-sm">Social</h4>
              <p className="text-xs text-gray-600">0 of 2 earned</p>
            </div>
            
            <div className="card text-center">
              <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-800 text-sm">Special</h4>
              <p className="text-xs text-gray-600">0 of 1 earned</p>
            </div>
          </div>
        </div>

        {/* Motivation Section */}
        <div className="card bg-gradient-to-r from-accent-500 to-accent-600 text-white">
          <div className="text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-lg font-bold mb-2">Keep Going!</h3>
            <p className="text-sm opacity-90 mb-4">
              Complete 3 more tests this week to unlock the "Consistency King" badge!
            </p>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div className="bg-white h-2 rounded-full w-2/3"></div>
            </div>
            <p className="text-xs opacity-75 mt-2">2 of 3 tests completed</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};