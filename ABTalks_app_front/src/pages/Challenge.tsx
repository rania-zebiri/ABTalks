import React from 'react';
import { DayTopBar } from '../components/challenge/DayTopBar';
import { TaskHeader } from '../components/challenge/TaskHeader';
import { TaskContent } from '../components/challenge/TaskContent';
import { SubmissionForm } from '../components/challenge/SubmissionForm';



export const ChallengePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-canvas text-bodytext pb-12">
      <DayTopBar />
      
      <main className="grow max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 mt-20">
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