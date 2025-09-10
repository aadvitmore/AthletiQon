import React, { useState } from 'react';
import { WelcomeScreen } from './components/screens/WelcomeScreen';
import { LoginScreen } from './components/screens/LoginScreen';
import { SignupScreen } from './components/screens/SignupScreen';
import { DashboardScreen } from './components/screens/DashboardScreen';
import { FitnessTestScreen } from './components/screens/FitnessTestScreen';
import { LeaderboardScreen } from './components/screens/LeaderboardScreen';
import { AchievementsScreen } from './components/screens/AchievementsScreen';
import { ProfileScreen } from './components/screens/ProfileScreen';
import { Screen } from './types';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigateToScreen = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentScreen('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentScreen('welcome');
  };

  const handleBack = () => {
    if (currentScreen === 'login' || currentScreen === 'signup') {
      setCurrentScreen('welcome');
    } else if (isAuthenticated) {
      setCurrentScreen('dashboard');
    } else {
      setCurrentScreen('welcome');
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen onGetStarted={() => setCurrentScreen('login')} />;
      
      case 'login':
        return (
          <LoginScreen
            onLogin={handleLogin}
            onSignup={() => setCurrentScreen('signup')}
            onBack={handleBack}
          />
        );
      
      case 'signup':
        return (
          <SignupScreen
            onSignup={handleLogin}
            onLogin={() => setCurrentScreen('login')}
            onBack={handleBack}
          />
        );
      
      case 'dashboard':
        return (
          <DashboardScreen
            onNavigate={navigateToScreen}
            onLogout={handleLogout}
          />
        );
      
      case 'fitness-test':
        return (
          <FitnessTestScreen
            onBack={handleBack}
            onComplete={() => setCurrentScreen('dashboard')}
          />
        );
      
      case 'leaderboard':
        return (
          <LeaderboardScreen
            onBack={handleBack}
          />
        );
      
      case 'achievements':
        return (
          <AchievementsScreen
            onBack={handleBack}
          />
        );
      
      case 'profile':
        return (
          <ProfileScreen
            onBack={handleBack}
            onLogout={handleLogout}
          />
        );
      
      default:
        return <WelcomeScreen onGetStarted={() => setCurrentScreen('login')} />;
    }
  };

  return (
    <div className="App">
      {renderScreen()}
    </div>
  );
}

export default App;