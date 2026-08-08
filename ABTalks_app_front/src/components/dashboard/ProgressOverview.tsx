import React from 'react';
import { useDemoState } from '../../context/DemoContext';

export const ProgressOverview: React.FC = () => {
  const { userData } = useDemoState();
  const percentage = Math.round((userData.progressDays / userData.maxDays) * 100);

  return (
    <div className="panel-card p-6 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold text-header text-sm">Challenge Progress</h3>
          <p className="text-xs text-muted">
            Day {userData.progressDays} of {userData.maxDays}
          </p>
        </div>
        <span className="text-xl font-extrabold text-primary">{percentage}%</span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-canvas border border-borderline rounded-full h-3 overflow-hidden">
        <div
          className="bg-primary h-full transition-all duration-500 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="grid grid-cols-3 gap-2 mt-2">
        <div className="bg-canvas border border-borderline rounded-xl p-2.5 text-center">
          <div className="text-xs font-bold text-header">{userData.progressDays}</div>
          <div className="text-[9px] text-muted font-semibold uppercase">Completed</div>
        </div>
        <div className="bg-canvas border border-borderline rounded-xl p-2.5 text-center">
          <div className="text-xs font-bold text-red-400">
            {userData.missedDayAlert ? 1 : 0}
          </div>
          <div className="text-[9px] text-muted font-semibold uppercase">Missed</div>
        </div>
        <div className="bg-canvas border border-borderline rounded-xl p-2.5 text-center">
          <div className="text-xs font-bold text-header">
            {userData.maxDays - userData.progressDays}
          </div>
          <div className="text-[9px] text-muted font-semibold uppercase">Remaining</div>
        </div>
      </div>
    </div>
  );
};

export default ProgressOverview;