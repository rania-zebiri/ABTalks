import React from 'react';
import { Flame, ArrowUp, ArrowDown, Minus } from 'lucide-react';
import type { LeaderboardUser } from './Podium';

interface RankListProps {
  users: LeaderboardUser[];
  startIndex: number;
}

export const RankList: React.FC<RankListProps> = ({ users, startIndex }) => {
  return (
    <div className="flex flex-col gap-3">
      {users.map((user, i) => {
        const rank = startIndex + i;

        return (
          <div
            key={user.id}
            className="bg-card border border-borderline rounded-2xl p-4 flex items-center gap-4 hover:border-primary/40 transition-colors"
          >
            <div className={`w-8 text-center font-bold text-lg ${rank <= 10 ? 'text-primary' : 'text-bodytext/60'}`}>
              {rank}
            </div>

            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-canvas shrink-0">
              <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-header font-semibold text-sm truncate">{user.name}</h4>
              <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-medium bg-primary/10 text-primary border border-primary/20">
                {user.track}
              </span>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-1 text-header font-bold">
                  <Flame className="w-4 h-4 text-primary fill-primary" />
                  {user.streak}
                </div>
                <span className="text-[10px] text-bodytext/60 uppercase">Days</span>
              </div>

              <div className="w-6 flex justify-center text-xs">
                {user.trend === 'up' && <ArrowUp className="w-4 h-4 text-emerald-500" />}
                {user.trend === 'down' && <ArrowDown className="w-4 h-4 text-rose-500" />}
                {user.trend === 'same' && <Minus className="w-4 h-4 text-bodytext/40" />}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};