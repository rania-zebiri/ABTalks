import { useState } from 'react';
import { Flame, Crown, Medal, Award, ChevronUp } from 'lucide-react';
import { useDemoState } from '../context/DemoContext';

interface LeaderboardUser {
  rank: number;
  name: string;
  avatar: string;
  track: string;
  score: number;
}

const LEADERBOARD_DATA: Record<'this-week' | 'all-time' | 'my-track', LeaderboardUser[]> = {
  'this-week': [
    { rank: 1, name: 'Priya Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150', track: 'Backend', score: 7 },
    { rank: 2, name: 'Rahul Verma', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150', track: 'Frontend', score: 7 },
    { rank: 3, name: 'Ananya Patel', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150', track: 'Fullstack', score: 6 },
    { rank: 4, name: 'Vikram Singh', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150', track: 'Backend', score: 6 },
  ],
  'all-time': [
    { rank: 1, name: 'Priya Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150', track: 'Backend', score: 46 },
    { rank: 2, name: 'Rahul Verma', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150', track: 'Frontend', score: 42 },
    { rank: 3, name: 'Ananya Patel', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150', track: 'Fullstack', score: 40 },
    { rank: 4, name: 'Vikram Singh', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150', track: 'Backend', score: 38 },
  ],
  'my-track': [
    { rank: 1, name: 'Alex Rivera', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150', track: 'Backend', score: 58 },
    { rank: 2, name: 'Vikram Singh', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150', track: 'Backend', score: 52 },
    { rank: 3, name: 'Marcus Chen', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150', track: 'Backend', score: 48 },
    { rank: 4, name: 'Elena Rostova', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150', track: 'Backend', score: 44 },
  ]
};

export function LeaderboardPage() {
  const { userData } = useDemoState();
  const user = userData as Record<string, any>;
  const [activeTab, setActiveTab] = useState<'this-week' | 'all-time' | 'my-track'>('all-time');

  const currentList = LEADERBOARD_DATA[activeTab];

  const firstPlace = currentList.find((u) => u.rank === 1);
  const secondPlace = currentList.find((u) => u.rank === 2);
  const thirdPlace = currentList.find((u) => u.rank === 3);
  const otherUsers = currentList.filter((u) => u.rank > 3);

  // Separate logic: Missed Day Alert gets 150+, New Student/empty gets 999
  const isMissedAlert = user.name === 'Alex Johnson' || user.id === 'missed-day-alert';
  const isNewOrEmpty = user.name === 'New Student' || user.streakDays === 0 || !user.name;

  const currentUserRank = user.rank !== undefined 
    ? user.rank 
    : isMissedAlert
      ? '150+'
      : isNewOrEmpty
        ? 999
        : (activeTab === 'this-week' ? 12 : activeTab === 'my-track' ? 8 : 142);

  const currentUserName = user.name || 'New Student';
  const currentUserAvatar = user.avatar;
  const currentUserTrack = user.track || user.selectedTrack || 'Backend';
  const currentUserScore = user.streakDays ?? 0;
  const userInitials = user.initials || 'NS';

  return (
    <div className="min-h-screen bg-canvas pt-2 pb-16 px-4 sm:px-6 lg:px-8">
      <main className="max-w-4xl mx-auto space-y-10">
        
        {/* Dynamic Filter Controls */}
        <div className="flex justify-center">
          <div className="inline-flex items-center p-1 bg-card border border-borderline rounded-full">
            <button
              type="button"
              onClick={() => setActiveTab('this-week')}
              className={`px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'this-week'
                  ? 'bg-[#FF5A36] text-white shadow-md'
                  : 'text-bodytext hover:text-header'
              }`}
            >
              This Week
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('all-time')}
              className={`px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'all-time'
                  ? 'bg-[#FF5A36] text-white shadow-md'
                  : 'text-bodytext hover:text-header'
              }`}
            >
              All Time
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('my-track')}
              className={`px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'my-track'
                  ? 'bg-[#FF5A36] text-white shadow-md'
                  : 'text-bodytext hover:text-header'
              }`}
            >
              My Track
            </button>
          </div>
        </div>

        {/* Podium View */}
        <div className="flex items-end justify-center gap-2 sm:gap-6 pt-8 pb-4">
          
          {/* #2 Rank */}
          {secondPlace && (
            <div className="flex flex-col items-center">
              <div className="relative mb-2 flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-slate-800/80 border border-slate-600 flex items-center justify-center mb-1">
                  <Medal className="w-3.5 h-3.5 text-slate-300" />
                </div>
                <img
                  src={secondPlace.avatar}
                  alt={secondPlace.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-slate-400"
                />
              </div>
              <span className="font-bold text-header text-sm sm:text-base text-center line-clamp-1">
                {secondPlace.name}
              </span>
              <div className="flex items-center gap-1 text-[#FF5A36] text-xs font-black mt-0.5 mb-3">
                <Flame className="w-3.5 h-3.5 fill-[#FF5A36]" />
                <span>{secondPlace.score}</span>
              </div>
              <div className="w-24 sm:w-32 h-32 bg-card border-t-2 border-slate-400 rounded-t-2xl flex items-center justify-center text-slate-500 font-extrabold text-3xl">
                2
              </div>
            </div>
          )}

          {/* #1 Rank */}
          {firstPlace && (
            <div className="flex flex-col items-center -mt-6">
              <div className="relative mb-2 flex flex-col items-center">
                <Crown className="w-6 h-6 text-amber-400 fill-amber-400 mb-1" />
                <img
                  src={firstPlace.avatar}
                  alt={firstPlace.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-[#FF5A36]"
                />
              </div>
              <span className="font-bold text-header text-base sm:text-lg text-center line-clamp-1">
                {firstPlace.name}
              </span>
              <div className="flex items-center gap-1 text-[#FF5A36] text-xs sm:text-sm font-black mt-0.5 mb-3">
                <Flame className="w-4 h-4 fill-[#FF5A36]" />
                <span>{firstPlace.score}</span>
              </div>
              <div className="w-28 sm:w-36 h-40 bg-card border-t-2 border-[#FF5A36] rounded-t-2xl flex items-center justify-center text-slate-500 font-extrabold text-4xl">
                1
              </div>
            </div>
          )}

          {/* #3 Rank */}
          {thirdPlace && (
            <div className="flex flex-col items-center">
              <div className="relative mb-2 flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-amber-950/80 border border-amber-800 flex items-center justify-center mb-1">
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                </div>
                <img
                  src={thirdPlace.avatar}
                  alt={thirdPlace.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-amber-700"
                />
              </div>
              <span className="font-bold text-header text-sm sm:text-base text-center line-clamp-1">
                {thirdPlace.name}
              </span>
              <div className="flex items-center gap-1 text-[#FF5A36] text-xs font-black mt-0.5 mb-3">
                <Flame className="w-3.5 h-3.5 fill-[#FF5A36]" />
                <span>{thirdPlace.score}</span>
              </div>
              <div className="w-24 sm:w-32 h-24 bg-card border-t-2 border-amber-700 rounded-t-2xl flex items-center justify-center text-slate-500 font-extrabold text-3xl">
                3
              </div>
            </div>
          )}
        </div>

        {/* Rows Below Podium */}
        <div className="space-y-3">
          {otherUsers.map((userItem) => (
            <div
              key={userItem.rank}
              className="w-full bg-card border border-borderline rounded-2xl p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <span className="text-xl font-extrabold text-[#FF5A36] w-8">
                  {userItem.rank}
                </span>
                <img
                  src={userItem.avatar}
                  alt={userItem.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-header text-sm sm:text-base">
                    {userItem.name}
                  </h3>
                  <span className="inline-block text-[10px] font-semibold text-[#FF5A36] bg-[#FF5A36]/10 px-2 py-0.5 rounded-md mt-0.5">
                    {userItem.track}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 font-bold text-header">
                  <Flame className="w-4 h-4 fill-[#FF5A36] text-[#FF5A36]" />
                  <span>{userItem.score}</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[9px] font-bold text-muted uppercase">DAYS</span>
                  <ChevronUp className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </div>
            </div>
          ))}

          {/* Dynamic Demo-linked "YOU" Row */}
          <div className="w-full bg-card border-2 border-[#FF5A36] rounded-2xl p-4 flex items-center justify-between shadow-lg shadow-[#FF5A36]/5">
            <div className="flex items-center gap-4">
              <span className="text-xl font-extrabold text-[#FF5A36] min-w-12">
                {currentUserRank}
              </span>
              <div className="relative">
                {currentUserAvatar ? (
                  <img
                    src={currentUserAvatar}
                    alt={currentUserName}
                    className="w-10 h-10 rounded-full object-cover border border-[#FF5A36]"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-[#FF5A36] text-white font-extrabold text-xs flex items-center justify-center border border-[#1e2534]">
                    {userInitials}
                  </div>
                )}
                <span className="absolute -top-1 -right-1 bg-[#FF5A36] text-white text-[8px] font-black px-1 rounded uppercase">
                  YOU
                </span>
              </div>
              <div>
                <h3 className="font-bold text-header text-sm sm:text-base">
                  {currentUserName}
                </h3>
                <span className="inline-block text-[10px] font-semibold text-[#FF5A36] bg-[#FF5A36]/10 px-2 py-0.5 rounded-md mt-0.5 capitalize">
                  {currentUserTrack}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 font-bold text-header">
                <Flame className="w-4 h-4 fill-[#FF5A36] text-[#FF5A36]" />
                <span>{currentUserScore}</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[9px] font-bold text-muted uppercase">DAYS</span>
                <ChevronUp className="w-3.5 h-3.5 text-emerald-400" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LeaderboardPage;