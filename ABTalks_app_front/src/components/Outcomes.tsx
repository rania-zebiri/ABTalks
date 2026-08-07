import React from 'react';
import { Flame } from 'lucide-react';

export const Outcomes: React.FC = () => {
  const outcomes = [
    {
      name: 'Sarah',
      school: 'UT Austin',
      track: 'Web Dev',
      streak: 45,
      outcome: 'Landed a Frontend Intern role at Stripe after building her portfolio publicly.',
      color: 'text-orange-500',
      bg: 'bg-orange-500/10',
    },
    {
      name: 'David',
      school: 'NYU',
      track: 'DSA',
      streak: 60,
      outcome: 'Passed the technical screen at Google using the patterns learned here.',
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
    },
    {
      name: 'Priya',
      school: 'Georgia Tech',
      track: 'App Dev',
      streak: 32,
      outcome: 'Launched her first app on the App Store and got 1k+ downloads.',
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10',
    },
  ];

  return (
    /* ADDED id="outcomes" HERE */
    <section id="outcomes" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-header">Where the streak actually leads.</h2>
          <p className="text-bodytext text-lg">Real proof from people who just showed up every day.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {outcomes.map((item, i) => (
            <div key={i} className="panel-card flex flex-col relative">
              <div className="absolute top-6 right-6">
                <div className="flex items-center gap-1 px-2 py-1 bg-card border border-borderline rounded-md text-xs font-bold text-primary">
                  <Flame className="w-3 h-3" /> {item.streak}
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-full ${item.bg} ${item.color} flex items-center justify-center font-bold text-sm`}>
                  {item.name[0]}
                </div>
                <div>
                  <div className="text-header font-bold">{item.name}</div>
                  <div className="text-xs text-muted">{item.school} • {item.track}</div>
                </div>
              </div>
              <p className="text-bodytext text-sm italic">"{item.outcome}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};