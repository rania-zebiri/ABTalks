import React, { useState } from 'react';

import { TopBar } from '../components/TopBar';
import { FilterTabs } from '../components/leaderboard/FilterTabs';
import {Podium} from '../components/leaderboard/Podium';
import type { LeaderboardUser } from '../components/leaderboard/Podium';
import {RankList} from '../components/leaderboard/RankList';
import {StickyUserRank} from '../components/leaderboard/StickyUserRank';

const leaderboardData: LeaderboardUser[] = [
  { id: 1, name: "Priya Sharma", track: "AI Track", streak: 45, trend: "up", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" },
  { id: 2, name: "Rahul Verma", track: "Web Dev", streak: 42, trend: "up", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80" },
  { id: 3, name: "Ananya Patel", track: "Web3", streak: 40, trend: "down", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80" },
  { id: 4, name: "Vikram Singh", track: "Backend", streak: 38, trend: "up", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" },
  { id: 5, name: "Sneha Gupta", track: "AI Track", streak: 35, trend: "same", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80" },
  { id: 6, name: "Karan Desai", track: "Web Dev", streak: 34, trend: "up", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" },
  { id: 7, name: "Neha Reddy", track: "Data Struct", streak: 32, trend: "down", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" },
  { id: 8, name: "Rohan Das", track: "Backend", streak: 30, trend: "up", avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=150&q=80" },
  { id: 9, name: "Meera Iyer", track: "Web3", streak: 28, trend: "up", avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=150&q=80" },
  { id: 10, name: "Arjun Nair", track: "Web Dev", streak: 27, trend: "down", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80" }
];

const currentUser: LeaderboardUser = {
  id: 142,
  name: "Aditya",
  track: "Backend",
  streak: 12,
  trend: "up",
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
  rank: 142
};

export const LeaderboardApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState('This Week');

  return (
    <div className="flex flex-col min-h-screen bg-canvas text-header pb-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] pointer-events-none" />
      <TopBar />

      <main className="flex-grow pt-28 px-4 max-w-3xl mx-auto w-full flex flex-col gap-8 relative z-10">
        <FilterTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <Podium top3={leaderboardData.slice(0, 3)} />
        <RankList users={leaderboardData.slice(3)} startIndex={4} />
      </main>

      <StickyUserRank user={currentUser} />
    </div>
  );
};