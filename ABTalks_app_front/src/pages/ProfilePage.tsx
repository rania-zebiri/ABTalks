import React from 'react';

import { ProfileHeader } from '../components/profile/ProfileHeader';
import { StreakGraph } from '../components/profile/StreakGraph';
import { BadgeCase } from '../components/profile/BadgeCase';
import { RecentSubmissions } from '../components/profile/RecentSubmissions';
import { useDemoState } from '../context/DemoContext';
import { FileCode2 } from 'lucide-react';

export const ProfilePage: React.FC = () => {
  const { userData } = useDemoState();

  return (
    <div className="bg-canvas text-bodytext pb-12">
      {/* 
        FIXED: Removed `min-h-screen`, `mt-16`, and reduced vertical padding 
        from `py-8 md:py-12` to `pt-3 pb-8` so it sits snug under TopBar 
      */}
      <main className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-8">
        <div className="space-y-6">
          {/* Profile Header (Avatar, Name, Initials) */}
          <ProfileHeader />

          {/* Activity / Streak Heatmap */}
          <StreakGraph />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Badge Showcase */}
            <BadgeCase />

            {/* Conditional Submissions List vs Empty State */}
            {userData.recentSubmissions.length > 0 ? (
              <RecentSubmissions />
            ) : (
              <div className="panel-card bg-card border border-borderline rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-3 min-h-55">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <FileCode2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-header text-sm">No Submissions Yet</h4>
                <p className="text-xs text-muted max-w-xs leading-relaxed">
                  You haven't submitted any challenge code yet. Complete your first daily task to start building your history!
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;