import React, { useState } from 'react';
import { Sparkles, Send } from 'lucide-react';

interface AICoachCardProps {
  daysToRecord?: number;
  currentTaskTopic?: string;
  onSendQuery?: (query: string) => void;
}

export const AICoachCard: React.FC<AICoachCardProps> = ({
  daysToRecord = 3,
  currentTaskTopic = "backend task",
  onSendQuery,
}) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    if (onSendQuery) onSendQuery(input);
    setInput('');
  };

  return (
    <div className="panel-card bg-[#161B22] border border-[#232B3E] rounded-2xl p-6 text-header flex flex-col justify-between gap-5">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-[#2E1819] border border-[#522223] flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-[#FF5252]" />
        </div>
        <h3 className="font-bold text-sm tracking-wider uppercase text-header">
          AI Coach
        </h3>
      </div>

      {/* Dynamic Motivational Quote / Context */}
      <p className="text-bodytext text-sm sm:text-base leading-relaxed font-normal">
        "You're just <strong className="text-header font-bold">{daysToRecord} days</strong> away from a new personal best streak! Today's {currentTaskTopic} builds directly on what you learned yesterday."
      </p>

      {/* Input Box */}
      <form onSubmit={handleSubmit} className="relative flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask for a hint on today's task..."
          className="w-full bg-[#0D1117] border border-[#232B3E] rounded-xl px-4 py-3 text-xs sm:text-sm text-header placeholder:text-muted focus:outline-none focus:border-[#FF5252] transition-colors pr-10"
        />
        <button
          type="submit"
          className="absolute right-3 text-[#FF5252] hover:opacity-80 transition-opacity cursor-pointer"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};

export default AICoachCard;