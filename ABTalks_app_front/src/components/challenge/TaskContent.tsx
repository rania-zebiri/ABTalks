import React, { useState } from 'react';
import { Square, Lightbulb, ChevronDown, ExternalLink } from 'lucide-react';

export const TaskContent: React.FC = () => {
  const [showHint, setShowHint] = useState(false);

  return (
    <div className="bg-card rounded-2xl border border-borderline p-6 space-y-8">
      <div>
        <h3 className="text-xl font-bold text-header mb-3">What you'll build</h3>
        <div className="text-bodytext leading-relaxed text-sm md:text-base space-y-4">
          <p>React state disappears when you refresh the page. This is annoying when building user preferences, shopping carts, or drafts.</p>
          <p>
            Today, you'll build a <code className="bg-canvas px-1.5 py-0.5 rounded border border-borderline text-header">useLocalStorage</code> hook that behaves exactly like <code className="bg-canvas px-1.5 py-0.5 rounded border border-borderline text-header">useState</code>, but automatically syncs its value to the browser's <code className="bg-canvas px-1.5 py-0.5 rounded border border-borderline text-header">window.localStorage</code>.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-header mb-3">Requirements</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3 text-bodytext text-sm md:text-base">
            <Square className="w-4 h-4 mt-1 text-muted shrink-0" />
            <span>The hook must take two arguments: a <code className="bg-canvas px-1.5 py-0.5 rounded border border-borderline text-header">key</code> (string) and an <code className="bg-canvas px-1.5 py-0.5 rounded border border-borderline text-header">initialValue</code>.</span>
          </li>
          <li className="flex items-start gap-3 text-bodytext text-sm md:text-base">
            <Square className="w-4 h-4 mt-1 text-muted shrink-0" />
            <span>It must return an array with the stateful value and an updater function: <code className="bg-canvas px-1.5 py-0.5 rounded border border-borderline text-header">[value, setValue]</code>.</span>
          </li>
          <li className="flex items-start gap-3 text-bodytext text-sm md:text-base">
            <Square className="w-4 h-4 mt-1 text-muted shrink-0" />
            <span>If a value already exists in <code className="bg-canvas px-1.5 py-0.5 rounded border border-borderline text-header">localStorage</code> for the given key, initialize state with that instead of the <code className="bg-canvas px-1.5 py-0.5 rounded border border-borderline text-header">initialValue</code>.</span>
          </li>
          <li className="flex items-start gap-3 text-bodytext text-sm md:text-base">
            <Square className="w-4 h-4 mt-1 text-muted shrink-0" />
            <span>Wrap your JSON parsing in a try/catch block to prevent crashes if <code className="bg-canvas px-1.5 py-0.5 rounded border border-borderline text-header">localStorage</code> contains invalid JSON.</span>
          </li>
        </ul>
      </div>

      <div className="border-t border-borderline pt-6">
        <button 
          onClick={() => setShowHint(!showHint)}
          className="flex items-center justify-between w-full text-left cursor-pointer"
        >
          <span className="font-semibold text-header flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-yellow-500 fill-yellow-500/20" />
            <span>Need a hint?</span>
          </span>
          <ChevronDown className={`w-4 h-4 text-muted transition-transform duration-300 ${showHint ? 'rotate-180' : ''}`} />
        </button>
        
        {showHint && (
          <div className="mt-4 p-4 bg-canvas rounded-xl border border-borderline text-sm text-bodytext space-y-3">
            <p>Remember that <code className="bg-card px-1.5 py-0.5 rounded border border-borderline text-header">useState</code> can accept a function for its initial state. This is called "lazy initialization" and is perfect for reading from <code className="bg-card px-1.5 py-0.5 rounded border border-borderline text-header">localStorage</code> so you don't access the disk on every render.</p>
            <a href="#" className="text-linkedin hover:underline font-medium inline-flex items-center gap-1">
              <span>Docs: Lazy initialization in React</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};