import React, { useState } from 'react';
import { 
  User, 
  Settings, 
  LogOut, 
  Edit3, 
  Trophy, 
  Target, 
  Calendar,
  MapPin,
  Mail,
  Phone,
  Bell,
  Shield,
  Globe,
  HelpCircle
} from 'lucide-react';
import { Layout } from '../Layout';
import { mockUser } from '../../data/mockData';

interface ProfileScreenProps {
  onBack: () => void;
  onLogout: () => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ onBack, onLogout }) => {
  const [showSettings, setShowSettings] = useState(false);

  if (showSettings) {
    return (
      <Layout title="Settings" showBack onBack={() => setShowSettings(false)}>
        <div className="px-4 py-6 space-y-6">
          {/* Account Settings */}
          <div className="space-y-3">
            <h3 className="font-bold text-gray-800">Account</h3>
            
            <button className="w-full card hover:shadow-lg transition-all">
              <div className="flex items-center">
                <User className="w-5 h-5 text-gray-600 mr-3" />
                <div className="flex-1 text-left">
                  <h4 className="font-semibold text-gray-800">Edit Profile</h4>
                  <p className="text-sm text-gray-600">Update your personal information</p>
                </div>
              </div>
            </button>
            
            <button className="w-full card hover:shadow-lg transition-all">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-gray-600 mr-3" />
                <div className="flex-1 text-left">
                  <h4 className="font-semibold text-gray-800">Email & Phone</h4>
                  <p className="text-sm text-gray-600">Manage contact information</p>
                </div>
              </div>
            </button>
            
            <button className="w-full card hover:shadow-lg transition-all">
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-gray-600 mr-3" />
                <div className="flex-1 text-left">
                  <h4 className="font-semibold text-gray-800">Privacy & Security</h4>
                  <p className="text-sm text-gray-600">Password and privacy settings</p>
                </div>
              </div>
            </button>
          </div>

          {/* Preferences */}
          <div className="space-y-3">
            <h3 className="font-bold text-gray-800">Preferences</h3>
            
            <button className="w-full card hover:shadow-lg transition-all">
              <div className="flex items-center">
                <Bell className="w-5 h-5 text-gray-600 mr-3" />
                <div className="flex-1 text-left">
                  <h4 className="font-semibold text-gray-800">Notifications</h4>
                  <p className="text-sm text-gray-600">Manage push notifications</p>
                </div>
              </div>
            </button>
            
            <button className="w-full card hover:shadow-lg transition-all">
              <div className="flex items-center">
                <Globe className="w-5 h-5 text-gray-600 mr-3" />
                <div className="flex-1 text-left">
                  <h4 className="font-semibold text-gray-800">Language & Region</h4>
                  <p className="text-sm text-gray-600">English (India)</p>
                </div>
              </div>
            </button>
          </div>

          {/* Support */}
          <div className="space-y-3">
            <h3 className="font-bold text-gray-800">Support</h3>
            
            <button className="w-full card hover:shadow-lg transition-all">
              <div className="flex items-center">
                <HelpCircle className="w-5 h-5 text-gray-600 mr-3" />
                <div className="flex-1 text-left">
                  <h4 className="font-semibold text-gray-800">Help & FAQ</h4>
                  <p className="text-sm text-gray-600">Get help and support</p>
                </div>
              </div>
            </button>
          </div>

          {/* Logout */}
          <button
            onClick={onLogout}
            className="w-full card hover:shadow-lg transition-all bg-red-50 border border-red-200"
          >
            <div className="flex items-center">
              <LogOut className="w-5 h-5 text-red-600 mr-3" />
              <div className="flex-1 text-left">
                <h4 className="font-semibold text-red-600">Sign Out</h4>
                <p className="text-sm text-red-500">Sign out of your account</p>
              </div>
            </div>
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="Profile" showBack onBack={onBack}>
      <div className="px-4 py-6 space-y-6">
        {/* Profile Header */}
        <div className="card text-center">
          <div className="relative inline-block mb-4">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary-200 mx-auto">
              <img
                src={mockUser.avatar}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white hover:bg-primary-600 transition-colors">
              <Edit3 className="w-4 h-4" />
            </button>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-1">{mockUser.name}</h2>
          <p className="text-gray-600 mb-4">{mockUser.email}</p>
          
          <div className="flex items-center justify-center text-sm text-gray-600 mb-4">
            <MapPin className="w-4 h-4 mr-1" />
            <span>Mumbai, Maharashtra</span>
          </div>
          
          <button className="btn-primary text-sm py-2 px-6">
            Edit Profile
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3">
          <div className="card text-center">
            <Trophy className="w-6 h-6 text-primary-600 mx-auto mb-2" />
            <div className="text-xl font-bold text-gray-800">{mockUser.totalTests}</div>
            <div className="text-xs text-gray-600">Tests</div>
          </div>
          <div className="card text-center">
            <Target className="w-6 h-6 text-secondary-600 mx-auto mb-2" />
            <div className="text-xl font-bold text-gray-800">{mockUser.bestScore}</div>
            <div className="text-xs text-gray-600">Best Score</div>
          </div>
          <div className="card text-center">
            <Calendar className="w-6 h-6 text-accent-600 mx-auto mb-2" />
            <div className="text-xl font-bold text-gray-800">#{mockUser.currentRank}</div>
            <div className="text-xs text-gray-600">Rank</div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card">
          <h3 className="font-bold text-gray-800 mb-4">Activity Summary</h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">This Week</span>
              <span className="font-semibold text-gray-800">5 tests completed</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">This Month</span>
              <span className="font-semibold text-gray-800">23 tests completed</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Streak</span>
              <span className="font-semibold text-secondary-600">7 days 🔥</span>
            </div>
          </div>
        </div>

        {/* Achievements Preview */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-800">Recent Achievements</h3>
            <button className="text-primary-600 text-sm font-medium">View All</button>
          </div>
          
          <div className="flex space-x-3">
            <div className="text-center">
              <div className="text-3xl mb-1">🏃</div>
              <div className="text-xs text-gray-600">First Steps</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-1">👑</div>
              <div className="text-xs text-gray-600">Consistency</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-1">🔥</div>
              <div className="text-xs text-gray-600">Endurance</div>
            </div>
            <div className="text-center opacity-50">
              <div className="text-3xl mb-1">💪</div>
              <div className="text-xs text-gray-600">Strength</div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-3">
          <h3 className="font-bold text-gray-800">Quick Actions</h3>
          
          <button
            onClick={() => setShowSettings(true)}
            className="w-full card hover:shadow-lg transition-all"
          >
            <div className="flex items-center">
              <Settings className="w-5 h-5 text-gray-600 mr-3" />
              <div className="flex-1 text-left">
                <h4 className="font-semibold text-gray-800">Settings</h4>
                <p className="text-sm text-gray-600">Manage your account preferences</p>
              </div>
            </div>
          </button>
          
          <button className="w-full card hover:shadow-lg transition-all">
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-gray-600 mr-3" />
              <div className="flex-1 text-left">
                <h4 className="font-semibold text-gray-800">Invite Friends</h4>
                <p className="text-sm text-gray-600">Share AthletiQon with friends</p>
              </div>
            </div>
          </button>
        </div>

        {/* App Info */}
        <div className="card bg-gray-50 text-center">
          <div className="text-4xl mb-2">🏆</div>
          <h3 className="font-bold text-gray-800 mb-1">AthletiQon</h3>
          <p className="text-sm text-gray-600 mb-2">Train, Test, Triumph</p>
          <p className="text-xs text-gray-500">Version 1.0.0</p>
        </div>
      </div>
    </Layout>
  );
};