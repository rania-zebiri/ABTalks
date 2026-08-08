import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { TopBar } from './components/TopBar';

// 1. Import your actual page components
import { Dashboard } from './pages/Dashboard';
import { TracksPage } from './pages/Tracks';
import { LeaderboardApp } from './pages/LeaderboardApp';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-canvas text-header">
        <TopBar />
        
        <Routes>
          <Route path="/" element={<Navigate to="/tracks" replace />} />
          
          {/* 2. Pass the full page components into the element prop */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tracks" element={<TracksPage />} />
          <Route path="/leaderboard" element={<LeaderboardApp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}