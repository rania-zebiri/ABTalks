import React from 'react';
import { Flame, Shield, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDemoState } from '../../context/DemoContext';

export const AchievementsRow: React.FC = () => {
  const { currentStateKey } = useDemoState();

  // Dynamic status mapping per demo mode
  const isFirstCommitUnlocked = currentStateKey === 'active_student' || currentStateKey === 'missed_day';
  const is7DayStreakUnlocked = currentStateKey === 'active_student';
  const isLinkedinUnlocked = currentStateKey === 'active_student' || currentStateKey === 'missed_day';

  const badges = [
    {
      id: 1,
      name: "First Commit",
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
      color: isFirstCommitUnlocked ? "text-github bg-github/10 border-github/30" : "text-muted bg-canvas border-borderline",
      locked: !isFirstCommitUnlocked,
    },
    { 
      id: 2, 
      name: "7-Day Streak", 
      icon: <Flame className="w-6 h-6" />, 
      color: is7DayStreakUnlocked ? "text-primary bg-primary/10 border-primary/30" : "text-muted bg-canvas border-borderline", 
      locked: !is7DayStreakUnlocked 
    },
    {
      id: 3,
      name: "LinkedIn Post",
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      ),
      color: isLinkedinUnlocked ? "text-linkedin bg-linkedin/10 border-linkedin/30" : "text-muted bg-canvas border-borderline",
      locked: !isLinkedinUnlocked,
    },
    { id: 4, name: "30-Day Warrior", icon: <Shield className="w-6 h-6" />, color: "text-muted bg-canvas border-borderline", locked: true },
    { id: 5, name: "Top 10 Rank", icon: <Trophy className="w-6 h-6" />, color: "text-muted bg-canvas border-borderline", locked: true },
  ];

  return (
    <div className="panel-card overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-header">Badges & Achievements</h3>
        
        {/* Linked directly to the BadgeCase section on the Profile page */}
        <Link 
          to="/profile#badge-case" 
          className="text-sm text-primary font-medium hover:underline cursor-pointer"
        >
          View all
        </Link>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none -mx-2 px-2">
        {badges.map((badge) => (
          <div key={badge.id} className="flex flex-col items-center gap-2 min-w-20 shrink-0 group cursor-pointer">
            <div className={`w-16 h-16 rounded-2xl border flex items-center justify-center transition-all ${badge.color} ${badge.locked ? 'opacity-50' : 'group-hover:scale-105'}`}>
              {badge.icon}
            </div>
            <span className={`text-[10px] text-center font-semibold uppercase tracking-wider ${badge.locked ? 'text-muted' : 'text-bodytext group-hover:text-header'}`}>
              {badge.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsRow;