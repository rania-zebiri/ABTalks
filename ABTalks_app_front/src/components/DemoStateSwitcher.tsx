import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDemoState } from '../context/DemoContext';
import type { StudentStateKey } from '../data/mockUserStates';
import { Sliders } from 'lucide-react';

export const DemoStateSwitcher: React.FC = () => {
  const { currentStateKey, setDemoState } = useDemoState();
  const location = useLocation();

  // Hide the switcher completely on the Landing Page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <div className="fixed bottom-24 md:bottom-8 right-4 z-50 bg-card border border-borderline rounded-xl p-3 shadow-2xl flex items-center gap-2 transition-all">
      <Sliders className="w-4 h-4 text-primary shrink-0" />
      <span className="text-xs font-bold text-header uppercase tracking-wider hidden sm:inline select-none">
        Demo Mode:
      </span>
      <select
        value={currentStateKey}
        onChange={(e) => setDemoState(e.target.value as StudentStateKey)}
        className="bg-canvas border border-borderline text-xs font-medium text-header rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer transition-colors"
      >
        <option value="first_day" className="bg-card text-header">First Day (New Student)</option>
        <option value="missed_day" className="bg-card text-header">Missed Day Alert</option>
        <option value="empty_profile" className="bg-card text-header">Empty Profile</option>
        <option value="active_student" className="bg-card text-header">Active Student (12/60)</option>
      </select>
    </div>
  );
};

export default DemoStateSwitcher;