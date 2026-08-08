import React from 'react';
import { Award, Rocket, Flame, Lock } from 'lucide-react';

export const BadgeCase: React.FC = () => {
  const badges = [
    { id: 1, title: 'First Commit', day: 'Day 1', unlocked: true, icon: Rocket, color: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
    { id: 2, title: '7 Day Streak', day: 'Day 7', unlocked: true, icon: Flame, color: 'bg-orange-500/10 text-orange-400 border-orange-500/20' },
    { id: 3, title: 'Fast Learner', day: 'Locked', unlocked: false, icon: Lock, color: 'bg-canvas/50 border-borderline/50 text-muted/60' },
    { id: 4, title: '30 Day Streak', day: 'Locked', unlocked: false, icon: Lock, color: 'bg-canvas/50 border-borderline/50 text-muted/60' },
    { id: 5, title: 'Halfway There', day: 'Locked', unlocked: false, icon: Lock, color: 'bg-canvas/50 border-borderline/50 text-muted/60' },
    { id: 6, title: 'Track Finisher', day: 'Locked', unlocked: false, icon: Lock, color: 'bg-canvas/50 border-borderline/50 text-muted/60' },
    { id: 7, title: 'Top 10 Rank', day: 'Locked', unlocked: false, icon: Lock, color: 'bg-canvas/50 border-borderline/50 text-muted/60' },
    { id: 8, title: 'Bug Hunter', day: 'Locked', unlocked: false, icon: Lock, color: 'bg-canvas/50 border-borderline/50 text-muted/60' },
    { id: 9, title: 'Community Hero', day: 'Locked', unlocked: false, icon: Lock, color: 'bg-canvas/50 border-borderline/50 text-muted/60' },
  ];

  return (
    /* The id="badge-case" combined with scroll-mt-20 offsets sticky headers */
    <div id="badge-case" className="panel-card h-[400px] flex flex-col scroll-mt-20">
      <div className="flex items-center justify-between mb-4 shrink-0">
        <h3 className="text-lg font-bold text-header flex items-center gap-2">
          <Award className="w-5 h-5 text-primary" />
          Badge Case
        </h3>
      </div>

      <div className="overflow-y-auto pr-1 grow grid grid-cols-3 gap-y-6 gap-x-4 auto-rows-max custom-scrollbar">
        {badges.map((badge) => {
          const Icon = badge.icon;
          return (
            <div
              key={badge.id}
              className="flex flex-col items-center text-center p-2 rounded-xl transition-colors hover:bg-canvas/40"
            >
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center border mb-3 transition-transform hover:scale-105 ${badge.color}`}
              >
                <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div className="text-xs sm:text-sm font-bold text-header truncate w-full">
                {badge.title}
              </div>
              <div className="text-[10px] sm:text-xs text-muted font-medium mt-0.5">
                {badge.day}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BadgeCase;