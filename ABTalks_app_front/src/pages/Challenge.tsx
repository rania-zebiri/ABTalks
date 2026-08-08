import React from 'react';
import { DayTopBar } from '../components/challenge/DayTopBar';
import { TaskHeader } from '../components/challenge/TaskHeader';
import { TaskContent } from '../components/challenge/TaskContent';
import { SubmissionForm } from '../components/challenge/SubmissionForm';
import { useDemoState } from '../context/DemoContext';
import { AlertCircle } from 'lucide-react';

export const ChallengePage: React.FC = () => {
  const { userData } = useDemoState();

  return (
    <div className="min-h-screen flex flex-col bg-canvas text-bodytext pb-12">
      <DayTopBar />
      
      <main className="grow max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 mt-20 space-y-6">
        
        {/* Streak Recovery Alert for Missed Days */}
        {userData.missedDayAlert && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-4 flex items-center gap-3 text-red-400 text-sm font-semibold">
            <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
            <span>
              Streak Recovery: Submit today's challenge before midnight to repair your streak!
            </span>
          </div>
        )}

        <div className="space-y-8">
          <TaskHeader />
          <TaskContent />
          <SubmissionForm />
        </div>
      </main>
    </div>
  );
};

export default ChallengePage;