import Image from "next/image";

import type { Project } from "@/types/portfolio";

const imageBase = "/images/jonsaxton";

const asciiArt = `     ██╗ ██████╗ ███╗   ██╗    ███████╗ █████╗ ██╗  ██╗████████╗ ██████╗ ███╗   ██╗
     ██║██╔═══██╗████╗  ██║    ██╔════╝██╔══██╗╚██╗██╔╝╚══██╔══╝██╔═══██╗████╗  ██║
     ██║██║   ██║██╔██╗ ██║    ███████╗███████║ ╚███╔╝    ██║   ██║   ██║██╔██╗ ██║
██   ██║██║   ██║██║╚██╗██║    ╚════██║██╔══██║ ██╔██╗    ██║   ██║   ██║██║╚██╗██║
╚█████╔╝╚██████╔╝██║ ╚████║    ███████║██║  ██║██╔╝ ██╗   ██║   ╚██████╔╝██║ ╚████║
 ╚════╝  ╚═════╝ ╚═╝  ╚═══╝    ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═══╝`;

const statusLines = [
  { label: "SYSTEM", text: "Portfolio v8.1 loaded", tone: "term-text-dim" },
  { label: "ROLE", text: "Senior Solutions Architect @ Webflow", tone: "term-text" },
  { label: "SIDE GIG", text: "Freelance Dev @ Nights & Weekends", tone: "term-text" },
  { label: "SPECIALTY", text: "Webflow Development", tone: "term-text" },
  { label: "CERTIFICATION", text: "Certified Webflow Partner", tone: "term-text" },
  { label: "STATUS", text: "Available for freelance", tone: "term-text-amber" },
];

const skills = [
  "Webflow Development & Architecture",
  "Component Libraries & Design Systems",
  "Page Building & Client Empowerment",
  "Responsive & Accessible Design",
  "JavaScript & Integrations",
  "Consulting, Pondering, Tinkering, Jamming",
];

const background = [
  "Working with enterprise organizations to be successful with Webflow",
  "Previous agency dev lead",
  "Previous project manager",
];

const projects: Project[] = [
  {
    id: "ted-conferences",
    slug: "ted-conferences",
    year: "2025",
    title: "TED Conferences",
    description:
      "Built for total client control with a large component library, making full use of Webflow's Page Building experience. More control, speed to market, and lower costs.",
    image: { src: `${imageBase}/TED.avif`, alt: "TED Conferences screenshot", width: 3840, height: 2160 },
    tags: ["Client: TED", "Role: Lead Developer", "Agency: Whiteboard"],
    href: "https://conferences.ted.com/",
  },
  {
    id: "global-leadership-network",
    slug: "global-leadership-network",
    year: "2025",
    title: "Global Leadership Network",
    description:
      "Annual Summit attended by 350,000 leaders spanning 100+ countries. Modular page building controls, custom accents, SVG masks, and a system to customize the brand for each year.",
    image: {
      src: `${imageBase}/f19f1fb61387b2e694d3d4b81617d0e4_685c1e5446d677e5cd68ba99_full_bleed-p-1600.webp`,
      alt: "Global Leadership Network screenshot",
      width: 1600,
      height: 900,
    },
    tags: ["Client: Global Leadership Network", "Role: Lead Developer", "Agency: Whiteboard"],
    href: "https://www.globalleadership.org/",
  },
  {
    id: "captivateiq-dreamforce",
    slug: "captivateiq-dreamforce",
    year: "2025",
    title: "The Oasis at Dreamforce",
    description:
      "A fun, colorful landing page full of custom illustrations with movement to bring them all to life. Sometimes the brief is just 'make something awesome'.",
    image: { src: `${imageBase}/Dreamforce.svg`, alt: "The Oasis at Dreamforce screenshot", width: 1920, height: 1042 },
    tags: ["Client: CaptivateIQ", "Role: Developer"],
    href: "https://captivateiq.com/dreamforce",
  },
  {
    id: "state-of-icm-report",
    slug: "state-of-icm-report",
    year: "2025",
    title: "State of ICM Report",
    description:
      "Report microsite with fluid typography, offset grid system, and smooth scroll animations. Beautiful custom illustrations and unveiling effects without letting animation get in the way.",
    image: { src: `${imageBase}/SOIC.avif`, alt: "State of ICM Report screenshot", width: 2720, height: 1400 },
    tags: ["Client: CaptivateIQ", "Role: Developer"],
    href: "https://stateoficmreport.captivateiq.com/",
  },
  {
    id: "pcc-christmas-eve",
    slug: "pcc-christmas-eve",
    year: "2024",
    title: "Christmas Eve 2024",
    description:
      "Tasteful, well-branded microsite with lighting tricks for a shimmering backdrop and SVG path draw-in animation.",
    image: { src: `${imageBase}/PCC.avif`, alt: "Christmas Eve 2024 screenshot", width: 3840, height: 2160 },
    tags: ["Client: Passion City Church", "Role: Senior Developer", "Agency: Whiteboard"],
    href: "https://pcc-christmas-eve-24.webflow.io/",
  },
  {
    id: "the-multiplier",
    slug: "the-multiplier",
    year: "2024",
    title: "The Multiplier",
    description:
      "Content hub for thought leadership. Free membership content site with access, profiles, and favoriting system using Memberstack, integrated with client's CRM.",
    image: { src: `${imageBase}/The-Multiplier.avif`, alt: "The Multiplier screenshot", width: 2089, height: 1080 },
    tags: ["Client: CaptivateIQ", "Role: Developer"],
    href: "https://multiplier.captivateiq.com/",
  },
  {
    id: "harness",
    slug: "harness",
    year: "2024",
    title: "Harness",
    description:
      "Fundraising technology for nonprofits and financial institutions. Collaboration with top minds like Keegan Leary and Timothy Ricks on some fancy tricks.",
    image: { src: `${imageBase}/Harness.avif`, alt: "Harness screenshot", width: 2880, height: 1934 },
    tags: ["Client: Harness", "Role: Developer"],
    href: "https://www.goharness.com/",
  },
  {
    id: "kalderos-annual-report",
    slug: "kalderos-annual-report",
    year: "2023",
    title: "Kalderos Annual Report",
    description:
      "8-bit inspired annual report. Single-scroll, multi-chapter experience with custom illustrations and a whole lot of custom JavaScript. Plus a fun easter egg.",
    image: { src: `${imageBase}/Kalderos-AR.avif`, alt: "Kalderos Annual Report screenshot", width: 2880, height: 1620 },
    tags: ["Client: Kalderos", "Role: Developer"],
    href: "https://www.kalderos.com/2023-annual-report",
  },
  {
    id: "beefree-sdk",
    slug: "beefree-sdk",
    year: "2023",
    title: "Beefree SDK",
    description:
      "Website for SaaS developers whose audience is other developers. Full company rebrand with mega menu, multiple products, and robust style system.",
    image: { src: `${imageBase}/Beefree-bg.avif`, alt: "Beefree SDK screenshot", width: 2293, height: 1123 },
    tags: ["Client: Beefree", "Role: Developer"],
    href: "https://developers.beefree.io/",
  },
  {
    id: "martha-and-mary",
    slug: "martha-and-mary",
    year: "2025",
    title: "Martha & Mary",
    description:
      "Historic organization modernized. Component-based and flexible enough for team control with guardrails for brand consistency.",
    image: { src: `${imageBase}/Martha-and-Mary-Background.webp`, alt: "Martha & Mary screenshot", width: 3214, height: 1798 },
    tags: ["Client: Martha & Mary", "Role: Developer"],
    href: "https://www.marthaandmary.org/",
  },
];

function TerminalWindow({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="term-window">
      <div className="term-window__header">
        <div className="term-window__dots" aria-hidden="true">
          <span className="term-window__dot term-window__dot--red" />
          <span className="term-window__dot term-window__dot--yellow" />
          <span className="term-window__dot term-window__dot--green" />
        </div>
        <span className="term-window__title">{title}</span>
      </div>
      <div className="term-window__body">{children}</div>
    </div>
  );
}

function Prompt({
  path,
  command,
  cursor = false,
  spaced = false,
}: {
  path: string;
  command?: string;
  cursor?: boolean;
  spaced?: boolean;
}) {
  return (
    <div className={spaced ? "prompt prompt--spaced" : "prompt"}>
      <span className="prompt__identity">
        <span className="prompt__user">jon</span>
        <span className="prompt__at">@</span>
        <span className="prompt__host">saxton</span>
      </span>
      <span className="prompt__path">:{path}$</span>
      <span className="prompt__symbol" />
      {command ? <span className="prompt__command">{command}</span> : null}
      {cursor ? <span className="cursor" /> : null}
    </div>
  );
}

function HeroSection() {
  return (
    <section className="term-section term-section--hero" id="hero">
      <div className="term-container">
        <div className="hero-boot">
          <div className="hero-boot__content">
            <div className="hero-avatar">
              <Image
                src={`${imageBase}/Jon.avif`}
                alt="Jon Saxton"
                width={3015}
                height={2261}
                className="hero-avatar__img"
                priority
                unoptimized
              />
              <div className="hero-avatar__scanlines" />
            </div>
            <div className="hero-ascii-wrapper">
              <pre className="ascii-art" aria-hidden="true">
                {asciiArt}
              </pre>
              <h1 className="visually-hidden">Jon Saxton</h1>
            </div>
          </div>

          <div className="hero-status stagger-in">
            {statusLines.map((line) => (
              <div className="status-line" key={line.label}>
                <span className="status-label">{line.label}</span>
                <span className="status-ok">[OK]</span>
                <span className={line.tone}>{line.text}</span>
              </div>
            ))}
            <div className="status-line status-line--ready">
              <span className="term-text-bright">System ready. Scroll to explore.</span>
              <span className="cursor" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="term-section" id="about">
      <div className="term-container">
        <TerminalWindow title="jon@saxton: ~/about">
          <Prompt path="~/about" command="whoami" />
          <div className="output">
            <span className="output__line output__line--name term-text-bright">Jon Saxton</span>
            <span className="output__line term-text">Senior Frontend Developer specializing in Webflow</span>
            <span className="output__line output__line--comment term-text-dim">{"// Serving customers at Webflow"}</span>
            <span className="output__line term-text-dim">{"// Freelancing nights & weekends"}</span>
            <span className="output__line term-text-dim">{"// Orlando, FL"}</span>
          </div>

          <Prompt path="~/about" command="cat ./skills.txt" spaced />
          <div className="output output--indented">
            {skills.map((skill) => (
              <span className="output__line" key={skill}>
                <span className="term-text-amber">→</span> {skill}
              </span>
            ))}
          </div>

          <Prompt path="~/about" command="cat ./background.txt" spaced />
          <div className="output output--indented">
            {background.map((line) => (
              <span className="output__line term-text-white" key={line}>
                {line}
              </span>
            ))}
            <span className="output__line output__line--comment">
              <span className="term-text-dim">{"// Dad of 2 cutie patooties"}</span>
            </span>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}

function FileEntry({ project }: { project: Project }) {
  return (
    <a href={`#${project.id}`} className="file-entry" data-project-image={project.image.src}>
      <span className="file-entry__group">dev</span>
      <span className="file-entry__date">{project.year}</span>
      <span className="file-entry__name file-entry__name--exec">{project.slug}/</span>
      <div className="file-entry__preview" aria-hidden="true">
        <div className="file-entry__preview-inner">
          <div className="file-entry__preview-loading">
            <span className="term-text-dim">{"// LOADING IMAGE..."}</span>
          </div>
          <Image
            src={project.image.src}
            alt={`${project.title} preview`}
            width={project.image.width}
            height={project.image.height}
            className="file-entry__preview-img"
            loading="eager"
            unoptimized
          />
          <div className="file-entry__preview-scanlines" />
        </div>
      </div>
    </a>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div id={project.id} className="project-card">
      <div className="project-card__header">
        <span className="project-card__title">
          <span className="term-text-amber">$</span> cat ./{project.slug}/README.md
        </span>
        <span className="project-card__meta">{project.year}</span>
      </div>
      <div className="project-card__body">
        <div className="project-card__image-container">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            className="project-card__image"
            loading="eager"
            unoptimized
          />
          <div className="project-card__image-scanlines" />
        </div>
        <h3 className="project-card__heading">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>
        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span className="project-card__tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <a href={project.href} target="_blank" rel="noopener noreferrer" className="project-card__link">
          <span>→ ./open --url</span>
        </a>
      </div>
    </div>
  );
}

function ProjectsSection() {
  return (
    <section className="term-section" id="projects">
      <div className="term-container term-container--wide">
        <TerminalWindow title="jon@saxton: ~/projects">
          <Prompt path="~/projects" command="ls -la" />
          <div className="output output--project-count">
            <span className="output__line term-text-dim">total 10 featured projects</span>
          </div>
          <div className="file-list">
            {projects.map((project) => (
              <FileEntry project={project} key={project.id} />
            ))}
          </div>
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </TerminalWindow>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="term-section term-section--full" id="contact">
      <div className="term-container">
        <TerminalWindow title="jon@saxton: ~/contact">
          <Prompt path="~/contact" command="cat ./links.txt" />
          <div className="output output--indented stagger-in">
            <span className="output__line output__line--loose">
              <span className="term-text-dim">{"// Let's connect"}</span>
            </span>
            <span className="output__line">
              <span className="term-text-amber">TWITTER</span>
              <span className="term-text-dim"> → </span>
              <a href="https://x.com/JonSaxton" target="_blank" rel="noopener noreferrer" className="term-link">
                @JonSaxton
              </a>
            </span>
            <span className="output__line">
              <span className="term-text-amber">LINKEDIN</span>
              <span className="term-text-dim"> → </span>
              <a href="https://www.linkedin.com/in/jpsaxton/" target="_blank" rel="noopener noreferrer" className="term-link">
                /in/jpsaxton
              </a>
            </span>
            <span className="output__line">
              <span className="term-text-amber">BLUESKY</span>
              <span className="term-text-dim"> → </span>
              <a href="https://bsky.app/profile/jonsaxton.com" target="_blank" rel="noopener noreferrer" className="term-link">
                @jonsaxton.com
              </a>
            </span>
            <span className="output__line output__line--project-inquiries">
              <span className="term-text-dim">{"// For project inquiries"}</span>
            </span>
            <span className="output__line">
              <span className="term-text-amber">PROJECTS</span>
              <span className="term-text-dim"> → </span>
              <span className="term-text-bright">Available through LinkedIn or Twitter DMs</span>
            </span>
          </div>
          <Prompt path="~/contact" cursor spaced />
        </TerminalWindow>
      </div>
    </section>
  );
}

function TerminalNav() {
  return (
    <nav className="term-nav">
      <div className="term-container term-nav__inner">
        <a href="#" className="term-nav__brand">
          jon@saxton:~$
        </a>
        <ul className="term-nav__links">
          <li>
            <a href="#about" className="term-nav__link">
              whoami
            </a>
          </li>
          <li>
            <a href="#projects" className="term-nav__link">
              projects
            </a>
          </li>
          <li>
            <a href="#contact" className="term-nav__link">
              contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="term-section term-section--full term-footer">
      <div className="term-container">
        <div className="term-footer__inner">
          <span className="term-text-dim">
            <span className="term-comment">Built with Astro, Cursor, Webflow CMS, and Webflow Cloud.</span>
          </span>
          <span className="term-text-dim">© 2026 Jon Saxton</span>
        </div>
      </div>
    </footer>
  );
}

export function TerminalPortfolio() {
  return (
    <div className="terminal-page">
      <TerminalNav />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
