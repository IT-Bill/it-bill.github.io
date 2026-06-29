import type { Project } from "@/types/portfolio";

const imageBase = "/images/jonsaxton";

export const asciiArt = `     ██╗ ██████╗ ███╗   ██╗    ███████╗ █████╗ ██╗  ██╗████████╗ ██████╗ ███╗   ██╗
     ██║██╔═══██╗████╗  ██║    ██╔════╝██╔══██╗╚██╗██╔╝╚══██╔══╝██╔═══██╗████╗  ██║
     ██║██║   ██║██╔██╗ ██║    ███████╗███████║ ╚███╔╝    ██║   ██║   ██║██╔██╗ ██║
██   ██║██║   ██║██║╚██╗██║    ╚════██║██╔══██║ ██╔██╗    ██║   ██║   ██║██║╚██╗██║
╚█████╔╝╚██████╔╝██║ ╚████║    ███████║██║  ██║██╔╝ ██╗   ██║   ╚██████╔╝██║ ╚████║
 ╚════╝  ╚═════╝ ╚═╝  ╚═══╝    ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═══╝`;

export const statusLines = [
  { label: "SYSTEM", text: "Portfolio v8.1 loaded", tone: "term-text-dim" },
  { label: "ROLE", text: "Senior Solutions Architect @ Webflow", tone: "term-text" },
  { label: "SIDE GIG", text: "Freelance Dev @ Nights & Weekends", tone: "term-text" },
  { label: "SPECIALTY", text: "Webflow Development", tone: "term-text" },
  { label: "CERTIFICATION", text: "Certified Webflow Partner", tone: "term-text" },
  { label: "STATUS", text: "Available for freelance", tone: "term-text-amber" },
];

export const skills = [
  "Webflow Development & Architecture",
  "Component Libraries & Design Systems",
  "Page Building & Client Empowerment",
  "Responsive & Accessible Design",
  "JavaScript & Integrations",
  "Consulting, Pondering, Tinkering, Jamming",
];

export const background = [
  "Working with enterprise organizations to be successful with Webflow",
  "Previous agency dev lead",
  "Previous project manager",
];

export const projects: Project[] = [
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
