import React from 'react';
import { useDemoState } from '../../context/DemoContext';

export const ProfileStatCard: React.FC = () => {
  const { userData } = useDemoState();

  return (
    <div className="panel-card flex flex-col items-center text-center p-6">
      <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center font-bold text-xl text-header mb-4 overflow-hidden border border-borderline">
        {userData.avatar ? (
          <img src={userData.avatar} alt={userData.name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-primary font-bold text-2xl">{userData.initials}</span>
        )}
      </div>

      <h2 className="text-xl font-bold text-header flex items-center gap-2">
        Welcome back, {userData.name.split(' ')[0]} 👋
      </h2>
      <span className="text-xs text-muted mt-1 bg-canvas border border-borderline px-3 py-1 rounded-full">
        Rank #{userData.streakDays > 0 ? '142' : 'Unranked'}
      </span>

      <div className="grid grid-cols-3 gap-3 w-full mt-6">
        <div className="bg-canvas border border-borderline rounded-xl p-3 flex flex-col items-center">
          <span className="text-lg font-bold text-header">{userData.streakDays}</span>
          <span className="text-[10px] font-semibold text-muted uppercase">Current Streak</span>
        </div>
        <div className="bg-canvas border border-borderline rounded-xl p-3 flex flex-col items-center">
          <span className="text-lg font-bold text-header">{userData.streakDays > 0 ? 18 : 0}</span>
          <span className="text-[10px] font-semibold text-muted uppercase">Longest Streak</span>
        </div>
        <div className="bg-canvas border border-borderline rounded-xl p-3 flex flex-col items-center">
          <span className="text-lg font-bold text-header">{userData.progressDays}</span>
          <span className="text-[10px] font-semibold text-muted uppercase">Total Subs</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileStatCard;