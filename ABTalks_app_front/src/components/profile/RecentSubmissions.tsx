import React from 'react';
import { List, GitBranch, FolderOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDemoState } from '../../context/DemoContext';

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export const RecentSubmissions: React.FC = () => {
  const { userData } = useDemoState();
  const submissions = userData.recentSubmissions || [];

  if (submissions.length === 0) {
    return (
      <div className="panel-card h-full flex flex-col items-center justify-center text-center p-8">
        <div className="w-12 h-12 mx-auto rounded-full bg-canvas flex items-center justify-center mb-4">
          <FolderOpen className="w-6 h-6 text-muted" />
        </div>
        <h3 className="text-header font-bold mb-2">No Submissions Yet</h3>
        <p className="text-sm text-bodytext">Your submissions will show up here once you complete Day 1.</p>
      </div>
    );
  }

  return (
    <div className="panel-card h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-header flex items-center gap-2">
          <List className="w-5 h-5 text-primary" />
          Recent Submissions
        </h3>
      </div>

      <div className="space-y-3 grow">
        {submissions.map((sub, index) => {
          const dayNumber = sub.id || (sub as { day?: number }).day || index + 1;

          return (
            <Link
              key={dayNumber}
              to={`/day/${dayNumber}`}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-canvas transition-colors border border-transparent hover:border-borderline group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 bg-primary/10 text-primary border border-primary/20">
                  {dayNumber}
                </div>
                <div className="text-sm font-semibold text-header truncate max-w-40 sm:max-w-50 group-hover:text-primary transition-colors">
                  {sub.title}
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <GitBranch className="w-4 h-4 text-github" />
                <LinkedinIcon className="w-4 h-4 text-linkedin" />
              </div>
            </Link>
          );
        })}
      </div>

      <div className="pt-4 mt-2 border-t border-borderline text-center">
        <button className="text-xs font-bold text-muted hover:text-primary transition-colors uppercase tracking-wider cursor-pointer">
          View All History
        </button>
      </div>
    </div>
  );
};

export default RecentSubmissions;