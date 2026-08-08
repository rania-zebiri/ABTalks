import React from 'react';
import { Clock } from 'lucide-react';

import type { ChallengeTask } from '../../data/mockChallengeData';
interface TaskHeaderProps {
  task: ChallengeTask;
}

export const TaskHeader: React.FC<TaskHeaderProps> = ({ task }) => {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="px-3 py-1 bg-orange-500/10 text-orange-500 rounded-md text-xs font-bold border border-orange-500/20">
          {task.category}
        </span>
        <span className="px-3 py-1 bg-card border border-borderline text-muted rounded-md text-xs font-bold">
          {task.difficulty}
        </span>
        <span className="px-3 py-1 bg-card border border-borderline text-muted rounded-md text-xs font-bold flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" />
          <span>~2 hours</span>
        </span>
      </div>
      
      <h1 className="text-3xl md:text-4xl font-extrabold text-header mb-2 leading-tight">
        {task.title}
      </h1>
      <p className="text-bodytext text-lg">
        {task.description}
      </p>
    </div>
  );
};

export default TaskHeader;