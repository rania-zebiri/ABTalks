import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, Sun, Moon } from 'lucide-react';

import logoImage from '../assets/logo.png';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex flex-col items-center px-4">
      <nav className="w-full max-w-5xl bg-card backdrop-blur-md border border-borderline rounded-full px-6 py-3 flex items-center justify-between shadow-lg">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-0.2">
          <img 
            src={logoImage} 
            alt="ABTalks Logo" 
            className="w-12 h-12 object-contain"
          />
          <span className="text-header font-bold text-lg">ABTalks</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-textBody">
          <a href="#" className="hover:text-header transition-colors">Home</a>
          <a href="#how-it-works" className="hover:text-header transition-colors">How It Works</a>
          <a href="#sample-day" className="hover:text-header transition-colors">Sample Task</a>
          <a href="#tracks" className="hover:text-header transition-colors">Tracks</a>
          <a href="#outcomes" className="hover:text-header transition-colors">Wall of Fame</a>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleTheme} 
            className="p-1.5 text-textBody hover:text-header rounded-full transition-colors cursor-pointer flex items-center justify-center"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>
          
          <a 
            href="#dashboard" 
            className="hidden sm:inline-block bg-transparent text-header border border-borderline hover:border-primaryAccent rounded-full px-5 py-1.5 text-sm font-medium transition-colors text-center"
          >
            Login
          </a>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1 text-textBody hover:text-header focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 w-full max-w-5xl bg-card border border-borderline rounded-2xl p-4 flex flex-col space-y-3 text-sm font-medium text-textBody shadow-xl">
          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-header py-1">Home</a>
          <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-header py-1">How It Works</a>
          <a href="#sample-day" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-header py-1">Sample Task</a>
          <a href="#tracks" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-header py-1">Tracks</a>
          <a href="#outcomes" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-header py-1">Wall of Fame</a>
          <a href="#dashboard" onClick={() => setIsMobileMenuOpen(false)} className="bg-primary text-white text-center rounded-full py-2 font-semibold">Login</a>
        </div>
      )}
    </header>
  );
};