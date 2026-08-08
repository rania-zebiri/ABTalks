import React from 'react';
import { Globe } from 'lucide-react';

// Import your custom logo image (adjust the path to match your project)
import logoImage from "../../assets/logo.png";

export const Footer: React.FC = () => {
  const currentYear = 2026;

  return (
    <footer>
      {/* Final CTA Block */}
      <div className="bg-header text-canvas py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-canvas">Day 1 starts the moment you click this.</h2>
          <a href="#dashboard" className="inline-flex px-8 py-4 rounded-full bg-primary text-white font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Start Your Streak Now
          </a>
        </div>
      </div>

      {/* Footer proper */}
      <div className="bg-canvas border-t border-borderline py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo & Brand Name */}
          <div className="flex items-center gap-0.5">
            <img 
              src={logoImage} 
              alt="ABTalks Logo" 
              className="w-12 h-12 object-contain" 
            />
            <span className="text-header font-bold text-xl">ABTalks</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-bodytext">
            <a href="#terms" className="hover:text-header transition-colors">Terms</a>
            <a href="#privacy" className="hover:text-header transition-colors">Privacy</a>
            <a href="#contact" className="hover:text-header transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-muted hover:text-header transition-colors">
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center md:text-left text-xs text-muted">
          &copy; {currentYear} ABTalks. All rights reserved. Not affiliated with GitHub or LinkedIn.
        </div>
      </div>
    </footer>
  );
};