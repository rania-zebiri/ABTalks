import React, { useState } from 'react';
import { Flame, Trophy, CalendarCheck, LayoutGrid, Pencil } from 'lucide-react';
import { useDemoState } from '../../context/DemoContext';

export const ProfileHeader: React.FC = () => {
  const { userData } = useDemoState();
  const [imageError, setImageError] = useState(false);

  const completedDays = userData.progressDays;
  const totalDays = userData.maxDays || 60;
  const progressPercentage = (completedDays / totalDays) * 100;

  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progressPercentage / 100) * circumference;

  return (
    <div className="panel-card flex flex-col md:flex-row items-center md:items-start gap-8 relative overflow-hidden">
      {/* Avatar with Progress Ring */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg className="w-40 h-40 transform -rotate-90">
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-borderline"
          />
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="var(--color-primary, #FF5E3A)"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out drop-shadow-lg"
          />
        </svg>

        {/* Profile Inner Circle */}
        <div className="absolute w-28 h-28 rounded-full overflow-hidden flex items-center justify-center z-10 shadow-inner">
          {userData.avatar && !imageError ? (
            <img 
              src={userData.avatar} 
              alt={userData.name} 
              onError={() => setImageError(true)}
              className="w-full h-full object-cover" 
            />
          ) : (
            <div className="w-full h-full bg-linear-to-br from-[#FF7E40] to-[#FF4500] flex items-center justify-center text-white text-5xl font-extrabold select-none">
              {userData.initials || userData.name.charAt(0)}
            </div>
          )}
        </div>

        {/* Completion Badge */}
        <div className="absolute bottom-1 right-2 z-20 bg-card border-2 border-borderline px-2.5 py-0.5 rounded-full text-xs font-bold text-header shadow-md">
          {completedDays}/{totalDays}
        </div>
      </div>

      {/* User Information */}
      <div className="grow text-center md:text-left z-10 w-full pt-2">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
          <div>
            <h1 className="text-3xl font-extrabold text-header mb-1">{userData.name}</h1>
            <div className="text-sm text-muted font-medium mb-3">University of Texas at Austin</div>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-500/10 text-orange-500 rounded-md text-xs font-bold border border-orange-500/20 w-fit mx-auto md:mx-0">
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Web Development</span>
          </div>
        </div>

        <div className="group relative inline-flex items-center gap-2 mb-6 cursor-pointer hover:bg-canvas rounded-lg px-2 py-1 -ml-2 transition-colors">
          <p className="text-bodytext text-sm md:text-base italic">"Building in public, one commit at a time."</p>
          <Pencil className="w-3.5 h-3.5 text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Streak & Activity Stats */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-4 pt-4 border-t border-borderline">
          {/* Current Streak */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center">
              <Flame className="w-4 h-4 fill-orange-500" />
            </div>
            <div>
              <div className="text-sm font-bold text-header">{userData.streakDays}</div>
              <div className="text-[10px] text-muted uppercase tracking-wider font-semibold">Current Streak</div>
            </div>
          </div>

          {/* Longest Streak (fallback to streakDays) */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-purple-500/10 text-purple-500 flex items-center justify-center">
              <Trophy className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-header">{userData.streakDays}</div>
              <div className="text-[10px] text-muted uppercase tracking-wider font-semibold">Longest Streak</div>
            </div>
          </div>

          {/* Total Days Completed */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center">
              <CalendarCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-header">{userData.progressDays}</div>
              <div className="text-[10px] text-muted uppercase tracking-wider font-semibold">Total Days</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;