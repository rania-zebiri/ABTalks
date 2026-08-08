import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { TopBar } from './components/TopBar';
import { Dashboard } from './pages/Dashboard';
import { TracksPage } from './pages/Tracks';
import { LeaderboardApp } from './pages/LeaderboardApp';
import { ChallengePage } from './pages/Challenge';
import ProfilePage from './pages/ProfilePage'; // 1. Import ProfilePage

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-canvas text-header">
        <Routes>
          {/* Main layout routes with top bar */}
          <Route path="/dashboard" element={<><TopBar /><Dashboard /></>} />
          <Route path="/tracks" element={<><TopBar /><TracksPage /></>} />
          <Route path="/leaderboard" element={<><TopBar /><LeaderboardApp /></>} />
          
          {/* 2. Add the Profile Route */}
          <Route path="/profile" element={<ProfilePage />} />
          
          {/* Standalone Challenge Page with its own dedicated back bar */}
          <Route path="/day/12" element={<ChallengePage />} />
          
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}