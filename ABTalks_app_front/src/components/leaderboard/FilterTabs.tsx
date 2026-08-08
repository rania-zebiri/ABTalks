import React from 'react';

interface FilterTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const FilterTabs: React.FC<FilterTabsProps> = ({ activeTab, setActiveTab }) => {
  const tabs = ['This Week', 'All Time', 'My Track'];

  return (
    <div className="flex items-center justify-center w-full">
      <div className="inline-flex bg-canvas border border-borderline p-1 rounded-full">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === tab
                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                : 'text-bodytext hover:text-header bg-transparent'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};