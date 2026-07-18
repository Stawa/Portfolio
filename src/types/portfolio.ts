export type Accent = "yellow" | "blue" | "pink" | "green" | "white";

export interface Project {
  title: string;
  description: string;
  topics: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  private?: boolean;
  accent: Accent;
  archived: boolean;
}

export type SkillGroup = {
  title: string;
  skills: string[];
  accent: Accent;
};

export type TimelineItem = {
  period: string;
  title: string;
  description: string;
  accent: Accent;
};

export type Achievement = {
  title: string;
  description: string;
  label: string;
  accent: Accent;
};
