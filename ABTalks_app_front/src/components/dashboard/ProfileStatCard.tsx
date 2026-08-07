import React from 'react';
import { Flame, Calendar, CheckCircle2 } from 'lucide-react';

export const ProfileStatCard: React.FC = () => {
  return (
    <div className="panel-card flex flex-col items-center text-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 orb-blur rounded-full pointer-events-none" />

      <div className="relative w-20 h-20 mb-4 mt-2">
        <svg className="w-full h-full -rotate-90 absolute top-0 left-0" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="18" className="fill-none stroke-borderline" strokeWidth="2" />
          <circle cx="20" cy="20" r="18" className="fill-none stroke-primary" strokeWidth="2" strokeDasharray="113.097" strokeDashoffset="22.6" strokeLinecap="round" />
        </svg>
        <div className="absolute top-0.5 left-0.5 w-19 h-19 rounded-full overflow-hidden bg-canvas border-4 border-card">
          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80" alt="Aditya" className="w-full h-full object-cover" />
        </div>
      </div>

      <h2 className="text-xl font-bold text-header mb-1">Welcome back, Aditya 👋</h2>
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-canvas border border-primary/20 text-xs font-medium text-primary mb-6">
        <Flame className="w-3.5 h-3.5" />
        Rank #142
      </div>

      <div className="w-full grid grid-cols-3 gap-2 pt-4 border-t border-borderline/50">
        <div className="flex flex-col items-center p-2 rounded-xl bg-canvas">
          <Calendar className="w-4 h-4 text-primary mb-1" />
          <div className="text-lg font-bold text-header leading-none mb-1">12</div>
          <div className="text-[10px] text-muted uppercase font-semibold">Current Streak</div>
        </div>
        <div className="flex flex-col items-center p-2 rounded-xl bg-canvas">
          <Flame className="w-4 h-4 text-github mb-1" />
          <div className="text-lg font-bold text-header leading-none mb-1">18</div>
          <div className="text-[10px] text-muted uppercase font-semibold">Longest Streak</div>
        </div>
        <div className="flex flex-col items-center p-2 rounded-xl bg-canvas">
          <CheckCircle2 className="w-4 h-4 text-linkedin mb-1" />
          <div className="text-lg font-bold text-header leading-none mb-1">24</div>
          <div className="text-[10px] text-muted uppercase font-semibold">Total Subs</div>
        </div>
      </div>
    </div>
  );
};