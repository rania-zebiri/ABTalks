import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Flame, Sun, Moon } from 'lucide-react';

interface DayTopBarProps {
  currentDay?: number;
}

export const DayTopBar: React.FC<DayTopBarProps> = ({ currentDay = 12 }) => {
  const navigate = useNavigate();

  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (savedTheme) return savedTheme;
    return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const activeTextColor = theme === 'dark' ? 'text-white' : 'text-black';

  const canGoPrev = currentDay > 1;
  const canGoNext = currentDay < 60;

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto bg-card/90 backdrop-blur-md border border-borderline rounded-full px-5 py-2 grid grid-cols-3 items-center shadow-sm">
        
        {/* Left Section: Back Button & Day Streak */}
        <div className="flex items-center gap-3 justify-start">
          <button
            onClick={() => navigate('/dashboard')}
            aria-label="Back to Dashboard"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-canvas border border-borderline flex items-center justify-center text-header hover:opacity-80 transition-opacity cursor-pointer shrink-0"
          >
            <ArrowLeft className="w-4 h-4 text-header" />
          </button>

          <div className="flex items-center gap-2 bg-canvas border border-borderline px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-header shrink-0">
            <Flame className="w-4 h-4 text-primary fill-primary" />
            <span>Day {currentDay} of 60</span>
          </div>
        </div>

        {/* Center Section: Dynamic Prev/Next Controls */}
        <div className="flex justify-center">
          <nav className="flex items-center gap-1.5 bg-canvas rounded-full p-1 border border-borderline">
            <button 
              onClick={() => canGoPrev && navigate(`/day/${currentDay - 1}`)}
              disabled={!canGoPrev}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-opacity ${
                canGoPrev 
                  ? `${activeTextColor} hover:opacity-70 cursor-pointer` 
                  : 'text-muted opacity-40 cursor-not-allowed'
              }`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Prev</span>
            </button>

            <button 
              onClick={() => canGoNext && navigate(`/day/${currentDay + 1}`)}
              disabled={!canGoNext}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-opacity ${
                canGoNext 
                  ? `${activeTextColor} hover:opacity-70 cursor-pointer` 
                  : 'text-muted opacity-40 cursor-not-allowed'
              }`}
            >
              <span>Next</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </nav>
        </div>

        {/* Right Section: Theme Toggle */}
        <div className="flex items-center justify-end">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-canvas border border-borderline flex items-center justify-center text-header hover:opacity-80 transition-opacity cursor-pointer shrink-0"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-yellow-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-800" />
            )}
          </button>
        </div>

      </div>
    </header>
  );
};