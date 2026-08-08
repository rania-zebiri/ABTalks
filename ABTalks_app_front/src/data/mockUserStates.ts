export type StudentStateKey = 'first_day' | 'missed_day' | 'empty_profile' | 'active_student';

export const mockUserStates = {
  first_day: {
    name: "New Student",
    avatar: "",
    initials: "NS",
    streakDays: 0,
    progressDays: 0,
    maxDays: 60,
    missedDayAlert: false,
    badges: [],
    recentSubmissions: [],
    aiMessage: "Welcome to Day 1! Start your first challenge to kick off your streak.",
  },
  missed_day: {
    name: "Alex Johnson",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    initials: "AJ",
    streakDays: 0,
    progressDays: 14,
    maxDays: 60,
    missedDayAlert: true,
    badges: [
      { id: 1, title: 'FIRST COMMIT', unlocked: true, icon: 'github' },
    ],
    recentSubmissions: [
      { id: 12, title: "Build a Custom Hook", date: "2 days ago" },
    ],
    aiMessage: "You missed yesterday! Don't worry—complete today's task to freeze your streak and keep going.",
  },
  empty_profile: {
    name: "John Doe",
    avatar: "",
    initials: "JD",
    streakDays: 0,
    progressDays: 0,
    maxDays: 60,
    missedDayAlert: false,
    badges: [],
    recentSubmissions: [],
    aiMessage: "Your profile is brand new. Complete tasks to unlock badges and build your history!",
  },
  active_student: {
    name: "Sarah Chen",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    initials: "SC",
    streakDays: 7,
    progressDays: 12,
    maxDays: 60,
    missedDayAlert: false,
    badges: [
      { id: 1, title: 'FIRST COMMIT', unlocked: true, icon: 'github' },
      { id: 2, title: '7-DAY STREAK', unlocked: true, icon: 'flame' },
      { id: 3, title: 'LINKEDIN POST', unlocked: true, icon: 'linkedin' },
    ],
    recentSubmissions: [
      { id: 12, title: "Build a Custom Hook for LocalStorage", date: "Today" },
      { id: 11, title: "Create a Reusable Modal Component", date: "Yesterday" },
    ],
    aiMessage: "You're just 3 days away from a new personal best streak! Today's backend task builds directly on what you learned yesterday.",
  },
};