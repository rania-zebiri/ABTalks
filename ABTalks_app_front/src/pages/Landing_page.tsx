import React from 'react';
import { Navbar } from '../components/landing/Navbar';
import { Hero } from '../components/landing/Hero';
import { Ritual } from '../components/landing/Ritual';
import { SampleDay } from '../components/landing/SampleDay';
import { Tracks } from '../components/landing/Tracks';
import { Outcomes } from '../components/landing/Outcomes';
import { Footer } from '../components/landing/Footer';

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