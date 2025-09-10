import { User, Achievement, LeaderboardEntry, FitnessTest } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'Alex Johnson',
  email: 'alex.johnson@email.com',
  avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
  totalTests: 47,
  bestScore: 892,
  currentRank: 23,
  achievements: []
};

export const mockAchievements: Achievement[] = [
  {
    id: '1',
    title: 'First Steps',
    description: 'Complete your first fitness test',
    icon: '🏃',
    earned: true,
    earnedDate: '2024-01-15'
  },
  {
    id: '2',
    title: 'Consistency King',
    description: 'Complete 10 tests in a row',
    icon: '👑',
    earned: true,
    earnedDate: '2024-01-20'
  },
  {
    id: '3',
    title: 'Speed Demon',
    description: 'Achieve top 10% in running test',
    icon: '⚡',
    earned: false
  },
  {
    id: '4',
    title: 'Strength Master',
    description: 'Complete 100 push-ups in one session',
    icon: '💪',
    earned: false
  },
  {
    id: '5',
    title: 'Endurance Elite',
    description: 'Hold plank for 5 minutes',
    icon: '🔥',
    earned: true,
    earnedDate: '2024-01-25'
  },
  {
    id: '6',
    title: 'Social Butterfly',
    description: 'Challenge 5 friends',
    icon: '🦋',
    earned: false
  }
];

export const mockLeaderboard: LeaderboardEntry[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    score: 1250,
    rank: 1,
    location: 'Mumbai, Maharashtra',
    medal: 'gold'
  },
  {
    id: '2',
    name: 'Raj Patel',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    score: 1180,
    rank: 2,
    location: 'Delhi, Delhi',
    medal: 'silver'
  },
  {
    id: '3',
    name: 'Priya Sharma',
    avatar: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    score: 1120,
    rank: 3,
    location: 'Bangalore, Karnataka',
    medal: 'bronze'
  },
  {
    id: '4',
    name: 'Arjun Kumar',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    score: 1050,
    rank: 4,
    location: 'Chennai, Tamil Nadu'
  },
  {
    id: '5',
    name: 'Kavya Reddy',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    score: 980,
    rank: 5,
    location: 'Hyderabad, Telangana'
  }
];

export const mockRecentTests: FitnessTest[] = [
  {
    id: '1',
    type: 'pushups',
    name: 'Push-ups Challenge',
    description: 'Complete as many push-ups as possible',
    reps: 45,
    score: 450,
    completedAt: '2024-01-28'
  },
  {
    id: '2',
    type: 'run',
    name: '5K Run',
    description: 'Complete a 5 kilometer run',
    duration: 1800, // 30 minutes
    score: 720,
    completedAt: '2024-01-26'
  },
  {
    id: '3',
    type: 'plank',
    name: 'Plank Hold',
    description: 'Hold plank position as long as possible',
    duration: 180, // 3 minutes
    score: 360,
    completedAt: '2024-01-24'
  }
];