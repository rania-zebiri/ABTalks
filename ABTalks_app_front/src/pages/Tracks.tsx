import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Monitor, 
  Code, 
  Cpu, 
  Smartphone, 
  Flame, 
  Calendar, 
  Users, 
  ArrowRight 
} from 'lucide-react';

interface Track {
  id: string;
  title: string;
  description: string;
  meta: string;
  students: number;
  active: boolean;
  IconComponent: React.ElementType;
  color: string;
  bgColor: string;
}

const TRACKS_DATA: Track[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Build 12 real projects — from static sites to full-stack apps.',
    meta: '60 days · Beginner–Intermediate',
    students: 340,
    active: true,
    IconComponent: Monitor,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10'
  },
  {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    description: 'Master the core concepts and ace your technical interviews.',
    meta: '60 days · Intermediate',
    students: 512,
    active: false,
    IconComponent: Code,
    color: 'text-[#FF5A36]',
    bgColor: 'bg-[#FF5A36]/10'
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    description: 'Dive into neural networks, deep learning, and AI model building.',
    meta: '60 days · Advanced',
    students: 204,
    active: false,
    IconComponent: Cpu,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10'
  },
  {
    id: 'app-dev',
    title: 'App Development',
    description: 'Create beautiful native mobile apps for iOS and Android.',
    meta: '60 days · Beginner',
    students: 128,
    active: false,
    IconComponent: Smartphone,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10'
  }
];

function TrackCard({ track }: { track: Track }) {
  const navigate = useNavigate();
  const Icon = track.IconComponent;

  return (
    <div className="bg-card border border-borderline rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group hover:border-borderline/80 transition-all duration-300">
      {track.active && (
        <div className="absolute top-0 left-0 w-1 h-full bg-cyan-400" />
      )}
      
      <div>
        <div className="flex items-start justify-between mb-5">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${track.bgColor}`}>
            <Icon className={`w-6 h-6 ${track.color}`} />
          </div>
          {track.active && (
            <span className="bg-canvas border border-borderline text-bodytext text-xs font-medium px-3 py-1 rounded-full">
              Your track
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-bold text-header mb-2">{track.title}</h3>
        <p className="text-bodytext text-sm mb-6 leading-relaxed">{track.description}</p>
        
        <div className="flex items-center gap-2 text-xs text-muted font-medium mb-6">
          <Calendar className="w-3.5 h-3.5 text-muted shrink-0" />
          <span>{track.meta}</span>
          <span className="mx-1">•</span>
          <Users className="w-3.5 h-3.5 text-muted shrink-0" />
          <span>{track.students} active</span>
        </div>
      </div>
      
      <div className="pt-4 border-t border-borderline/50">
        {track.active ? (
          <button 
            onClick={() => navigate('/dashboard')} 
            className="w-full bg-[#FF5A36] hover:bg-[#FF5A36]/90 text-white font-medium py-2.5 rounded-full flex items-center justify-center gap-1.5 transition-colors shadow-sm cursor-pointer"
          >
            <span>Continue</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button className="w-full bg-canvas border border-borderline hover:bg-card text-header font-medium py-2.5 rounded-full transition-colors cursor-pointer">
            Preview track
          </button>
        )}
      </div>
    </div>
  );
}

export function TracksPage() {
  const navigate = useNavigate();
  const activeTrack = TRACKS_DATA.find((t) => t.active);

  return (
    <div className="min-h-screen bg-canvas pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <main className="max-w-7xl mx-auto">
        {/* Active Track Banner */}
        {activeTrack && (
          <div className="bg-card border border-borderline rounded-2xl p-4 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0">
                <Flame className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <span className="text-bodytext">You're currently on </span>
                <strong className="text-header font-semibold">{activeTrack.title}</strong>
                <span className="text-muted mx-2">•</span>
                <span className="text-[#FF5A36] font-bold">Day 12 of 60</span>
              </div>
            </div>
            <button 
              onClick={() => navigate('/dashboard')}
              className="text-sm font-medium text-[#FF5A36] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Go to dashboard</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
        
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3 text-header">Choose your track</h1>
          <p className="text-lg text-bodytext">
            Each track runs the full 60 days with track-specific daily tasks.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TRACKS_DATA.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default TracksPage;