export interface ChallengeTask {
  day: number;
  title: string;
  category: string;
  difficulty: string;
  description: string;
  requirements: string[];
}

export const getMockTaskForDay = (day: number): ChallengeTask => {
  const trackName = day % 2 === 0 ? 'Backend Track' : 'Frontend Track';
  const level = day > 30 ? 'Advanced' : day > 15 ? 'Intermediate' : 'Beginner';

  const sampleTitles: Record<number, string> = {
    1: 'Introduction to HTML & Semantic Web',
    2: 'Setting Up Node.js & Express Basics',
    5: 'CSS Grid & Flexbox Masterclass',
    12: 'Build a REST API with Node.js',
    20: 'Authentication with JWT & Cookies',
    30: 'Database Indexing & Query Optimization',
    45: 'Microservices Architecture & Docker Containerization',
    60: 'Full-Stack Capstone Project Deployment',
  };

  return {
    day,
    title: sampleTitles[day] || `Day ${day}: Complete Feature Implementation #${day}`,
    category: trackName,
    difficulty: level,
    description: `Welcome to Day ${day} of your 60-day coding journey! Today you'll focus on building real-world skills in ${trackName.toLowerCase()}.`,
    requirements: [
      `Implement core requirements for Day ${day} challenge.`,
      `Ensure clean code architecture and standard project structure.`,
      `Submit your repository or live deployment URL below.`,
    ],
  };
};