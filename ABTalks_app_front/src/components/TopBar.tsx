import React, { useState, useEffect } from 'react';
import { Bell, Sun, Moon, LayoutDashboard, Compass, Trophy, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDemoState } from '../context/DemoContext'; // Import Demo Context
import logoImage from '../assets/logo.png';

export const TopBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userData } = useDemoState(); // Access current demo user data

  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (savedTheme) return savedTheme;
    return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  });

  // Calculate dynamic circular progress based on overall challenge completion
  const totalDays = 60;
  const completedDays = userData.progressDays || 0;
  const progressPercentage = Math.round((completedDays / totalDays) * 100);

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progressPercentage / 100) * circumference;

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
    { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { label: 'Tracks', path: '/tracks', icon: Compass },
    { label: 'Leaderboard', path: '/leaderboard', icon: Trophy },
    { label: 'Profile', path: '/profile', icon: User },
  ];

  return (
    <>
      {/* --- DESKTOP TOP NAVIGATION BAR --- */}
      <nav className="sticky top-0 w-full z-40 px-3 sm:px-4 pt-2 pb-0">
        <div className="max-w-7xl mx-auto bg-card/80 backdrop-blur-md border border-borderline rounded-full px-4 sm:px-5 py-2 flex items-center justify-between shadow-sm">
          
          <div 
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2.5 cursor-pointer shrink-0"
          >
            <img src={logoImage} alt="ABTalks" className="w-6 h-6 object-contain" />
            <span className="font-bold text-base sm:text-lg text-header tracking-tight">ABTalks</span>
          </div>

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

          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-canvas border border-borderline flex items-center justify-center text-bodytext hover:text-header transition-colors cursor-pointer"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-yellow-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            <button className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-canvas border border-borderline flex items-center justify-center text-bodytext hover:text-header transition-colors cursor-pointer">
              <Bell className="w-4 h-4" />
              <div className="absolute top-2.5 right-2.5 w-2 h-2 bg-primary rounded-full border border-card" />
            </button>

            {/* Dynamic Profile Avatar & Progress Circle */}
            <div 
              onClick={() => navigate('/profile')}
              className={`relative w-10 h-10 sm:w-11 sm:h-11 cursor-pointer group rounded-full transition-transform hover:scale-105 ${
                location.pathname === '/profile' ? 'ring-2 ring-primary ring-offset-2 ring-offset-canvas' : ''
              }`}
            >
              <svg className="w-full h-full -rotate-90 absolute top-0 left-0" viewBox="0 0 40 40">
                <circle cx="20" cy="20" r={radius} className="fill-none stroke-borderline" strokeWidth="2.5" />
                <circle
                  cx="20"
                  cy="20"
                  r={radius}
                  className="fill-none stroke-primary transition-all duration-700"
                  strokeWidth="2.5"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute top-1 left-1 w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden bg-canvas border border-card flex items-center justify-center">
                {userData.avatar ? (
                  <img
                    src={userData.avatar}
                    alt={userData.name || 'User Avatar'}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-xs font-bold text-header">
                    {userData.initials || 'JD'}
                  </span>
                )}
              </div>
            </div>
          </div>

        </div>
      </nav>

      {/* --- MINIMALIST MOBILE BOTTOM NAVIGATION --- */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[88%] max-w-xs bg-card/90 backdrop-blur-lg border border-borderline/60 rounded-full py-2.5 px-6 shadow-xl flex items-center justify-between">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path || (item.path === '/leaderboard' && location.pathname === '/');

          return (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              aria-label={item.label}
              className={`p-2 rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center ${
                isActive
                  ? 'text-header scale-110 font-bold'
                  : 'text-bodytext/40 hover:text-header'
              }`}
            >
              <Icon className="w-5 h-5 stroke-2" />
            </button>
          );
        })}
      </div>
    </>
  );
};

export default TopBar;