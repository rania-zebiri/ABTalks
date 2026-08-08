// src/types/leaderboard.ts
export interface LeaderboardUser {
  id: number;
  name: string;
  track: string;
  streak: number;
  trend: 'up' | 'down' | 'same';
  avatar: string;
  rank?: number;
}