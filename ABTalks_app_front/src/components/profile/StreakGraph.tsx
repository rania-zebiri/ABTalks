import React from 'react';
import { CalendarDays } from 'lucide-react';
import { useDemoState } from '../../context/DemoContext';

export const StreakGraph: React.FC = () => {
  const { userData } = useDemoState();
  const totalDays = userData.maxDays || 60;
  const currentDay = userData.progressDays;

  const days = Array.from({ length: totalDays }, (_, i) => {
    const dayNum = i + 1;
    if (dayNum > currentDay) return { day: dayNum, status: null }; // Locked
    
    // Flag missed days if alert is active
    if (userData.missedDayAlert && (dayNum === currentDay || dayNum === currentDay - 1)) {
      return { day: dayNum, status: 0 }; // Missed
    }

    return { day: dayNum, status: 1 }; // Completed
  });

  const columns = 15;
  const rows = Math.ceil(totalDays / columns);

  return (
    <div className="panel-card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-header flex items-center gap-2">
          <CalendarDays className="w-5 h-5 text-primary" />
          Streak History
        </h3>
        <div className="text-sm font-bold text-muted">
          <span className="text-header">{currentDay}</span> / {totalDays} Days
        </div>
      </div>

      <div className="flex overflow-x-auto pb-4 hide-scrollbar">
        <div className="flex flex-col gap-2 min-w-max mx-auto">
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <div key={rowIndex} className="flex gap-2">
              {days.slice(rowIndex * columns, (rowIndex + 1) * columns).map((d) => {
                let styleClass = '';
                let hoverText = '';

                if (d.status === 1) {
                  styleClass = 'bg-primary border-primary shadow-sm hover:opacity-80';
                  hoverText = `Day ${d.day}: Completed`;
                } else if (d.status === 0) {
                  styleClass = 'bg-canvas border-borderline hover:border-muted';
                  hoverText = `Day ${d.day}: Missed`;
                } else {
                  styleClass = 'bg-canvas/30 border-transparent';
                  hoverText = `Day ${d.day}: Locked`;
                }

                return (
                  <div
                    key={d.day}
                    title={hoverText}
                    className={`w-4 h-4 sm:w-5 sm:h-5 rounded-[4px] border transition-colors cursor-pointer ${styleClass}`}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-end gap-4 mt-4 text-[10px] text-muted font-medium">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-[3px] bg-primary" />
          Completed
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-[3px] bg-canvas border border-borderline" />
          Missed
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-[3px] bg-canvas/30" />
          Locked
        </div>
      </div>
    </div>
  );
};

export default StreakGraph;