import React from 'react';
import { ArrowRight, User } from 'lucide-react';
import coderImage from '../assets/coder_man.png';

export const Hero: React.FC = () => {
  const scrollToSample = () => {
    const el = document.getElementById('sample-day');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-44 pb-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full orb-blur -z-10 mix-blend-screen" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-linkedin/30 rounded-full orb-blur -z-10 mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column */}
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 text-header">
              Code every day.<br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-orange-400">
                Get seen by recruiters.
              </span>
            </h1>
            <p className="text-xl text-bodytext mb-8 max-w-lg leading-relaxed">
              60 days. One task a day. Proof on GitHub and LinkedIn no gatekeeping, no fluff.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a href="#dashboard" className="pill-btn-primary group">
                Start Your Streak
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <button onClick={scrollToSample} className="ghost-btn">
                See a sample day <ArrowRight className="w-4 h-4 ml-1 text-sm" />
              </button>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 rounded-full border-2 border-canvas bg-elevated overflow-hidden flex items-center justify-center"
                  >
                    <User className="w-4 h-4 text-muted" />
                  </div>
                ))}
              </div>
              <span className="text-sm text-muted font-medium">
                1,240 students coding right now
              </span>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative mx-auto w-full flex items-center justify-center">
            
            {/* Centered Orange Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-112.5 h-112.5 bg-primary/45 rounded-full orb-blur -z-10 mix-blend-screen pointer-events-none" />
            
            {/* Image shifted UP (-translate-y-6) and RIGHT (lg:translate-x-16) */}
            <img 
              src={coderImage} 
              alt="Programmer working on laptop" 
              className="w-full h-auto object-contain transform-gpu scale-150 lg:scale-175 lg:translate-x-16 -translate-y-6 lg:-translate-y-8 origin-center transition-transform duration-500 ease-out hover:scale-[1.8]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};