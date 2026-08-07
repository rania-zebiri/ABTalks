import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Ritual } from '../components/Ritual';
import { SampleDay } from '../components/SampleDay';
import { Tracks } from '../components/Tracks';
import { Outcomes } from '../components/Outcomes';
import { Footer } from '../components/Footer';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-canvas text-bodytext">
      <Navbar />
      <Hero />
      <Ritual />
      <SampleDay />
      <Tracks />
      <Outcomes />
      <Footer />
    </div>
  );
};

export default LandingPage;