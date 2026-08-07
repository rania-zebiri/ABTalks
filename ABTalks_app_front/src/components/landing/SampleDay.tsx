import React from 'react';
import { Layout, Square } from 'lucide-react';

export const SampleDay: React.FC = () => {
  return (
    <section id="sample-day" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-header">Here's an actual Day 12.</h2>
          <p className="text-bodytext text-lg">No hiding behind paywalls. This is exactly what you get.</p>
        </div>

        <div className="elevated-card overflow-hidden">
          <div className="bg-card p-6 border-b border-borderline flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-canvas border border-borderline flex items-center justify-center">
                <Layout className="w-6 h-6 text-header" />
              </div>
              <div>
                <div className="text-sm text-primary font-bold mb-1">Day 12 • Web Dev Track</div>
                <h3 className="text-xl font-bold text-header">Build a Custom Hook for LocalStorage</h3>
              </div>
            </div>
          </div>

          <div className="p-6 bg-canvas">
            <div className="prose prose-invert max-w-none">
              <h4 className="text-header font-semibold mb-2">The Mission</h4>
              <p className="text-bodytext text-sm mb-6">
                React state disappears when you refresh. Today, you'll build a `useLocalStorage` hook that syncs state to the browser's localStorage, so data survives reloads.
              </p>

              <h4 className="text-header font-semibold mb-2">Requirements</h4>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3 text-sm text-bodytext">
                  <Square className="w-4 h-4 mt-0.5 text-muted" />
                  <span>Hook takes a `key` and an `initialValue`.</span>
                </li>
                <li className="flex gap-3 text-sm text-bodytext">
                  <Square className="w-4 h-4 mt-0.5 text-muted" />
                  <span>Returns a stateful value and a function to update it, just like `useState`.</span>
                </li>
                <li className="flex gap-3 text-sm text-bodytext">
                  <Square className="w-4 h-4 mt-0.5 text-muted" />
                  <span>Gracefully handles JSON parsing errors.</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl border border-borderline bg-card flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-muted">
                Submit your GitHub and LinkedIn links to complete this day.
              </div>
              <button disabled className="px-4 py-2 rounded-lg bg-canvas border border-borderline text-muted font-medium text-sm cursor-not-allowed">
                Log in to submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};