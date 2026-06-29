export type Tone = "term-text" | "term-text-dim" | "term-text-amber" | "term-text-bright" | "term-text-white";

export type StatusLine = {
  label: string;
  text: string;
  tone: Tone;
};

export type ToolGroup = {
  title: string;
  description?: string;
  items: Array<{
    name: string;
    icon: string;
  }>;
};

export type ProjectLink = {
  label: "Code" | "Demo" | "Report";
  href: string;
};

export type Project = {
  id: string;
  slug: string;
  period: string;
  year: string;
  title: string;
  category: "Software Engineering" | "Web Development" | "Machine Learning" | "Data Science" | "Embedded Systems";
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  techStack: string[];
  links: ProjectLink[];
};

export type Experience = {
  id: string;
  period: string;
  title: string;
  institution: string;
  description: string[];
  type: "education" | "work" | "research";
  tags: string[];
};

export type Publication = {
  id: string;
  title: string;
  venue: string;
  year: string;
  authors: string[];
  description: string;
  paperUrl?: string;
  repoUrl?: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
};
