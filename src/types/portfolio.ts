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
  description: string;
};

export type Achievement = {
  title: string;
  description: string;
  label: string;
  accent: Accent;
  icon?: string;
  projectUrl?: string;
  year?: number;
  award?: string;
  category?: string;
  competitionUrl?: string;
};
