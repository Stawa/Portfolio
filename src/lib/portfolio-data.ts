import type { Achievement, SkillGroup } from "@/types/portfolio";

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    description: "Building responsive and interactive user interfaces.",
    accent: "yellow",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Bun", "REST APIs", "Python"],
    description: "Developing server-side applications and APIs.",
    accent: "blue",
  },
  {
    title: "Hardware & IoT",
    skills: ["Arduino", "Raspberry Pi", "ESP32", "Sensors"],
    description: "Creating embedded systems and IoT solutions.",
    accent: "pink",
  },
];

export const achievements: Achievement[] = [
  {
    title: "Indonesia Investors Day",
    description:
      "Received the Silver Medal in the Information, Communication, and Technology category for developing V.E.R.A (Virtual Entity for Responsive Assistant). V.E.R.A is an AI-powered virtual assistant designed to enhance user experience and streamline communication.",
    label: "International Innovation Competition",
    accent: "yellow",
    projectUrl: "https://github.com/Stawa/GTTS",
    year: 2024,
    award: "Silver Medal",
    category: "ICT",
    icon: "IID.webp",
    competitionUrl: "https://iid-official.com/elementor-3108/",
  },
];

export const accentClasses = {
  yellow: "bg-primary text-primary-foreground",
  blue: "bg-accent-blue text-primary-foreground",
  pink: "bg-accent-pink text-primary-foreground",
  green: "bg-accent-green text-primary-foreground",
  white: "bg-surface text-foreground",
} satisfies Record<string, string>;
