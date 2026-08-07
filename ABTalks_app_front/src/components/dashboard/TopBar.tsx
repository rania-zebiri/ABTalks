import React, { useState, useEffect } from 'react';
import { Bell, Sun, Moon } from 'lucide-react';
import logoImage from '../../assets/logo.png';

export const TopBar: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    // Read theme preference from localStorage or HTML root attribute
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (savedTheme) return savedTheme;
    return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  });

  const progress = 78;
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

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
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <nav className="fixed top-0 w-full z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto bg-card/80 backdrop-blur-md border border-borderline rounded-full px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={logoImage} alt="ABTalks" className="w-6 h-6 object-contain" />
          <span className="font-bold text-lg text-header tracking-tight hidden sm:block">ABTalks</span>
        </div>

        <div className="hidden md:flex items-center gap-1 bg-canvas rounded-full p-1 border border-borderline">
          <a href="#" className="px-5 py-1.5 rounded-full bg-card text-header text-sm font-medium">Dashboard</a>
          <a href="#" className="px-5 py-1.5 rounded-full text-bodytext hover:text-header text-sm font-medium transition-colors">Tracks</a>
          <a href="#" className="px-5 py-1.5 rounded-full text-bodytext hover:text-header text-sm font-medium transition-colors">Leaderboard</a>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="w-10 h-10 rounded-full bg-canvas border border-borderline flex items-center justify-center text-bodytext hover:text-header transition-colors"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-yellow-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Notifications Button */}
          <button className="relative w-10 h-10 rounded-full bg-canvas border border-borderline flex items-center justify-center text-bodytext hover:text-header transition-colors">
            <Bell className="w-4 h-4" />
            <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border border-card" />
          </button>

          {/* User Profile Progress Ring */}
          <div className="relative w-12 h-12 cursor-pointer group">
            <svg className="w-full h-full -rotate-90 absolute top-0 left-0" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r={radius} className="fill-none stroke-borderline" strokeWidth="2" />
              <circle cx="20" cy="20" r={radius} className="fill-none stroke-primary transition-all duration-1000" strokeWidth="2" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} strokeLinecap="round" />
            </svg>
            <div className="absolute top-1 left-1 w-10 h-10 rounded-full overflow-hidden bg-canvas border-2 border-card">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80" alt="Avatar" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};