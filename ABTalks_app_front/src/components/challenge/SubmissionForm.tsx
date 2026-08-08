import React, { useState } from 'react';
import { Check, CheckCircle2, Wand2 } from 'lucide-react';

interface SubmissionFormProps {
  day?: number;
}

export const SubmissionForm: React.FC<SubmissionFormProps> = ({ day = 12 }) => {
  const [github, setGithub] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');
  const [showToast, setShowToast] = useState(false);

  const isGithubValid = github.includes('github.com/');
  const isLinkedinValid = linkedin.includes('linkedin.com/');
  const canSubmit = isGithubValid && isLinkedinValid;

  const handleGenerateCaption = () => {
    const caption = `Just completed Day ${day} of my 60-day coding streak with @ABTalks! 🔥 Today I built a custom challenge solution to solidify my dev skills. It was tricky handling edge cases, but incredibly satisfying to see it work.\n\nCode is up on my GitHub: ${github || '[link]'}\n\n#100DaysOfCode #ReactJS #WebDevelopment`;
    
    navigator.clipboard.writeText(caption).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    });
  };

  const handleSubmit = () => {
    if (canSubmit) setStatus('submitted');
  };

  if (status === 'submitted') {
    return (
      <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-6">
        <div className="flex flex-col items-center text-center py-6">
          <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-4">
            <Check className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-header mb-2">Day {day} Complete!</h3>
          <p className="text-bodytext mb-6">Your streak is now updated. See you tomorrow!</p>
          
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            <a href={github} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full bg-card border border-borderline text-sm font-medium text-header hover:bg-elevated flex items-center gap-2">
              <span>View Code</span>
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full bg-card border border-borderline text-sm font-medium text-header hover:bg-elevated flex items-center gap-2">
              <span>View Post</span>
            </a>
          </div>

          <button onClick={() => setStatus('idle')} className="text-muted hover:text-header text-sm font-medium transition-colors underline cursor-pointer">
            Edit submission
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl border border-primary/20 bg-linear-to-b from-card to-canvas p-6">
      <h3 className="text-xl font-bold text-header mb-1">Submit your work</h3>
      <p className="text-sm text-bodytext mb-6">Post your code to GitHub and share your learnings on LinkedIn.</p>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-header mb-2">GitHub Repository</label>
          <div className="relative">
            <input 
              type="text" 
              placeholder="https://github.com/username/repo"
              className={`block w-full px-4 py-3 rounded-xl bg-canvas border focus:outline-none transition-colors text-sm text-header ${
                isGithubValid ? 'border-emerald-500 focus:border-emerald-500' : 'border-borderline focus:border-primary'
              }`}
              value={github}
              onChange={(e) => setGithub(e.target.value)}
            />
            {isGithubValid && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-semibold text-header">LinkedIn Post</label>
            <button 
              onClick={handleGenerateCaption} 
              className="text-xs font-bold text-cyan-400 flex items-center gap-1 hover:underline cursor-pointer"
            >
              <Wand2 className="w-3.5 h-3.5" />
              <span>Generate caption</span>
            </button>
          </div>
          <div className="relative">
            <input 
              type="text" 
              placeholder="https://linkedin.com/posts/..."
              className={`block w-full px-4 py-3 rounded-xl bg-canvas border focus:outline-none transition-colors text-sm text-header ${
                isLinkedinValid ? 'border-cyan-400 focus:border-cyan-400' : 'border-borderline focus:border-primary'
              }`}
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
            />
            {isLinkedinValid && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              </div>
            )}
          </div>
          {showToast && (
            <div className="mt-2 text-xs text-cyan-400 bg-cyan-400/10 px-3 py-2 rounded-lg border border-cyan-400/20 inline-block">
              Post caption copied to clipboard!
            </div>
          )}
        </div>

        <div className="pt-4 mt-2 border-t border-borderline flex flex-col sm:flex-row items-center gap-4 justify-between">
          <span className="text-xs text-muted">
            {canSubmit ? "You're ready to submit!" : "Complete both fields to verify today's streak."}
          </span>
          <button 
            onClick={handleSubmit}
            disabled={!canSubmit}
            className={`w-full sm:w-auto px-8 py-3 rounded-full font-bold transition-all ${
              canSubmit 
                ? 'bg-primary text-white hover:opacity-90 shadow-lg cursor-pointer' 
                : 'bg-card border border-borderline text-muted cursor-not-allowed'
            }`}
          >
            Submit Day {day}
          </button>
        </div>
      </div>
    </div>
  );
};