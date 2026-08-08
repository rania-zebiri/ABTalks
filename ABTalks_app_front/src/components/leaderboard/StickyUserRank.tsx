import React from 'react';
import { Flame, ArrowUp } from 'lucide-react';
import type { LeaderboardUser } from './Podium';

interface StickyUserRankProps {
  user: LeaderboardUser;
}

export const StickyUserRank: React.FC<StickyUserRankProps> = ({ user }) => {
  if (!user) return null;

  return (
    <div className="fixed bottom-6 left-0 w-full px-4 z-40 animate-in slide-in-from-bottom-8 duration-500">
      <div className="max-w-3xl mx-auto">
        <div className="bg-card/95 backdrop-blur-xl border-2 border-primary rounded-[20px] p-4 flex items-center gap-4 shadow-[0_10px_40px_-10px_rgba(255,90,54,0.4)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />

          <div className="w-8 text-center font-bold text-lg text-primary">{user.rank}</div>

          <div className="relative shrink-0">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
              <img src={user.avatar} alt="You" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-1 -right-2 bg-primary text-white text-[9px] font-bold px-1.5 py-0.5 rounded border border-card">
              YOU
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <h4 className="text-header font-semibold text-sm truncate">{user.name}</h4>
            <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-medium bg-primary/10 text-primary border border-primary/20">
              {user.track}
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0 relative z-10">
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-1 text-header font-bold">
                <Flame className="w-4 h-4 text-primary fill-primary" />
                {user.streak}
              </div>
              <span className="text-[10px] text-bodytext/60 uppercase">Days</span>
            </div>

            <div className="w-6 flex justify-center text-xs">
              <ArrowUp className="w-4 h-4 text-emerald-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};