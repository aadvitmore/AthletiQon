import React, { useState } from 'react';
import { Trophy, Medal, MapPin, TrendingUp } from 'lucide-react';
import { Layout } from '../Layout';
import { mockLeaderboard, mockUser } from '../../data/mockData';

interface LeaderboardScreenProps {
  onBack: () => void;
}

type LeaderboardTab = 'local' | 'state' | 'national';

export const LeaderboardScreen: React.FC<LeaderboardScreenProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<LeaderboardTab>('local');

  const getMedalIcon = (rank: number) => {
    switch (rank) {
      case 1: return '🥇';
      case 2: return '🥈';
      case 3: return '🥉';
      default: return null;
    }
  };

  const getMedalColor = (rank: number) => {
    switch (rank) {
      case 1: return 'text-yellow-500';
      case 2: return 'text-gray-400';
      case 3: return 'text-amber-600';
      default: return 'text-gray-600';
    }
  };

  const tabs = [
    { id: 'local', label: 'Local', icon: MapPin },
    { id: 'state', label: 'State', icon: TrendingUp },
    { id: 'national', label: 'National', icon: Trophy }
  ];

  return (
    <Layout title="Leaderboard" showBack onBack={onBack}>
      <div className="px-4 py-6 space-y-6">
        {/* Tab Navigation */}
        <div className="flex bg-gray-100 rounded-xl p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as LeaderboardTab)}
              className={`flex-1 flex items-center justify-center py-2 px-3 rounded-lg transition-all ${
                activeTab === tab.id
                  ? 'bg-white shadow-sm text-primary-600 font-semibold'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <tab.icon className="w-4 h-4 mr-1" />
              <span className="text-sm">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Current User Position */}
        <div className="card bg-gradient-to-r from-primary-50 to-secondary-50 border border-primary-200">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-300 mr-3">
              <img
                src={mockUser.avatar}
                alt="Your avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">Your Position</h3>
              <p className="text-sm text-gray-600">Rank #{mockUser.currentRank} • {mockUser.bestScore} points</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary-600">#{mockUser.currentRank}</div>
            </div>
          </div>
        </div>

        {/* Top 3 Podium */}
        <div className="card">
          <h3 className="font-bold text-gray-800 mb-4 text-center">Top Performers</h3>
          <div className="flex items-end justify-center space-x-4">
            {/* 2nd Place */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300 mb-2">
                <img
                  src={mockLeaderboard[1].avatar}
                  alt={mockLeaderboard[1].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-2xl mb-1">🥈</div>
              <div className="text-sm font-semibold text-gray-800">{mockLeaderboard[1].name}</div>
              <div className="text-xs text-gray-600">{mockLeaderboard[1].score}</div>
              <div className="w-12 h-16 bg-gray-300 rounded-t-lg mt-2"></div>
            </div>

            {/* 1st Place */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-yellow-400 mb-2">
                <img
                  src={mockLeaderboard[0].avatar}
                  alt={mockLeaderboard[0].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-3xl mb-1">🥇</div>
              <div className="text-sm font-semibold text-gray-800">{mockLeaderboard[0].name}</div>
              <div className="text-xs text-gray-600">{mockLeaderboard[0].score}</div>
              <div className="w-12 h-20 bg-yellow-400 rounded-t-lg mt-2"></div>
            </div>

            {/* 3rd Place */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-600 mb-2">
                <img
                  src={mockLeaderboard[2].avatar}
                  alt={mockLeaderboard[2].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-2xl mb-1">🥉</div>
              <div className="text-sm font-semibold text-gray-800">{mockLeaderboard[2].name}</div>
              <div className="text-xs text-gray-600">{mockLeaderboard[2].score}</div>
              <div className="w-12 h-12 bg-amber-600 rounded-t-lg mt-2"></div>
            </div>
          </div>
        </div>

        {/* Full Leaderboard */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-gray-800">Full Rankings</h3>
            <div className="text-sm text-gray-600">
              {activeTab === 'local' && 'Mumbai, Maharashtra'}
              {activeTab === 'state' && 'Maharashtra'}
              {activeTab === 'national' && 'India'}
            </div>
          </div>

          <div className="space-y-2">
            {mockLeaderboard.map((entry, index) => (
              <div
                key={entry.id}
                className={`card ${
                  entry.rank <= 3 
                    ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200' 
                    : ''
                }`}
              >
                <div className="flex items-center">
                  <div className="w-8 text-center mr-3">
                    {getMedalIcon(entry.rank) ? (
                      <span className="text-2xl">{getMedalIcon(entry.rank)}</span>
                    ) : (
                      <span className={`text-lg font-bold ${getMedalColor(entry.rank)}`}>
                        {entry.rank}
                      </span>
                    )}
                  </div>
                  
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 mr-3">
                    <img
                      src={entry.avatar}
                      alt={entry.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">{entry.name}</h4>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-3 h-3 mr-1" />
                      <span>{entry.location}</span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary-600">{entry.score}</div>
                    <div className="text-xs text-gray-500">points</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenge Section */}
        <div className="card bg-gradient-to-r from-accent-500 to-accent-600 text-white">
          <div className="text-center">
            <Trophy className="w-12 h-12 mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">Weekly Challenge</h3>
            <p className="text-sm opacity-90 mb-4">
              Top 10 athletes this week win exclusive badges and prizes!
            </p>
            <button className="bg-white text-accent-600 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors">
              Join Challenge
            </button>
          </div>
        </div>

        {/* Stats Footer */}
        <div className="grid grid-cols-2 gap-3">
          <div className="card text-center">
            <div className="text-2xl font-bold text-secondary-600">2,847</div>
            <div className="text-xs text-gray-600">Active Athletes</div>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-bold text-primary-600">15,293</div>
            <div className="text-xs text-gray-600">Tests Completed</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};