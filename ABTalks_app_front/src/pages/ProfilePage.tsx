import React from 'react';
import { TopBar } from '../components/TopBar';
import { ProfileHeader } from '../components/profile/ProfileHeader';
import { StreakGraph } from '../components/profile/StreakGraph';
import { BadgeCase } from '../components/profile/BadgeCase';
import { RecentSubmissions } from '../components/profile/RecentSubmissions';

export const ProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-canvas text-bodytext pb-12">
      <TopBar />
      
      <main className="grow max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 mt-16">
        <div className="space-y-6">
          <ProfileHeader />
          <StreakGraph />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BadgeCase />
            <RecentSubmissions />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;