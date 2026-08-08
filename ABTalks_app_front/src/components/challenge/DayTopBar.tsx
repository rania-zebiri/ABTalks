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
    <header className="sticky top-0 left-0 w-full z-50 pt-2 pb-0 bg-canvas">
      <div className="relative max-w-7xl mx-auto bg-card/90 backdrop-blur-md border border-borderline rounded-full px-3 sm:px-5 py-2 flex items-center justify-between shadow-sm">
        
        {/* Left Section: Back Button & Day Streak */}
        <div className="flex items-center gap-1.5 sm:gap-3 z-10">
          <button
            onClick={() => navigate('/dashboard')}
            aria-label="Back to Dashboard"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-canvas border border-borderline flex items-center justify-center text-header hover:opacity-80 transition-opacity cursor-pointer shrink-0"
          >
            <ArrowLeft className="w-4 h-4 text-header" />
          </button>

          <div className="flex items-center gap-1.5 sm:gap-2 bg-canvas border border-borderline px-2.5 sm:px-3.5 py-1 rounded-full text-xs sm:text-sm font-semibold text-header shrink-0">
            <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary fill-primary" />
            <span className="hidden sm:inline">Day {currentDay} of 60</span>
            <span className="sm:hidden">Day {currentDay}</span>
          </div>
        </div>

        {/* Center Section: Perfectly Centered Controls */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <nav className="pointer-events-auto flex items-center gap-1 bg-canvas rounded-full p-1 border border-borderline">
            <button 
              onClick={() => canGoPrev && navigate(`/day/${currentDay - 1}`)}
              disabled={!canGoPrev}
              className={`px-2.5 sm:px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1 sm:gap-1.5 transition-opacity ${
                canGoPrev 
                  ? `${activeTextColor} hover:opacity-70 cursor-pointer` 
                  : 'text-muted opacity-40 cursor-not-allowed'
              }`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Prev</span>
            </button>

            <button 
              onClick={() => canGoNext && navigate(`/day/${currentDay + 1}`)}
              disabled={!canGoNext}
              className={`px-2.5 sm:px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1 sm:gap-1.5 transition-opacity ${
                canGoNext 
                  ? `${activeTextColor} hover:opacity-70 cursor-pointer` 
                  : 'text-muted opacity-40 cursor-not-allowed'
              }`}
            >
              <span className="hidden sm:inline">Next</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </nav>
        </div>

        {/* Right Section: Theme Toggle */}
        <div className="flex items-center justify-end z-10">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-canvas border border-borderline flex items-center justify-center text-header hover:opacity-80 transition-opacity cursor-pointer shrink-0"
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