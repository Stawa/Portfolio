import type { Achievement, SkillGroup } from "@/types/portfolio";

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    accent: "yellow",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "PostgreSQL", "Prisma"],
    accent: "blue",
  },
  {
    title: "Mobile",
    skills: ["React Native", "Expo", "Android", "Responsive UI"],
    accent: "pink",
  },
  {
    title: "Desktop",
    skills: ["Electron", "Tauri", "Local-first Apps"],
    accent: "green",
  },
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
    accent: "white",
  },
  {
    title: "Tools",
    skills: ["Git", "Figma", "Linux", "Docker", "Vercel"],
    accent: "yellow",
  },
];

export const achievements: Achievement[] = [
  {
    title: "Competition Finalist",
    description:
      "Recognized for building a polished technical solution and communicating the product clearly.",
    label: "Competitions",
    accent: "yellow",
  },
  {
    title: "Project Awards",
    description:
      "Earned recognition for practical software ideas, UI craft, and consistent execution.",
    label: "Awards",
    accent: "blue",
  },
  {
    title: "Learning Certificates",
    description:
      "Completed courses across frontend development, backend fundamentals, and modern tooling.",
    label: "Certificates",
    accent: "pink",
  },
];

export const accentClasses = {
  yellow: "bg-primary text-primary-foreground",
  blue: "bg-accent-blue text-primary-foreground",
  pink: "bg-accent-pink text-primary-foreground",
  green: "bg-accent-green text-primary-foreground",
  white: "bg-surface text-foreground",
} satisfies Record<string, string>;
