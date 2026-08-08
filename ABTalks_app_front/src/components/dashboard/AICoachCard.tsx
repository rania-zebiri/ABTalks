import React, { useState } from 'react';
import { Sparkles, Send, Loader2, Bot, User } from 'lucide-react';
import { useDemoState } from '../../context/DemoContext';

interface Message {
  role: 'user' | 'ai';
  text: string;
}

export const AICoachCard: React.FC = () => {
  const { currentStateKey, userData } = useDemoState();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const trackName = (userData as any)?.track || (userData as any)?.selectedTrack || 'backend';

  // Dynamic coach quote based on demo state profile
  const renderCoachGreeting = () => {
    switch (currentStateKey) {
      case 'first_day':
      case 'empty_profile':
        return (
          <>
            "Welcome aboard! Complete your first <span className="font-bold text-header">{trackName}</span> task today to kick off your learning streak."
          </>
        );

      case 'missed_day':
        return (
          <>
            "Don't worry about missing yesterday! Focus on today's <span className="font-bold text-header">{trackName}</span> task to get right back on track."
          </>
        );

      case 'active_student':
      default:
        return (
          <>
            "You're just <span className="font-bold text-header">3 days</span> away from a new personal best streak! Today's {trackName} task builds directly on what you learned yesterday."
          </>
        );
    }
  };

  // Mock static hints database
  const mockResponses = [
    "Here's a quick hint: Check your request body parameters before parsing. Make sure your middleware is placed above your route handlers!",
    "Try using `console.log()` inside your try-catch block to log the error message directly.",
    "Remember to set the correct `Content-Type: application/json` header in your request!",
    "Focus on handling edge cases first—what happens if the input is `null` or `undefined`?"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userQuery = input.trim();
    setInput('');
    
    // 1. Append User Message
    setMessages((prev) => [...prev, { role: 'user', text: userQuery }]);
    setIsLoading(true);

    // 2. Simulate AI response delay (1.2 seconds)
    setTimeout(() => {
      const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)];
      setMessages((prev) => [...prev, { role: 'ai', text: randomResponse }]);
      setIsLoading(false);
    }, 1200);
  };

  return (
    <div className="w-full max-w-xl bg-card border border-borderline rounded-3xl p-6 md:p-8 text-bodytext shadow-xl flex flex-col justify-between transition-colors">
      <div>
        {/* Header Badge */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
            <Sparkles className="w-5 h-5 fill-primary/20 text-primary" />
          </div>
          <span className="font-extrabold tracking-widest text-sm text-header uppercase">
            AI Coach
          </span>
        </div>

        {/* Motivational Greeting (Dynamic) */}
        <p className="text-bodytext text-base md:text-lg font-medium leading-relaxed mb-6">
          {renderCoachGreeting()}
        </p>

        {/* Dynamic Conversation History */}
        {messages.length > 0 && (
          <div className="space-y-3 mb-6 max-h-60 overflow-y-auto pr-1">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3.5 rounded-2xl text-xs md:text-sm leading-relaxed flex items-start gap-2.5 ${
                  msg.role === 'user'
                    ? 'bg-canvas text-bodytext ml-6 border border-borderline'
                    : 'bg-primary/10 text-header border border-primary/20'
                }`}
              >
                {msg.role === 'user' ? (
                  <User className="w-4 h-4 text-muted shrink-0 mt-0.5" />
                ) : (
                  <Bot className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                )}
                <span>{msg.text}</span>
              </div>
            ))}

            {/* Loading Spinner Indicator */}
            {isLoading && (
              <div className="p-3.5 rounded-2xl bg-primary/10 border border-primary/20 text-primary text-xs flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>AI Coach is thinking...</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="relative mt-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask for a hint on today's task..."
          disabled={isLoading}
          className="w-full bg-canvas border border-borderline rounded-2xl py-4 pl-5 pr-12 text-sm text-header placeholder-muted focus:outline-none focus:border-primary/50 transition-colors disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-primary hover:text-primary/80 transition-colors disabled:opacity-40 cursor-pointer"
          aria-label="Send hint request"
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Send className="w-5 h-5" />
          )}
        </button>
      </form>
    </div>
  );
};