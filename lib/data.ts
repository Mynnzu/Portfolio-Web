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
    company: "Vertex Labs",
    role: "Senior Software Engineer",
    dates: "2023 - Present",
    achievements: [
      "Led migration to Next.js App Router, reducing page load latency by 38%.",
      "Designed reusable component architecture used across 5 product teams.",
      "Implemented CI/CD quality gates that cut deployment regressions by 45%.",
    ],
  },
  {
    company: "Scaleforge Systems",
    role: "Full Stack Engineer",
    dates: "2021 - 2023",
    achievements: [
      "Built internal tooling for release observability used by 120+ engineers.",
      "Shipped event-driven backend services handling over 8M requests/day.",
      "Collaborated with design to deliver a11y-first frontend standards.",
    ],
  },
  {
    company: "Nova Byte",
    role: "Software Engineer",
    dates: "2019 - 2021",
    achievements: [
      "Developed customer dashboard features increasing retention by 17%.",
      "Optimized SQL queries and indexes, reducing report generation time by 52%.",
      "Introduced test automation strategy for critical business workflows.",
    ],
  },
];
