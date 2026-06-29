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
  label: string;
  href: string;
};

export type Project = {
  id: string;
  slug: string;
  period: string;
  year: string;
  title: string;
  category: string;
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
  type: string;
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

export type ResumeDownload = {
  label: string;
  command: string;
  href: string;
  ariaLabel: string;
};

export type Locale = "en" | "zh";

export type Profile = {
  name: string;
  handle: string;
  location: string;
  email: string;
  avatar: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  tagline: string;
  summary: string;
  cvHref: string;
};

export type AsciiArt = {
  firstName: string;
  lastName: string;
};

export type NavItem = {
  href: string;
  label: string;
  shortLabel: string;
};

export type PortfolioNav = {
  items: NavItem[];
  themeAriaLabel: string;
  languageTargetLocale: Locale;
  languageAriaLabel: string;
  languageCommand: string;
  languageFlag: string;
  languageShortFlag: string;
};

export type TerminalCopy = {
  ready: string;
  totalPublications: string;
  totalProjects: string;
  contactComment: string;
  builtWith: string;
  loadingImage: string;
  privateAccess: string;
};

export type HeroResume = {
  label: string;
  command: string;
  links: ResumeDownload[];
};

export type HeroEducationItem = {
  degree: string;
  institution: string;
  period: string;
};

export type HeroEducation = {
  title: string;
  command: string;
  items: HeroEducationItem[];
};

export type PortfolioMeta = {
  title: string;
  description: string;
  image: string;
};

export type PortfolioContent = {
  locale: Locale;
  htmlLang: string;
  meta: PortfolioMeta;
  nav: PortfolioNav;
  profile: Profile;
  asciiArt: AsciiArt;
  statusLines: StatusLine[];
  heroResume: HeroResume;
  heroEducation: HeroEducation;
  aboutLines: string[];
  researchFocus: string[];
  toolGroups: ToolGroup[];
  experiences: Experience[];
  publications: Publication[];
  projects: Project[];
  contactLinks: ContactLink[];
  terminal: TerminalCopy;
};
