import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Code2, Zap } from 'lucide-react';
import { useDemoState } from '../../context/DemoContext';
export const TodayChallengeHero: React.FC = () => {
  const navigate = useNavigate();
  const { userData } = useDemoState();

  // Dynamic Day Computation
  const currentDay = userData.progressDays === 0 ? 1 : userData.progressDays;

  return (
    <div className={`rounded-3xl p-6 md:p-8 text-white relative overflow-hidden shadow-lg transition-all duration-300 ${
      userData.missedDayAlert 
        ? 'bg-linear-to-r from-red-600 via-orange-600 to-amber-600' 
        : 'bg-linear-to-r from-orange-600 via-orange-500 to-amber-500'
    }`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
        
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold tracking-wider uppercase bg-white/20 px-3 py-1 rounded-full text-white">
              {userData.missedDayAlert ? 'STREAK ALERT' : "TODAY'S TASK"}
            </span>
            <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full text-white">
              Day {currentDay}
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight">
            {userData.progressDays === 0 
              ? "Welcome! Start Day 1: HTML & CSS Fundamentals" 
              : userData.missedDayAlert 
              ? "Complete Today's Task to Recover Your Streak!" 
              : "Build a REST API with Node.js"}
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
            onClick={() => navigate(`/day/${currentDay}`)}
            className="bg-white hover:bg-slate-100 text-orange-600 font-bold px-6 py-3.5 rounded-2xl flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer text-sm md:text-base"
          >
            <span>
              {userData.progressDays === 0 
                ? 'Start Day 1' 
                : `Continue Day ${currentDay}`}
            </span>
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

export default TodayChallengeHero;