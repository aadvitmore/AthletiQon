import React from 'react';
import { 
  Trophy, 
  Target, 
  Award, 
  User, 
  TrendingUp, 
  Calendar,
  Clock,
  MapPin,
  ChevronRight
} from 'lucide-react';
import { Layout } from '../Layout';
import { mockUser, mockRecentTests } from '../../data/mockData';
import { Screen } from '../../types';

interface DashboardScreenProps {
  onNavigate: (screen: Screen) => void;
  onLogout: () => void;
}

export const DashboardScreen: React.FC<DashboardScreenProps> = ({ onNavigate }) => {
  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getTestIcon = (type: string) => {
    switch (type) {
      case 'pushups': return '💪';
      case 'run': return '🏃';
      case 'plank': return '🔥';
      case 'squats': return '🦵';
      case 'jumping_jacks': return '⚡';
      default: return '🏋️';
    }
  };

  return (
    <Layout>
      <div className="px-4 py-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Welcome back, {mockUser.name.split(' ')[0]}! 👋
            </h1>
            <p className="text-gray-600">Ready to crush your fitness goals?</p>
          </div>
          <button
            onClick={() => onNavigate('profile')}
            className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-200 hover:border-primary-400 transition-colors"
          >
            <img
              src={mockUser.avatar}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3">
          <div className="card text-center">
            <div className="text-2xl font-bold text-primary-600">{mockUser.totalTests}</div>
            <div className="text-xs text-gray-600 mt-1">Total Tests</div>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-bold text-secondary-600">{mockUser.bestScore}</div>
            <div className="text-xs text-gray-600 mt-1">Best Score</div>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-bold text-accent-600">#{mockUser.currentRank}</div>
            <div className="text-xs text-gray-600 mt-1">Rank</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-gray-800">Quick Actions</h2>
          
          <button
            onClick={() => onNavigate('fitness-test')}
            className="w-full card hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-semibold text-gray-800">Start Fitness Test</h3>
                <p className="text-sm text-gray-600">AI-powered form analysis</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </button>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => onNavigate('leaderboard')}
              className="card hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-center">
                <div className="w-10 h-10 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 text-sm">Leaderboard</h3>
                <p className="text-xs text-gray-600">See rankings</p>
              </div>
            </button>

            <button
              onClick={() => onNavigate('achievements')}
              className="card hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-center">
                <div className="w-10 h-10 bg-gradient-to-r from-accent-500 to-accent-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 text-sm">Achievements</h3>
                <p className="text-xs text-gray-600">View badges</p>
              </div>
            </button>
          </div>
        </div>

        {/* Motivational Banner */}
        <div className="card bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 text-white">
          <div className="flex items-center">
            <div className="flex-1">
              <h3 className="font-bold mb-1">Daily Challenge</h3>
              <p className="text-sm opacity-90">Complete 50 push-ups to earn bonus points!</p>
            </div>
            <div className="text-4xl">🎯</div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-800">Recent Activity</h2>
            <button className="text-primary-600 text-sm font-medium">View All</button>
          </div>

          <div className="space-y-3">
            {mockRecentTests.map((test) => (
              <div key={test.id} className="card">
                <div className="flex items-center">
                  <div className="text-2xl mr-3">{getTestIcon(test.type)}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{test.name}</h3>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="mr-3">{test.completedAt}</span>
                      {test.duration && (
                        <>
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{formatDuration(test.duration)}</span>
                        </>
                      )}
                      {test.reps && (
                        <>
                          <TrendingUp className="w-4 h-4 mr-1" />
                          <span>{test.reps} reps</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary-600">{test.score}</div>
                    <div className="text-xs text-gray-500">points</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location-based Challenge */}
        <div className="card bg-gradient-to-r from-secondary-50 to-accent-50 border border-secondary-200">
          <div className="flex items-center">
            <MapPin className="w-5 h-5 text-secondary-600 mr-2" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">Local Challenge</h3>
              <p className="text-sm text-gray-600">Join 247 athletes in your city competing this week!</p>
            </div>
            <button className="btn-secondary text-sm py-2 px-4">
              Join
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};