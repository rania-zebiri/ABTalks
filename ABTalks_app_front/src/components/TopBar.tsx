import React, { useState, useEffect } from 'react';
import { Bell, Sun, Moon } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import logoImage from '../assets/logo.png';

export const TopBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
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

  const navItems = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Tracks', path: '/tracks' },
    { label: 'Leaderboard', path: '/leaderboard' },
    { label: 'Profile', path: '/profile' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto bg-card/80 backdrop-blur-md border border-borderline rounded-full px-5 py-2.5 flex items-center justify-between shadow-sm">
        
        {/* Brand Logo & Name */}
        <div 
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2.5 cursor-pointer"
        >
          <img src={logoImage} alt="ABTalks" className="w-6 h-6 object-contain" />
          <span className="font-bold text-lg text-header tracking-tight hidden sm:block">ABTalks</span>
        </div>

        {/* Center Pill Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-canvas rounded-full p-1 border border-borderline">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path === '/leaderboard' && location.pathname === '/');
            
            return (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-primary text-white shadow-sm font-semibold'
                    : 'text-bodytext hover:text-header'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="w-10 h-10 rounded-full bg-canvas border border-borderline flex items-center justify-center text-bodytext hover:text-header transition-colors cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-yellow-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Notifications Button */}
          <button className="relative w-10 h-10 rounded-full bg-canvas border border-borderline flex items-center justify-center text-bodytext hover:text-header transition-colors cursor-pointer">
            <Bell className="w-4 h-4" />
            <div className="absolute top-2.5 right-2.5 w-2 h-2 bg-primary rounded-full border border-card" />
          </button>

          {/* User Profile Radial Progress */}
          <div 
            onClick={() => navigate('/profile')}
            className={`relative w-11 h-11 cursor-pointer group rounded-full transition-transform hover:scale-105 ${
              location.pathname === '/profile' ? 'ring-2 ring-primary ring-offset-2 ring-offset-canvas' : ''
            }`}
          >
            <svg className="w-full h-full -rotate-90 absolute top-0 left-0" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r={radius} className="fill-none stroke-borderline" strokeWidth="2.5" />
              <circle
                cx="20"
                cy="20"
                r={radius}
                className="fill-none stroke-primary transition-all duration-1000"
                strokeWidth="2.5"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute top-1 left-1 w-9 h-9 rounded-full overflow-hidden bg-canvas border border-card">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default TopBar;