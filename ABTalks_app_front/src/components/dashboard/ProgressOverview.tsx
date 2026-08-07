import React from 'react';

export const ProgressOverview: React.FC = () => {
  const totalDays = 60;
  const currentDay = 12;
  const percentage = Math.round((currentDay / totalDays) * 100);

  return (
    <div className="panel-card">
      <div className="flex justify-between items-end mb-4">
        <div>
          <h3 className="font-bold text-header mb-1">Challenge Progress</h3>
          <div className="text-sm text-bodytext">Day {currentDay} of {totalDays}</div>
        </div>
        <div className="text-2xl font-bold text-primary">{percentage}%</div>
      </div>

      <div className="w-full h-3 bg-canvas rounded-full overflow-hidden border border-borderline mb-6">
        <div className="h-full bg-primary rounded-full relative" style={{ width: `${percentage}%` }}>
          <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/30 blur-[2px]" />
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <div className="flex-1 bg-canvas border border-borderline rounded-lg p-2.5 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-github" />
          <div className="flex flex-col">
            <span className="text-[10px] text-muted uppercase font-semibold">Completed</span>
            <span className="text-sm font-bold text-header">{currentDay}</span>
          </div>
        </div>
        <div className="flex-1 bg-canvas border border-borderline rounded-lg p-2.5 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500" />
          <div className="flex flex-col">
            <span className="text-[10px] text-muted uppercase font-semibold">Missed</span>
            <span className="text-sm font-bold text-header">2</span>
          </div>
        </div>
        <div className="flex-1 bg-canvas border border-borderline rounded-lg p-2.5 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-borderline" />
          <div className="flex flex-col">
            <span className="text-[10px] text-muted uppercase font-semibold">Remaining</span>
            <span className="text-sm font-bold text-header">{totalDays - currentDay}</span>
          </div>
        </div>
      </div>
    </div>
  );
};