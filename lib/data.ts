export type SkillItem = {
  name: string;
  icon: string;
  color: string;
};

export type Project = {
  name: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
};

export type Experience = {
  company: string;
  role: string;
  dates: string;
  achievements: string[];
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export const titleCycle = [
  "Junior Software Developer",
  "web Developer",
  "Problem Solver",
  "Open Source Contributor",
] as const;

export const skills: SkillItem[] = [
  { name: "React", icon: "⚛️", color: "#61DAFB" },
  { name: "Next.js", icon: "▲", color: "#ffffff" },
  { name: "TypeScript", icon: "TS", color: "#3178C6" },
  { name: "Node.js", icon: "⬢", color: "#68A063" },
  { name: "Python", icon: "🐍", color: "#FFD43B" },
  { name: "PostgreSQL", icon: "🐘", color: "#336791" },
  { name: "Docker", icon: "🐳", color: "#2496ED" },
  { name: "AWS", icon: "☁️", color: "#FF9900" },
  { name: "Git", icon: "⎇", color: "#F05032" },
  { name: "Figma", icon: "◆", color: "#A259FF" },
  { name: "TailwindCSS", icon: "🌊", color: "#06B6D4" },
  { name: "MongoDB", icon: "🍃", color: "#47A248" },
];

export const projects: Project[] = [
  {
    name: "Cutimate",
    description:
      "An all-in-one planner that seamlessly integrates all Malaysia public holidays, helping users stay organized with localized context.",
    tags: ["Next.js", "TypeScript", "Planner", "Full Stack"],
    githubUrl: "https://github.com/mynnzu/cutimate",
    liveUrl: "https://cutimate.com",
  },
  {
    name: "DeenSeek",
    description:
      "A Shariah-compliant AI platform providing verified Islamic knowledge with traceable citations and persistent chat history for deep learning.",
    tags: ["AI", "LLM", "Shariah-compliant", "Next.js"],
    githubUrl: "https://github.com/mynnzu/deenseek",
    liveUrl: "https://deenseek.ai",
  },
  {
    name: "Aura",
    description:
      "An AI-powered space designer and virtual consultant that helps users visualize and plan interior spaces with intelligent design suggestions.",
    tags: ["AI", "React", "Design", "Virtual Assistant"],
    githubUrl: "https://github.com/mynnzu/aura",
    liveUrl: "https://aura-design.ai",
  },
];

export const experience: Experience[] = [
  {
    company: "Professional Development",
    role: "E-Sports Level 2 Course",
    dates: "Coursework",
    achievements: [
      "Tournament Coordination: Gained practical skills in managing tournament logistics, including scheduling, bracket management, and real-time match oversight.",
      "Event Operations: Developed experience in venue coordination, crowd management, and ensuring technical requirements are met for competitive gaming environments.",
      "Industry Protocols: Acquired foundational knowledge of esports governance, event broadcasting standards, and maintaining fair-play regulations during live events.",
    ],
  },
  {
    company: "Community",
    role: "Google Developer Group Participant",
    dates: "Participant",
    achievements: [
      "Participated in Google Developer Group community programs, networking sessions, and collaborative learning activities.",
    ],
  },
];
