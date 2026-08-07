import React from 'react';
import { Calendar, CheckCircle, Circle, Flame } from 'lucide-react';

export const Ritual: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-card border-y border-borderline relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-header">Your day, in three moves.</h2>
          <p className="text-bodytext text-lg">No guesswork. Just log in, build, and share.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-xs elevated-card p-5 mb-6 transform transition-transform hover:-translate-y-2">
              <div className="flex items-center gap-2 mb-3 text-sm text-muted font-medium">
                <Calendar className="w-4 h-4 text-primary" />
                Daily Drop
              </div>
              <h4 className="text-header font-semibold mb-2">Build a REST API in Node.js</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-bodytext">
                  <CheckCircle className="w-4 h-4 text-muted mt-0.5" />
                  Setup Express server
                </li>
                <li className="flex items-start gap-2 text-sm text-bodytext">
                  <Circle className="w-4 h-4 text-muted mt-0.5" />
                  Create GET/POST routes
                </li>
              </ul>
            </div>
            <h3 className="text-xl font-bold mb-2 text-header">1. Get the task</h3>
            <p className="text-bodytext text-center text-sm">A bite-sized, real-world challenge drops every morning.</p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-xs elevated-card p-5 mb-6 transform transition-transform hover:-translate-y-2">
              <div className="space-y-3">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-header text-xs font-bold">
                    GH
                  </div>
                  <input disabled type="text" className="block w-full pl-10 pr-3 py-2 border border-borderline rounded-lg bg-canvas text-sm text-bodytext opacity-80" value="github.com/user/api-repo" readOnly />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <CheckCircle className="w-4 h-4 text-github" />
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-linkedin text-xs font-bold">
                    IN
                  </div>
                  <input disabled type="text" className="block w-full pl-10 pr-3 py-2 border border-borderline rounded-lg bg-canvas text-sm text-bodytext opacity-80" value="linkedin.com/posts/..." readOnly />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <CheckCircle className="w-4 h-4 text-linkedin" />
                  </div>
                </div>
                <button disabled className="w-full py-2 bg-primary/20 text-primary rounded-lg text-sm font-semibold">Submit Links</button>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-header">2. Build & Share</h3>
            <p className="text-bodytext text-center text-sm">Write the code, push to GitHub, and post your learnings on LinkedIn.</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-xs elevated-card p-5 mb-6 transform transition-transform hover:-translate-y-2 flex flex-col items-center justify-center min-h-40">
              <div className="relative mb-2">
                <Flame className="w-16 h-16 text-primary" />
                <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce">
                  +1
                </div>
              </div>
              <h4 className="text-2xl font-black text-header">13 Day Streak!</h4>
            </div>
            <h3 className="text-xl font-bold mb-2 text-header">3. Watch it stack</h3>
            <p className="text-bodytext text-center text-sm">Grow your streak, build your portfolio, and become undeniable.</p>
          </div>
        </div>
      </div>
    </section>
  );
};