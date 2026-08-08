import React, { useState } from 'react';
import { Square, Lightbulb, ChevronDown, ExternalLink } from 'lucide-react';
import type { ChallengeTask } from '../../data/mockChallengeData';

interface TaskContentProps {
  task: ChallengeTask;
}

export const TaskContent: React.FC<TaskContentProps> = ({ task }) => {
  const [showHint, setShowHint] = useState(false);

  return (
    <div className="bg-card rounded-2xl border border-borderline p-6 space-y-8">
      <div>
        <h3 className="text-xl font-bold text-header mb-3">What you'll build</h3>
        <div className="text-bodytext leading-relaxed text-sm md:text-base space-y-4">
          <p>{task.description}</p>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-header mb-3">Requirements</h3>
        <ul className="space-y-3">
          {task.requirements.map((req, index) => (
            <li key={index} className="flex items-start gap-3 text-bodytext text-sm md:text-base">
              <Square className="w-4 h-4 mt-1 text-muted shrink-0" />
              <span>{req}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-borderline pt-6">
        <button 
          onClick={() => setShowHint(!showHint)}
          className="flex items-center justify-between w-full text-left cursor-pointer"
        >
          <span className="font-semibold text-header flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-yellow-500 fill-yellow-500/20" />
            <span>Need a hint?</span>
          </span>
          <ChevronDown className={`w-4 h-4 text-muted transition-transform duration-300 ${showHint ? 'rotate-180' : ''}`} />
        </button>
        
        {showHint && (
          <div className="mt-4 p-4 bg-canvas rounded-xl border border-borderline text-sm text-bodytext space-y-3">
            <p>
              Focus on breaking down the requirement logic for Day {task.day}. Ensure error handling and edge cases are safely addressed before submitting.
            </p>
            <a href="#" className="text-linkedin hover:underline font-medium inline-flex items-center gap-1">
              <span>Docs: React & JS standard practices</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskContent;