// In App.jsx
import { useState, useEffect } from 'react';
import Calculator from './components/Calculator';
import HistoryPanel from './components/HistoryPanel';

function App() {
  const [showHistory, setShowHistory] = useState(false);
  const [timeOfDay, setTimeOfDay] = useState('day');

  // Time-based gradient
  useEffect(() => {
    const updateTimeOfDay = () => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) setTimeOfDay('dawn');
      else if (hour >= 12 && hour < 17) setTimeOfDay('day');
      else if (hour >= 17 && hour < 20) setTimeOfDay('dusk');
      else setTimeOfDay('night');
    };

    updateTimeOfDay();
    const interval = setInterval(updateTimeOfDay, 60000);
    return () => clearInterval(interval);
  }, []);

  // Get gradient based on time
  const getGradient = () => {
    const gradients = {
      dawn: 'from-rose-400 via-fuchsia-500 to-indigo-500',
      day: 'from-blue-400 via-purple-500 to-pink-500',
      dusk: 'from-orange-400 via-purple-500 to-blue-500',
      night: 'from-blue-900 via-purple-900 to-indigo-900'
    };
    return gradients[timeOfDay];
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${getGradient()} flex items-center justify-center p-4 relative overflow-hidden animate-gradient`}>
      {/* Floating particles/stars background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars-container" />
      </div>

      <div className="relative flex flex-col items-center max-w-md w-full">
        <div className="w-full backdrop-blur-xl bg-white/10 rounded-3xl p-6 shadow-2xl border border-white/20
                      hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] transition-all duration-500
                      dark:shadow-[0_0_30px_rgba(124,58,237,0.3)]">
          <Calculator />
          
          <button
            onClick={() => {
              setShowHistory(!showHistory);
              // Play mystical sound
              new Audio('/sounds/spell.mp3').play().catch(() => {});
            }}
            className="mt-4 w-full px-6 py-3 bg-white/20 backdrop-blur-md
                     hover:bg-white/30 rounded-xl text-white font-semibold
                     shadow-lg transition-all duration-500 flex items-center 
                     justify-center gap-2 hover:scale-105 active:scale-95
                     hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]
                     group"
          >
            <svg 
              className={`w-5 h-5 transition-all duration-500 ${showHistory ? 'rotate-180' : ''} 
                         group-hover:animate-pulse`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 9l-7 7-7-7" 
              />
            </svg>
            {showHistory ? 'Hide History' : 'Show History'}
          </button>
        </div>

        <div 
          className={`fixed bottom-0 inset-x-0 transform transition-all duration-500 ease-in-out ${
            showHistory ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <HistoryPanel onClose={() => setShowHistory(false)} />
        </div>
      </div>
    </div>
  );
}

export default App;