import type { ContactLink, Experience, Project, Publication, StatusLine, ToolGroup } from "@/types/portfolio";

const projectImageBase = "/images/it-bill/projects";

export const profile = {
  name: "Zhanwei Zhang",
  handle: "IT-Bill",
  location: "Guangzhou, China",
  email: "zzhang364@connect.hkust-gz.edu.cn",
  avatar: {
    src: "/images/it-bill/avatar.jpg",
    alt: "Zhanwei Zhang",
    width: 3159,
    height: 3159,
  },
  tagline: "Aspiring Software Engineer & Machine Learning Researcher",
  summary:
    "A dedicated and innovative engineer with a strong background in software development and machine learning, seeking to apply academic knowledge and practical skills to solve complex challenges.",
  cvHref: "/cv-zhanwei-en.pdf",
};

export const asciiArt = `███████╗██╗  ██╗ █████╗ ███╗   ██╗██╗    ██╗███████╗██╗
╚══███╔╝██║  ██║██╔══██╗████╗  ██║██║    ██║██╔════╝██║
  ███╔╝ ███████║███████║██╔██╗ ██║██║ █╗ ██║█████╗  ██║
 ███╔╝  ██╔══██║██╔══██║██║╚██╗██║██║███╗██║██╔══╝  ██║
███████╗██║  ██║██║  ██║██║ ╚████║╚███╔███╔╝███████╗██║
╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚══╝╚══╝ ╚══════╝╚═╝`;

export const statusLines: StatusLine[] = [
  { label: "SYSTEM", text: "English profile loaded", tone: "term-text-dim" },
  { label: "ROLE", text: profile.tagline, tone: "term-text" },
  { label: "CURRENT", text: "M.Phil. in Data Science and Analytics @ HKUST(GZ)", tone: "term-text" },
  { label: "FOCUS", text: "Large Audio Language Model safety and robustness testing", tone: "term-text" },
  { label: "STACK", text: "Python, TypeScript, React, Node.js, PyTorch, TensorFlow", tone: "term-text" },
  { label: "STATUS", text: "Open to technology discussions, collaborations, and opportunities", tone: "term-text-amber" },
];

export const aboutLines = [
  profile.summary,
  "M.Phil. student in Data Science and Analytics at The Hong Kong University of Science and Technology (Guangzhou).",
  "B.Eng. in Computer Science and Technology from Southern University of Science and Technology.",
];

export const researchFocus = [
  "Safety and robustness testing for Large Audio Language Models (LALMs).",
  "Floating-point error detection and mathematically guided program analysis.",
  "LLM, RAG, GraphRAG, knowledge graphs, and applied software engineering systems.",
];

export const toolGroups: ToolGroup[] = [
  {
    title: "Tools",
    items: [
      { name: "VSCode", icon: "vscode/vscode-original" },
      { name: "IntelliJ IDEA", icon: "intellij/intellij-original" },
      { name: "PyCharm", icon: "pycharm/pycharm-original" },
      { name: "Anaconda", icon: "anaconda/anaconda-original" },
      { name: "Linux", icon: "linux/linux-original" },
      { name: "Git", icon: "git/git-original" },
      { name: "GitHub", icon: "github/github-original" },
      { name: "CMake", icon: "cmake/cmake-original" },
    ],
  },
  {
    title: "Languages & Databases",
    items: [
      { name: "C", icon: "c/c-original" },
      { name: "C++", icon: "cplusplus/cplusplus-original" },
      { name: "Java", icon: "java/java-original" },
      { name: "Python", icon: "python/python-original" },
      { name: "MySQL", icon: "mysql/mysql-original" },
      { name: "PostgreSQL", icon: "postgresql/postgresql-original" },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "Vue", icon: "vuejs/vuejs-original" },
      { name: "React", icon: "react/react-original" },
      { name: "Next.js", icon: "nextjs/nextjs-original" },
      { name: "Astro", icon: "astro/astro-original" },
      { name: "Spring Boot", icon: "spring/spring-original" },
    ],
  },
  {
    title: "Creative Expression",
    description: "Like front-end technologies, these tools are also a direct way for me to express thoughts and ideas.",
    items: [
      { name: "Photoshop", icon: "photoshop/photoshop-original" },
      { name: "Premiere Pro", icon: "premierepro/premierepro-original" },
      { name: "After Effects", icon: "aftereffects/aftereffects-original" },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: "hkustgz-mphil",
    period: "Sep 2025 - Present",
    title: "M.Phil. in Data Science and Analytics",
    institution: "The Hong Kong University of Science and Technology (Guangzhou)",
    type: "education",
    description: [
      "Information Hub | Advisor: Prof. Zishuo Ding",
      "Research focus: safety and robustness testing for Large Audio Language Models (LALMs).",
    ],
    tags: ["LALM", "Audio AI", "AI Safety", "Robustness Testing"],
  },
  {
    id: "llm-intern",
    period: "Sep 2024 - Aug 2025",
    title: "Large Language Model Intern",
    institution: "Linksome, Shenzhen",
    type: "work",
    description: [
      "Integrated multi-type Retrieval Augmented Generation (RAG) and GraphRAG systems.",
      "Optimized GraphRAG code to extract better entities and relationships and construct domain-specific knowledge graphs.",
      "Built a QA Pipeline for generating high-quality QA pairs from documents with accurate ground truth annotations.",
    ],
    tags: ["LLM", "RAG", "GraphRAG", "Knowledge Graph", "NLP"],
  },
  {
    id: "visiting-researcher",
    period: "May 2024 - Aug 2024",
    title: "Visiting Researcher",
    institution: "Wuhan University, Wuhan",
    type: "research",
    description: [
      "Advisor: Prof. Jinfu Chen (WHU); Prof. Weiyi Shang (UWaterloo).",
      "Focused on software logging and failure workarounds.",
      "Developed an automated analysis pipeline to extract, filter, and sample code commits containing try-catch blocks.",
      "Conducted research on floating-point error detection, proposing novel approaches for identifying error-inducing inputs in numerical programs.",
    ],
    tags: ["Software Engineering", "Software Logging", "Code Analysis", "Floating-Point Errors"],
  },
  {
    id: "sustech-beng",
    period: "Sep 2021 - Jun 2025",
    title: "B.Eng. in Computer Science and Technology",
    institution: "Southern University of Science and Technology (SUSTech)",
    type: "education",
    description: [
      "Turing Master Class | Advisor: Prof. Yepang Liu",
      "GPA: 3.79/4.0 | Weighted Avg Score: 90.92 | Ranking: 36/195",
      "Main courses: Math Logic (A+), Computer Programming (A+), Calculus (A), Linear Algebra (A), Data Structures & Algorithms (A), Database Systems (A-), Machine Learning (A), Compilers (B+).",
    ],
    tags: ["Machine Learning", "Data Structures", "Algorithms", "Database Systems", "Compilers"],
  },
];

export const publications: Publication[] = [
  {
    id: "mgde",
    title: "A Mathematics-Guided Approach to Floating-Point Error Detection",
    venue: "arXiv preprint",
    year: "2025",
    authors: ["Youshuai Tan", "Zhanwei Zhang", "Zishuo Ding", "Lianyu Zheng", "Jinfu Chen", "Weiyi Shang"],
    description:
      "We propose MGDE, a novel method to detect error-inducing inputs based on mathematical guidance using the Newton-Raphson method with quadratic convergence properties. Our method identifies 89 bugs across 44 programs while being 6.4x faster than the baseline.",
    paperUrl: "https://arxiv.org/abs/2510.10081",
  },
  {
    id: "pi-detector",
    title: "Computing Floating-Point Errors by Injecting Perturbations",
    venue: "arXiv preprint",
    year: "2025",
    authors: ["Youshuai Tan", "Zhanwei Zhang", "Jinfu Chen", "Zishuo Ding", "Jifeng Xuan", "Weiyi Shang"],
    description:
      "We propose PI-detector, a novel approach to computing floating-point errors effectively and efficiently by injecting small perturbations into the operands of individual atomic operations within the program and comparing the outcomes of the original program with the perturbed version.",
    paperUrl: "https://arxiv.org/abs/2507.08467",
  },
  {
    id: "aviation-co2-variability",
    title: "A Comprehensive Analysis of Interflight Variability in Carbon Dioxide Emissions from Global Aviation",
    venue: "Environmental Science & Technology",
    year: "2025",
    authors: [
      "Yuxiao Han",
      "Huizhong Shen",
      "Xin He",
      "Zelin Mai",
      "Ruixin Zhang",
      "Zhiyu Zheng",
      "Yiqi Liu",
      "Xin Zhang",
      "Guanting Li",
      "Zhanwei Zhang",
      "Zien Liang",
      "Yilin Chen",
      "Yang Xie",
      "Mei Li",
      "Guofeng Shen",
      "Chen Wang",
      "Jianhuai Ye",
      "Lei Zhu",
      "Tzung-May Fu",
      "Xin Yang",
    ],
    description:
      "Employing an extensive flight tracking data set (Flightradar24), we assess the interflight variability in CO2 emissions from global aviation with unprecedented spatial and temporal granularity. We develop reduced-form models for over two hundred standard aircraft types that capture flight-to-flight variability.",
    paperUrl: "https://pubs.acs.org/doi/10.1021/acs.est.5c02371",
  },
  {
    id: "dela",
    title: "DELA: A Novel Approach for Detecting Errors Induced by Large Atomic Condition Numbers",
    venue: "arXiv preprint",
    year: "2024",
    authors: ["Youshuai Tan", "Zhanwei Zhang", "Jinfu Chen", "Zishuo Ding", "Jifeng Xuan", "Weiyi Shang"],
    description:
      "We propose DELA, an approach based on the observation that most numerical errors stem from large condition numbers in atomic operations. DELA injects small perturbations into the results of individual atomic operations and compares the outcomes to detect errors.",
    paperUrl: "https://arxiv.org/abs/2412.20804",
  },
];

export const projects: Project[] = [
  {
    id: "bicone",
    slug: "bicone",
    period: "Mar. 2026",
    year: "2026",
    title: "BiCone",
    category: "Software Engineering",
    description:
      "Built a cross-platform Bilibili subscription companion that monitors creators, sends update notifications, and automatically caches videos to reduce link rot risk.",
    image: { src: `${projectImageBase}/bicone.jpg`, alt: "BiCone project cover", width: 1328, height: 815 },
    techStack: ["Flutter", "Dart", "RSSHub", "Android", "iOS", "Windows"],
    links: [
      { label: "Code", href: "https://github.com/IT-Bill/BiCone" },
      { label: "Demo", href: "https://bicone.it-bill.com" },
    ],
  },
  {
    id: "refind",
    slug: "refind",
    period: "Feb. 2026",
    year: "2026",
    title: "ReFind",
    category: "Software Engineering",
    description:
      "Built an AI-powered VS Code extension that converts natural-language find and replace requests into regex, then applies them directly to VS Code's built-in Find/Replace workflow.",
    image: { src: `${projectImageBase}/refind.png`, alt: "ReFind project cover", width: 1200, height: 675 },
    techStack: ["TypeScript", "VS Code Extension API", "Regex", "GitHub Copilot", "LLM"],
    links: [{ label: "Code", href: "https://github.com/IT-Bill/refind" }],
  },
  {
    id: "badapple",
    slug: "badapple",
    period: "Apr. 2025 - Jun. 2025",
    year: "2025",
    title: "BADAPPLE",
    category: "Machine Learning",
    description:
      "Built a multimodal novel-to-video pipeline that uses LLM-based scene analysis, image generation, speech synthesis, and video composition to turn story text into animated short videos.",
    image: { src: `${projectImageBase}/badapple.png`, alt: "BADAPPLE project cover", width: 1570, height: 905 },
    techStack: ["Python", "Gradio", "LLM", "Stable Diffusion", "ControlNet", "TTS"],
    links: [{ label: "Code", href: "https://github.com/SendingA/BADAPPLE" }],
  },
  {
    id: "canteen-traffic-monitoring",
    slug: "canteen-traffic-monitoring",
    period: "Dec. 2023",
    year: "2023",
    title: "Canteen Traffic Monitoring",
    category: "Data Science",
    description:
      "Calculated the canteen queue length from live monitoring data and visualized how the queue changed over time, attracting 30,000 visits in three months.",
    image: { src: `${projectImageBase}/canteen-traffic-monitoring.png`, alt: "Canteen Traffic Monitoring project cover", width: 1421, height: 1027 },
    techStack: ["Data Monitoring", "Time Series Analysis", "Interactive Dashboards"],
    links: [
      { label: "Code", href: "https://github.com/SUSTech-CRA/sustech-online-ng" },
      { label: "Demo", href: "https://sustech.online/canteen/" },
    ],
  },
  {
    id: "llm-json-parser-fuzzing",
    slug: "llm-json-parser-fuzzing",
    period: "Oct. 2023",
    year: "2023",
    title: "LLM-Based JSON Parser Fuzzing for Bug Discovery and Behavioral Analysis",
    category: "Machine Learning",
    description:
      "Used open-source LLMs such as Llama2-7B/13B to synthesize diverse JSON inputs, exercising 13 parsers with 100+ case types and surfacing 26 behavioral divergences.",
    image: { src: `${projectImageBase}/llm-json-parser-fuzzing.png`, alt: "LLM JSON Parser Fuzzing project cover", width: 1536, height: 683 },
    techStack: ["Python", "LLM", "Fuzzing"],
    links: [{ label: "Report", href: "/llm-json-parser-fuzzing-final-report.pdf" }],
  },
  {
    id: "cpu-in-minisys",
    slug: "cpu-in-minisys",
    period: "Jun. 2023",
    year: "2023",
    title: "CPU in Minisys",
    category: "Embedded Systems",
    description:
      "Implemented a Minisys-compatible CPU that supports 32 core instructions, parses COE binaries, and interfaces with users through the Minisys development board.",
    image: { src: `${projectImageBase}/cpu-in-minisys.png`, alt: "CPU in Minisys project cover", width: 1531, height: 938 },
    techStack: ["Verilog", "Digital Design", "FPGA"],
    links: [
      { label: "Code", href: "https://github.com/IT-Bill/CS214-CPU" },
      { label: "Demo", href: "https://github.com/IT-Bill/CS214-CPU/blob/main/image/video.mp4" },
    ],
  },
  {
    id: "capacitated-arc-routing",
    slug: "capacitated-arc-routing",
    period: "May. 2023",
    year: "2023",
    title: "Capacitated Arc Routing Problem Project",
    category: "Machine Learning",
    description:
      "Built a memetic and hybrid metaheuristic solver that reaches optimal CARP solutions on small and medium graphs within 180 seconds and delivers competitive performance on 255-vertex networks.",
    image: { src: `${projectImageBase}/capacitated-arc-routing.png`, alt: "Capacitated Arc Routing project cover", width: 920, height: 594 },
    techStack: ["Memetic Algorithm", "Heuristics", "Combinatorial Optimization"],
    links: [
      { label: "Code", href: "https://github.com/IT-Bill/CS311-AI/tree/main/Proj-CARP" },
      { label: "Report", href: "https://github.com/IT-Bill/CS311-AI/blob/main/Proj-CARP/CARP_Report.pdf" },
    ],
  },
  {
    id: "simple-compiler",
    slug: "simple-compiler",
    period: "Jan. 2023 - Feb. 2023",
    year: "2023",
    title: "Simple Compiler",
    category: "Embedded Systems",
    description:
      "Developed a simple compiler (still has 15,000 lines) that translates C language files into Intermediate Representation (IR) and MIPS32 assembly. The compiler supports I/O operations, control flow, function calls, lexical analysis, syntax analysis, semantic analysis, and informative error messages.",
    image: { src: `${projectImageBase}/simple-compiler.png`, alt: "Simple Compiler project cover", width: 1847, height: 1145 },
    techStack: ["C", "Compiler Design", "IR", "MIPS32", "Parsing"],
    links: [
      { label: "Code", href: "https://github.com/IT-Bill/CS301-TBG-Battle-System" },
      { label: "Report", href: "https://github.com/IT-Bill/CS301-TBG-Battle-System/blob/main/report.pdf" },
    ],
  },
  {
    id: "tbg-battle-system",
    slug: "tbg-battle-system",
    period: "Jan. 2023 - Feb. 2023",
    year: "2023",
    title: "TBG Battle System in MiniSTM32",
    category: "Embedded Systems",
    description:
      "The system lets players choose actions for their customizable characters, track HP, and engage in real-time multiplayer matches using miniSTM32 boards with accurate data transmission.",
    image: { src: `${projectImageBase}/tbg-battle-system.png`, alt: "TBG Battle System project cover", width: 1380, height: 863 },
    techStack: ["C++", "miniSTM32", "Embedded Systems", "Multiplayer", "Real-time Communication"],
    links: [
      { label: "Code", href: "https://github.com/IT-Bill/CS301-TBG-Battle-System" },
      { label: "Report", href: "https://github.com/IT-Bill/CS301-TBG-Battle-System/blob/main/report.pdf" },
    ],
  },
  {
    id: "reversed-reversi",
    slug: "reversed-reversi",
    period: "Oct. 2022",
    year: "2022",
    title: "Reversed Reversi through Python with Strong AI",
    category: "Machine Learning",
    description:
      "Implemented Monte Carlo search together with FAST alpha-beta pruning accelerated by bitwise operations to build a strong Reversed Reversi AI.",
    image: { src: `${projectImageBase}/reversed-reversi.png`, alt: "Reversed Reversi project cover", width: 1026, height: 789 },
    techStack: ["Python", "Monte Carlo Search", "Alpha-Beta Pruning"],
    links: [{ label: "Code", href: "https://github.com/IT-Bill/CS311-AI/tree/main/Proj-Reversed-Reversi" }],
  },
  {
    id: "aviation-co2-emissions",
    slug: "aviation-co2-emissions",
    period: "May. 2022",
    year: "2022",
    title: "Estimating Global Aviation CO2 Emissions with Comprehensive Flight Data",
    category: "Data Science",
    description:
      "Processed 10 TB of Flightradar24 data covering 153 million flights to model aircraft-level CO2 emissions, explain 99.4% of emission variance, and highlight taxi optimization strategies that cut emissions by up to 20%.",
    image: { src: `${projectImageBase}/aviation-co2-emissions.png`, alt: "Aviation CO2 Emissions project cover", width: 661, height: 290 },
    techStack: ["Big Data Analytics", "Statistical Modeling", "Machine Learning"],
    links: [],
  },
  {
    id: "othello-game",
    slug: "othello-game",
    period: "Dec. 2021",
    year: "2021",
    title: "Othello Game through Java",
    category: "Web Development",
    description: "Developed a visually engaging Othello experience with an interactive Swing interface and smooth in-game animations.",
    image: { src: `${projectImageBase}/othello-game.png`, alt: "Othello Game project cover", width: 1616, height: 877 },
    techStack: ["Java", "Swing"],
    links: [{ label: "Code", href: "https://github.com/IT-Bill/Reversi-Java" }],
  },
];

export const contactLinks: ContactLink[] = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "GitHub", value: "github.com/IT-Bill", href: "https://github.com/IT-Bill" },
  { label: "LinkedIn", value: "linkedin.com/in/it-bill", href: "https://www.linkedin.com/in/it-bill/" },
  { label: "X", value: "@IT_Billx", href: "https://x.com/IT_Billx" },
  { label: "CV", value: "cv-zhanwei-en.pdf", href: profile.cvHref },
];
