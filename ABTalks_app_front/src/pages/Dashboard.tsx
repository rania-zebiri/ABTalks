import React from 'react';
import { TopBar } from '../components/dashboard/TopBar';
import { ProfileStatCard } from '../components/dashboard/ProfileStatCard';
import { ProgressOverview } from '../components/dashboard/ProgressOverview';
import { MotivationPanel } from '../components/dashboard/MotivationPanel';
import { TodayChallengeHero } from '../components/dashboard/TodayChallengeHero';
import { WeeklyActivityChart } from '../components/dashboard/WeeklyActivityChart';
import { AchievementsRow } from '../components/dashboard/AchievementsRow';

export const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-canvas text-bodytext pb-12 transition-colors duration-300">
      <TopBar />
      
      <main className="grow pt-24 px-4 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <ProfileStatCard />
          <ProgressOverview />
          <MotivationPanel />
        </div>

        {/* Right Column */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <TodayChallengeHero />
          <div className="grid md:grid-cols-2 gap-6">
            <WeeklyActivityChart />
            <div className="panel-card flex flex-col">
              <h3 className="font-bold text-header mb-4">Recent Activity</h3>
              <div className="grow flex items-center justify-center text-[11px] font-semibold text-muted uppercase tracking-widest border border-dashed border-borderline rounded-xl p-4">
                More activity details here
              </div>
            </div>
          </div>
          <AchievementsRow />
        </div>
      </main>
    </div>
  );
};