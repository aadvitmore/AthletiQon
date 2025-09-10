import React, { useState, useEffect } from 'react';
import { 
  Camera, 
  Play, 
  Square, 
  RotateCcw, 
  CheckCircle,
  Timer,
  Target,
  TrendingUp
} from 'lucide-react';
import { Layout } from '../Layout';

interface FitnessTestScreenProps {
  onBack: () => void;
  onComplete: () => void;
}

type TestType = 'pushups' | 'squats' | 'jumping_jacks' | 'plank' | 'run';

const testTypes = [
  { id: 'pushups', name: 'Push-ups', icon: '💪', description: 'Upper body strength test' },
  { id: 'squats', name: 'Squats', icon: '🦵', description: 'Lower body endurance' },
  { id: 'jumping_jacks', name: 'Jumping Jacks', icon: '⚡', description: 'Cardio fitness test' },
  { id: 'plank', name: 'Plank Hold', icon: '🔥', description: 'Core stability test' },
  { id: 'run', name: '5K Run', icon: '🏃', description: 'Cardiovascular endurance' }
];

export const FitnessTestScreen: React.FC<FitnessTestScreenProps> = ({ onBack, onComplete }) => {
  const [selectedTest, setSelectedTest] = useState<TestType | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [timer, setTimer] = useState(0);
  const [mockMetrics, setMockMetrics] = useState({
    reps: 0,
    score: 0,
    form: 'Good'
  });

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording) {
      interval = setInterval(() => {
        setTimer(prev => prev + 1);
        // Mock real-time metrics updates
        if (selectedTest === 'pushups' || selectedTest === 'squats' || selectedTest === 'jumping_jacks') {
          setMockMetrics(prev => ({
            ...prev,
            reps: prev.reps + Math.random() > 0.7 ? 1 : 0,
            score: prev.reps * 10 + Math.floor(Math.random() * 5)
          }));
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording, selectedTest]);

  const startTest = () => {
    setIsRecording(true);
    setTimer(0);
    setMockMetrics({ reps: 0, score: 0, form: 'Good' });
  };

  const stopTest = () => {
    setIsRecording(false);
    setIsCompleted(true);
    // Mock final score calculation
    setMockMetrics(prev => ({
      ...prev,
      score: prev.reps * 10 + Math.floor(Math.random() * 50) + 100
    }));
  };

  const resetTest = () => {
    setIsRecording(false);
    setIsCompleted(false);
    setTimer(0);
    setMockMetrics({ reps: 0, score: 0, form: 'Good' });
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (!selectedTest) {
    return (
      <Layout title="Choose Fitness Test" showBack onBack={onBack}>
        <div className="px-4 py-6 space-y-4">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Select Your Test</h2>
            <p className="text-gray-600">Choose a fitness test to begin AI-powered analysis</p>
          </div>

          <div className="space-y-3">
            {testTypes.map((test) => (
              <button
                key={test.id}
                onClick={() => setSelectedTest(test.id as TestType)}
                className="w-full card hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="text-3xl mr-4">{test.icon}</div>
                  <div className="flex-1 text-left">
                    <h3 className="font-semibold text-gray-800">{test.name}</h3>
                    <p className="text-sm text-gray-600">{test.description}</p>
                  </div>
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <Play className="w-4 h-4 text-primary-600" />
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="card bg-gradient-to-r from-primary-50 to-secondary-50 border border-primary-200 mt-6">
            <div className="text-center">
              <Camera className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800 mb-1">AI-Powered Analysis</h3>
              <p className="text-sm text-gray-600">
                Our AI will analyze your form and provide real-time feedback during the test
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  const currentTest = testTypes.find(t => t.id === selectedTest)!;

  return (
    <Layout 
      title={currentTest.name} 
      showBack 
      onBack={() => setSelectedTest(null)}
    >
      <div className="px-4 py-6 space-y-6">
        {/* Camera View Mockup */}
        <div className="relative">
          <div className="aspect-[4/3] bg-gray-900 rounded-2xl overflow-hidden relative">
            {/* Mock camera feed */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="text-center text-white">
                <Camera className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-semibold mb-2">Camera Feed</p>
                <p className="text-sm opacity-75">AI pose estimation active</p>
              </div>
            </div>

            {/* Pose guide overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-64 border-2 border-primary-400 border-dashed rounded-lg flex items-center justify-center">
                <div className="text-6xl opacity-30">{currentTest.icon}</div>
              </div>
            </div>

            {/* Recording indicator */}
            {isRecording && (
              <div className="absolute top-4 left-4 flex items-center bg-red-500 text-white px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium">REC</span>
              </div>
            )}

            {/* Timer */}
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full">
              <span className="font-mono text-sm">{formatTime(timer)}</span>
            </div>
          </div>
        </div>

        {/* Real-time Metrics */}
        <div className="grid grid-cols-3 gap-3">
          <div className="card text-center">
            <Timer className="w-5 h-5 text-primary-600 mx-auto mb-1" />
            <div className="text-lg font-bold text-gray-800">{formatTime(timer)}</div>
            <div className="text-xs text-gray-600">Time</div>
          </div>
          <div className="card text-center">
            <Target className="w-5 h-5 text-secondary-600 mx-auto mb-1" />
            <div className="text-lg font-bold text-gray-800">{mockMetrics.reps}</div>
            <div className="text-xs text-gray-600">Reps</div>
          </div>
          <div className="card text-center">
            <TrendingUp className="w-5 h-5 text-accent-600 mx-auto mb-1" />
            <div className="text-lg font-bold text-gray-800">{mockMetrics.score}</div>
            <div className="text-xs text-gray-600">Score</div>
          </div>
        </div>

        {/* AI Feedback */}
        <div className="card bg-gradient-to-r from-secondary-50 to-primary-50 border border-secondary-200">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-sm">AI</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Form Analysis</h3>
              <p className="text-sm text-gray-600">
                {isRecording ? `Form: ${mockMetrics.form} - Keep your back straight!` : 'Position yourself in the guide area to begin'}
              </p>
            </div>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="space-y-3">
          {!isRecording && !isCompleted && (
            <button
              onClick={startTest}
              className="w-full btn-primary flex items-center justify-center"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Test
            </button>
          )}

          {isRecording && (
            <button
              onClick={stopTest}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
            >
              <Square className="w-5 h-5 mr-2" />
              Stop Test
            </button>
          )}

          {isCompleted && (
            <div className="space-y-3">
              <div className="card bg-gradient-to-r from-secondary-500 to-secondary-600 text-white text-center">
                <CheckCircle className="w-12 h-12 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">Test Complete!</h3>
                <p className="text-lg">Final Score: {mockMetrics.score}</p>
                <p className="text-sm opacity-90 mt-1">Great job! You've improved from last time.</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={resetTest}
                  className="btn-secondary flex items-center justify-center"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Try Again
                </button>
                <button
                  onClick={onComplete}
                  className="btn-primary flex items-center justify-center"
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Done
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="card bg-gray-50">
          <h3 className="font-semibold text-gray-800 mb-2">Instructions</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Position yourself within the guide outline</li>
            <li>• Ensure good lighting and stable phone position</li>
            <li>• Follow the AI feedback for proper form</li>
            <li>• Complete as many reps as possible</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};