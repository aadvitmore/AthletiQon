export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  totalTests: number;
  bestScore: number;
  currentRank: number;
  achievements: Achievement[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  earned: boolean;
  earnedDate?: string;
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  avatar?: string;
  score: number;
  rank: number;
  location: string;
  medal?: 'gold' | 'silver' | 'bronze';
}

export interface FitnessTest {
  id: string;
  type: 'pushups' | 'squats' | 'jumping_jacks' | 'plank' | 'run';
  name: string;
  description: string;
  duration?: number;
  reps?: number;
  score: number;
  completedAt: string;
}

export type Screen = 
  | 'welcome' 
  | 'login' 
  | 'signup' 
  | 'dashboard' 
  | 'fitness-test' 
  | 'leaderboard' 
  | 'achievements' 
  | 'profile';