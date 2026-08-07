import React from 'react';
import { Code2, Zap, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export const TodayChallengeHero: React.FC = () => {
  return (
    <div className="rounded-2xl p-0 overflow-hidden relative group cursor-pointer border border-borderline shadow-2xl">
      <div className="absolute inset-0 bg-linear-to-br from-primary to-orange-600 opacity-90 group-hover:opacity-100 transition-opacity" />
      <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white opacity-10 rounded-full orb-blur" />

      <div className="relative z-10 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[11px] font-semibold text-white/80 uppercase tracking-widest">TODAY'S TASK</span>
            <span className="px-2 py-0.5 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-sm">Day 12</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
            Build a REST API with Node.js
          </h2>

          <div className="flex flex-wrap items-center gap-3 mt-4">
            <span className="px-3 py-1 rounded-md bg-canvas/40 backdrop-blur-sm text-white text-xs font-medium border border-white/10 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5" /> Backend Track
            </span>
            <span className="px-3 py-1 rounded-md bg-canvas/40 backdrop-blur-sm text-white text-xs font-medium border border-white/10 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-yellow-400" /> Intermediate
            </span>
          </div>
        </div>

        <div className="shrink-0 flex flex-col items-center md:items-end w-full md:w-auto">
          <button className="w-full md:w-auto bg-white text-primary font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
            Continue Day 12
            <ArrowRight className="w-5 h-5" />
          </button>
          <div className="flex gap-2 mt-4 text-white/60">
            <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};