import React from 'react';
import { Sparkles, Send } from 'lucide-react';

export const MotivationPanel: React.FC = () => {
  return (
    <div className="panel-card border-primary/20! relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-linear-to-br from-primary/5 to-linkedin/5 pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-canvas border border-borderline flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-primary" />
          </div>
          <span className="text-xs font-semibold text-header tracking-widest uppercase">AI Coach</span>
        </div>

        <p className="text-sm text-bodytext mb-4 leading-relaxed">
          "You're just <strong className="text-header">3 days</strong> away from a new personal best streak! Today's backend task builds directly on what you learned yesterday."
        </p>

        <div className="relative">
          <input 
            type="text" 
            placeholder="Ask for a hint on today's task..." 
            className="w-full bg-canvas border border-borderline rounded-lg pl-3 pr-10 py-2.5 text-sm text-header focus:outline-none focus:border-primary/50 placeholder:text-muted"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 text-primary hover:text-header transition-colors">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};