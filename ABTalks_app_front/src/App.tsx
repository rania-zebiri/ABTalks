import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { TopBar } from './components/TopBar';
import { LeaderboardApp } from './pages/LeaderboardApp';
import { Dashboard } from './pages/Dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-canvas text-header">
        <TopBar />
        <Routes>
          <Route path="/" element={<Navigate to="/leaderboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/leaderboard" element={<LeaderboardApp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}