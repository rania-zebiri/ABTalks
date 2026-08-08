import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DayTopBar } from '../components/challenge/DayTopBar';
import { TaskHeader } from '../components/challenge/TaskHeader';
import { TaskContent } from '../components/challenge/TaskContent';
import { SubmissionForm } from '../components/challenge/SubmissionForm';
import { useDemoState } from '../context/DemoContext';
import { getMockTaskForDay } from '../data/mockChallengeData';
import { AlertCircle } from 'lucide-react';

export const ChallengePage: React.FC = () => {
  const { userData } = useDemoState();
  const { dayNumber } = useParams<{ dayNumber: string }>();
  const navigate = useNavigate();

  // Keep track of the previous progressDays to detect manual Demo Mode switcher changes
  const prevProgressDaysRef = useRef<number | undefined>(userData.progressDays);

  const targetDemoDay = Math.max(1, userData.progressDays || 1);

  useEffect(() => {
    // Only navigate if the user explicitly changed the Demo Mode switcher state
    if (prevProgressDaysRef.current !== userData.progressDays) {
      prevProgressDaysRef.current = userData.progressDays;
      navigate(`/day/${targetDemoDay}`, { replace: true });
    }
  }, [userData.progressDays, navigate, targetDemoDay]);

  // Read current day from URL parameter (allows manual editing in address bar)
  const parsedDay = dayNumber ? parseInt(dayNumber, 10) : targetDemoDay;
  const activeDay = !isNaN(parsedDay) ? parsedDay : targetDemoDay;

  // Retrieve dynamic task details for active day
  const currentTask = getMockTaskForDay(activeDay);

  return (
    <div className="bg-canvas text-bodytext pb-12">
      {/* Day Navigation Bar */}
      <DayTopBar currentDay={currentTask.day} />

      {/* Main Content */}
      <main className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8 space-y-6">
        
        {/* Streak Recovery Alert */}
        {userData.missedDayAlert && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-4 flex items-center gap-3 text-red-400 text-sm font-semibold">
            <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
            <span>
              Streak Recovery: Submit today's challenge for Day {currentTask.day} before midnight to repair your streak!
            </span>
          </div>
        )}

        <div className="space-y-8">
          <TaskHeader task={currentTask} />
          <TaskContent task={currentTask} />
          <SubmissionForm day={currentTask.day} />
        </div>
      </main>
    </div>
  );
};

export default ChallengePage;