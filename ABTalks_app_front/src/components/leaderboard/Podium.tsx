import React from 'react';
import { Flame, Crown, Medal } from 'lucide-react';

export interface LeaderboardUser {
  id: number;
  name: string;
  track: string;
  streak: number;
  trend: 'up' | 'down' | 'same';
  avatar: string;
  rank?: number;
}

interface PodiumProps {
  top3: LeaderboardUser[];
}

export const Podium: React.FC<PodiumProps> = ({ top3 }) => {
  if (!top3 || top3.length < 3) return null;

  const podiumDisplay = [
    { ...top3[1], rank: 2, height: 'h-40', color: 'bg-zinc-300', isCrown: false },
    { ...top3[0], rank: 1, height: 'h-48', color: 'bg-yellow-400', isCrown: true },
    { ...top3[2], rank: 3, height: 'h-32', color: 'bg-amber-600', isCrown: false }
  ];

  return (
    <div className="flex items-end justify-center gap-2 sm:gap-4 mt-8 mb-4 px-2">
      {podiumDisplay.map((user) => (
        <div key={user.id} className="flex flex-col items-center relative w-24 sm:w-32">
          {user.rank === 1 && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/20 blur-[30px] rounded-full pointer-events-none" />
          )}

          <div className="relative mb-3 flex flex-col items-center z-10">
            <div
              className={`absolute -top-6 w-8 h-8 rounded-full flex items-center justify-center bg-card border border-borderline shadow-lg z-20 ${
                user.rank === 1 ? 'text-yellow-400' : 'text-bodytext'
              }`}
            >
              {user.isCrown ? <Crown className="w-4 h-4 fill-yellow-400" /> : <Medal className="w-4 h-4" />}
            </div>
            <div
              className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-[3px] shadow-xl ${
                user.rank === 1 ? 'border-primary' : 'border-card'
              }`}
            >
              <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
            </div>
            <div className="mt-2 text-center">
              <h3 className="text-header font-bold text-xs sm:text-sm truncate w-full px-1">{user.name}</h3>
              <div className="inline-flex items-center gap-1 mt-1 text-primary text-xs font-bold bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
                <Flame className="w-3 h-3 fill-primary" />
                {user.streak}
              </div>
            </div>
          </div>

          <div className={`w-full ${user.height} rounded-t-2xl relative overflow-hidden flex flex-col justify-end bg-gradient-to-t from-canvas to-card border border-borderline border-b-0`}>
            <div className={`h-1 w-full absolute top-0 ${user.color}`} />
            <div className="text-center pb-4 w-full">
              <span className="text-3xl sm:text-5xl font-bold text-header/10">{user.rank}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};