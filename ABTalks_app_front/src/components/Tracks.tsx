import React from 'react';
import { ArrowRight, Code, Cpu, Layout, Smartphone } from 'lucide-react';

export const Tracks: React.FC = () => {
  const tracks = [
    {
      id: 'web',
      title: 'Web Dev',
      icon: Layout,
      color: 'text-orange-500',
      bg: 'bg-orange-500/10',
      desc: 'Master React, Next.js, and modern CSS by building 60 components and apps.',
      students: 512,
    },
    {
      id: 'dsa',
      title: 'Data Structures',
      icon: Code,
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
      desc: 'Crush the interview. One algorithm a day, explained simply.',
      students: 340,
    },
    {
      id: 'ml',
      title: 'Machine Learning',
      icon: Cpu,
      color: 'text-purple-500',
      bg: 'bg-purple-500/10',
      desc: 'From basic regressions to neural networks using Python and PyTorch.',
      students: 215,
    },
    {
      id: 'app',
      title: 'App Dev',
      icon: Smartphone,
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10',
      desc: 'Build cross-platform mobile applications with React Native.',
      students: 173,
    },
  ];

  return (
    <section id="tracks" className="py-24 bg-card border-y border-borderline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-header">Pick your lane.</h2>
          <p className="text-bodytext text-lg">Focus on one skill for 60 days. Switch whenever.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tracks.map((track) => {
            const Icon = track.icon;
            return (
              <div key={track.id} className="panel-card flex flex-col h-full group cursor-pointer">
                <div className={`w-12 h-12 rounded-xl ${track.bg} ${track.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-header mb-3">{track.title}</h3>
                <p className="text-sm text-bodytext mb-6 grow">{track.desc}</p>

                <div className="pt-4 border-t border-borderline flex items-center justify-between text-xs text-muted font-medium mt-auto">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    {track.students} students today
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};