export type SkillItem = {
  name: string;
  icon: string;
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
  "Full Stack Developer",
  "Problem Solver",
  "Open Source Contributor",
] as const;

export const skills: SkillItem[] = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "📘" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "Git", icon: "🔧" },
];

export const projects: Project[] = [
  {
    name: "PulseOps Dashboard",
    description:
      "Real-time observability dashboard for distributed services with anomaly detection workflows.",
    tags: ["Next.js", "TypeScript", "WebSocket", "PostgreSQL"],
    githubUrl: "https://github.com/placeholder/pulseops-dashboard",
    liveUrl: "https://example.com/pulseops-dashboard",
  },
  {
    name: "Kernel CI Orchestrator",
    description:
      "Automated pipeline manager for containerized CI jobs across multiple cloud environments.",
    tags: ["Node.js", "Docker", "AWS", "Redis"],
    githubUrl: "https://github.com/placeholder/kernel-ci-orchestrator",
    liveUrl: "https://example.com/kernel-ci",
  },
  {
    name: "CodeSight Studio",
    description:
      "Developer productivity platform combining code insights, profiling traces, and release analytics.",
    tags: ["React", "Framer Motion", "GraphQL", "Prisma"],
    githubUrl: "https://github.com/placeholder/codesight-studio",
    liveUrl: "https://example.com/codesight",
  },
  {
    name: "Atlas API Gateway",
    description:
      "High-throughput API gateway with policy-based routing, rate limiting, and service health scoring.",
    tags: ["TypeScript", "Fastify", "PostgreSQL", "Kubernetes"],
    githubUrl: "https://github.com/placeholder/atlas-gateway",
    liveUrl: "https://example.com/atlas-gateway",
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
