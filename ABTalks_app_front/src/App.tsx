import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { TopBar } from './components/TopBar';
import LandingPage from './pages/Landing_page';
import { Dashboard } from './pages/Dashboard';
import { TracksPage } from './pages/Tracks';
import { ChallengePage } from './pages/Challenge';
import ProfilePage from './pages/ProfilePage';

import { DemoProvider } from './context/DemoContext';
import { ThemeProvider } from './context/ThemeContext';
import { DemoStateSwitcher } from './components/DemoStateSwitcher';
import { LeaderboardPage } from './pages/LeaderboardApp';

const MainContent: React.FC = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-canvas text-header flex flex-col">
      {/* TopBar hidden on Landing Page */}
      {!isLandingPage && <TopBar />}

      <main className={`flex-1 ${!isLandingPage ? 'pt-1 pb-24 md:pb-8' : ''}`}>
        <Routes>
          {/* Default entry point: Landing Page */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tracks" element={<TracksPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/day/12" element={<ChallengePage />} />

          {/* Any undefined route fallback -> Landing Page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <DemoStateSwitcher />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <DemoProvider>
        <BrowserRouter>
          <MainContent />
        </BrowserRouter>
      </DemoProvider>
    </ThemeProvider>
  );
}