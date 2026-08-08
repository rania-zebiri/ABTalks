import React from 'react';
import { Clock } from 'lucide-react';

export const TaskHeader: React.FC = () => {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="px-3 py-1 bg-orange-500/10 text-orange-500 rounded-md text-xs font-bold border border-orange-500/20">
          Web Development
        </span>
        <span className="px-3 py-1 bg-card border border-borderline text-muted rounded-md text-xs font-bold">
          Medium
        </span>
        <span className="px-3 py-1 bg-card border border-borderline text-muted rounded-md text-xs font-bold flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" />
          <span>~2 hours</span>
        </span>
      </div>
      
      <h1 className="text-3xl md:text-4xl font-extrabold text-header mb-2 leading-tight">
        Build a Custom Hook for LocalStorage
      </h1>
      <p className="text-bodytext text-lg">
        Persist React state seamlessly across browser reloads without boilerplate.
      </p>
    </div>
  );
};