import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Code2, Zap } from 'lucide-react';

export const TodayChallengeHero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 rounded-3xl p-6 md:p-8 text-white relative overflow-hidden shadow-lg">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
        
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold tracking-wider uppercase bg-white/20 px-3 py-1 rounded-full text-white">
              TODAY'S TASK
            </span>
            <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full text-white">
              Day 12
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight">
            Build a REST API with Node.js
          </h1>

          <div className="flex items-center gap-3 text-xs font-semibold">
            <span className="bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5" /> Backend Track
            </span>
            <span className="bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-300" /> Intermediate
            </span>
          </div>
        </div>

        {/* Action Button & Controls */}
        <div className="flex flex-col items-end gap-4 shrink-0">
          <button
            onClick={() => navigate('/day/12')}
            className="bg-white hover:bg-slate-100 text-orange-600 font-bold px-6 py-3.5 rounded-2xl flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer text-sm md:text-base"
          >
            <span>Continue Day 12</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            <button className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors cursor-pointer">
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>
            <button className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors cursor-pointer">
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};