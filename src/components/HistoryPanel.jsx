import { useEffect, useState } from 'react';
import { getHistory } from '../services/api';

const HistoryPanel = ({ onClose }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const data = await getHistory();
        setHistory(data);
      } catch (error) {
        console.error('Error fetching history:', error);
      }
    };
    fetchHistory();
  }, []);

  return (
    <div className="bg-white/10 backdrop-blur-xl border-t border-white/20 rounded-t-3xl shadow-lg p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-white text-2xl font-bold flex items-center">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Calculation History
        </h2>
        <button 
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 
                   hover:scale-110 active:scale-95"
        >
          <svg 
            className="w-6 h-6 text-white transform rotate-180" 
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
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[40vh] overflow-y-auto pr-2
                    scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
        {history.map((calc) => (
          <div 
            key={calc._id} 
            className="bg-white/10 rounded-xl p-4 backdrop-blur-md border border-white/10
                     hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <p className="text-lg text-white font-semibold">
              {calc.num1} {getOperatorSymbol(calc.operation)} {calc.num2} = {calc.result}
            </p>
            <p className="text-xs text-gray-300 mt-2">
              {new Date(calc.timestamp).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const getOperatorSymbol = (operation) => {
  const symbols = {
    add: '+',
    subtract: '−',
    multiply: '×',
    divide: '÷'
  };
  return symbols[operation] || operation;
};

export default HistoryPanel;