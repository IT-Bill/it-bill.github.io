import type {
  ContactLink,
  Experience,
  Locale,
  PortfolioContent,
  Project,
  Publication,
  StatusLine,
  ToolGroup,
} from "@/types/portfolio";

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

export const asciiArt = {
  firstName: `███████╗██╗  ██╗ █████╗ ███╗   ██╗██╗    ██╗███████╗██╗
╚══███╔╝██║  ██║██╔══██╗████╗  ██║██║    ██║██╔════╝██║
  ███╔╝ ███████║███████║██╔██╗ ██║██║ █╗ ██║█████╗  ██║
 ███╔╝  ██╔══██║██╔══██║██║╚██╗██║██║███╗██║██╔══╝  ██║
███████╗██║  ██║██║  ██║██║ ╚████║╚███╔███╔╝███████╗██║
╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚══╝╚══╝ ╚══════╝╚═╝`,
  lastName: `███████╗██╗  ██╗ █████╗ ███╗   ██╗ ██████╗
╚══███╔╝██║  ██║██╔══██╗████╗  ██║██╔════╝
  ███╔╝ ███████║███████║██╔██╗ ██║██║  ███╗
 ███╔╝  ██╔══██║██╔══██║██║╚██╗██║██║   ██║
███████╗██║  ██║██║  ██║██║ ╚████║╚██████╔╝
╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝`,
};

export const statusLines: StatusLine[] = [
  { label: "ROLE", text: profile.tagline, tone: "term-text" },
  { label: "STATUS", text: "Open to technology discussions, collaborations, and opportunities", tone: "term-text-amber" },
];

const englishResumeLinks = [
  {
    label: "EN",
    command: "curl -O cv-zhanwei-en.pdf",
    href: "/cv-zhanwei-en.pdf",
    ariaLabel: "Download English CV",
  },
  {
    label: "ZH",
    command: "curl -O cv-zhanwei-zh.pdf",
    href: "/cv-zhanwei-zh.pdf",
    ariaLabel: "Download Chinese CV",
  },
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
];

export const englishPortfolio: PortfolioContent = {
  locale: "en",
  htmlLang: "en",
  meta: {
    title: "Zhanwei Zhang - Software Engineer & Machine Learning Researcher",
    description: "Personal terminal portfolio for Zhanwei Zhang, an aspiring software engineer and machine learning researcher.",
    image: profile.avatar.src,
  },
  nav: {
    items: [
      { href: "#about", label: "whoami", shortLabel: "who" },
      { href: "#experiences", label: "exp", shortLabel: "exp" },
      { href: "#publications", label: "papers", shortLabel: "pub" },
      { href: "#projects", label: "projects", shortLabel: "proj" },
      { href: "#contact", label: "contact", shortLabel: "mail" },
    ],
    themeAriaLabel: "Toggle theme style",
    languageTargetLocale: "zh",
    languageAriaLabel: "Switch to Chinese",
    languageCommand: "lang",
    languageFlag: "--en",
    languageShortFlag: "--en",
  },
  profile,
  asciiArt,
  statusLines,
  heroResume: {
    label: "RESUME",
    command: "ls ./cv",
    links: englishResumeLinks,
  },
  heroEducation: {
    title: "Education",
    command: "cat ./education.log",
    items: [
      {
        degree: "M.Phil. in Data Science and Analytics",
        institution: "The Hong Kong University of Science and Technology (Guangzhou)",
        period: "2025 - Present",
      },
      {
        degree: "B.Eng. in Computer Science and Technology",
        institution: "Southern University of Science and Technology",
        period: "2021 - 2025",
      },
    ],
  },
  aboutLines,
  researchFocus,
  toolGroups,
  experiences,
  publications,
  projects,
  contactLinks,
  terminal: {
    ready: "English profile ready. Press Enter to continue.",
    totalPublications: "total {count} publications",
    totalProjects: "total {count} projects",
    contactComment: "Open to discussing technology, collaborations, and opportunities.",
    builtWith: "Built with Astro and terminal-inspired interaction.",
    loadingImage: "LOADING IMAGE...",
    privateAccess: "./access --private",
  },
};

const zhProfile = {
  ...profile,
  name: "张展玮",
  location: "中国广州",
  avatar: {
    ...profile.avatar,
    alt: "张展玮",
  },
  tagline: "软件工程师 & 机器学习研究者",
  summary: "一位充满热情的工程师，在软件开发和机器学习领域拥有扎实的背景，致力于将学术知识和实践技能应用于解决复杂的工程挑战。",
  cvHref: "/cv-zhanwei-zh.pdf",
};

const zhStatusLines: StatusLine[] = [
  { label: "角色", text: zhProfile.tagline, tone: "term-text" },
  { label: "状态", text: "欢迎技术交流、科研合作与机会讨论", tone: "term-text-amber" },
];

const zhResumeLinks = [
  {
    label: "EN",
    command: "curl -O cv-zhanwei-en.pdf",
    href: "/cv-zhanwei-en.pdf",
    ariaLabel: "下载英文简历",
  },
  {
    label: "ZH",
    command: "curl -O cv-zhanwei-zh.pdf",
    href: "/cv-zhanwei-zh.pdf",
    ariaLabel: "下载中文简历",
  },
];

const zhAboutLines = [
  zhProfile.summary,
  "香港科技大学（广州）数据科学与分析哲学硕士在读。",
  "南方科技大学计算机科学与技术工学学士。",
];

const zhResearchFocus = [
  "音频大语言模型（LALM）的安全性与鲁棒性测试。",
  "浮点数误差检测与数学引导的程序分析。",
  "LLM、RAG、GraphRAG、知识图谱与应用软件工程系统。",
];

const zhToolGroups: ToolGroup[] = [
  {
    title: "工具",
    items: toolGroups[0].items,
  },
  {
    title: "编程语言与数据库",
    items: toolGroups[1].items,
  },
  {
    title: "框架",
    items: toolGroups[2].items,
  },
  {
    title: "创意表达",
    description: "和前端技术一样，这些工具也是我表达思考和想法的直接方式。",
    items: toolGroups[3].items,
  },
];

const zhExperiences: Experience[] = [
  {
    id: "hkustgz-mphil",
    period: "2025年9月 - 至今",
    title: "数据科学与分析 哲学硕士",
    institution: "香港科技大学（广州）",
    type: "教育",
    description: ["信息枢纽 | 导师：丁子硕 教授", "研究方向：音频大语言模型（LALM）的安全性与鲁棒性测试。"],
    tags: ["LALM", "音频大语言模型", "AI安全", "鲁棒性测试"],
  },
  {
    id: "llm-intern",
    period: "2024年9月 - 2025年8月",
    title: "大语言模型实习生",
    institution: "Linksome，深圳",
    type: "工作",
    description: [
      "集成了多类型检索增强生成（RAG）和 GraphRAG 系统。",
      "优化 GraphRAG 代码以提取更优质的实体和关系，构建领域知识图谱。",
      "构建了 QA Pipeline，从文档中生成带有精确标注的高质量问答对。",
    ],
    tags: ["LLM", "RAG", "GraphRAG", "知识图谱", "NLP"],
  },
  {
    id: "visiting-researcher",
    period: "2024年5月 - 2024年8月",
    title: "访问研究员",
    institution: "武汉大学，武汉",
    type: "研究",
    description: [
      "导师：陈晋富 教授（武汉大学）；商卫怡 教授（滑铁卢大学）",
      "专注于软件日志和故障解决方案研究。",
      "开发了自动化分析流水线，用于提取、过滤和采样包含 try-catch 块的代码提交。",
      "开展浮点数误差检测研究，提出检测数值程序中错误诱导输入的新方法。",
    ],
    tags: ["软件工程", "软件日志", "代码分析", "浮点数误差"],
  },
  {
    id: "sustech-beng",
    period: "2021年9月 - 2025年6月",
    title: "计算机科学与技术 工学学士",
    institution: "南方科技大学",
    type: "教育",
    description: [
      "图灵英才班 | 导师：刘烨庞 教授",
      "GPA: 3.79/4.0 | 加权平均分: 90.92 | 排名: 36/195",
      "主要课程：数理逻辑（A+）、程序设计（A+）、微积分（A）、线性代数（A）、数据结构与算法（A）、数据库系统（A-）、机器学习（A）、编译原理（B+）",
    ],
    tags: ["机器学习", "数据结构", "算法", "数据库系统", "编译原理"],
  },
];

const zhPublications: Publication[] = [
  {
    id: "mgde",
    title: "A Mathematics-Guided Approach to Floating-Point Error Detection",
    venue: "arXiv preprint",
    year: "2025",
    authors: ["Youshuai Tan", "Zhanwei Zhang", "Zishuo Ding", "Lianyu Zheng", "Jinfu Chen", "Weiyi Shang"],
    description:
      "我们提出 MGDE，一种基于数学引导的新方法，利用具有二次收敛性质的牛顿-拉夫森方法检测错误诱导输入。该方法在 44 个程序中识别出 89 个 bug，速度比基线快 6.4 倍。",
    paperUrl: "https://arxiv.org/abs/2510.10081",
  },
  {
    id: "pi-detector",
    title: "Computing Floating-Point Errors by Injecting Perturbations",
    venue: "arXiv preprint",
    year: "2025",
    authors: ["Youshuai Tan", "Zhanwei Zhang", "Jinfu Chen", "Zishuo Ding", "Jifeng Xuan", "Weiyi Shang"],
    description:
      "我们提出 PI-detector，一种通过在程序中各原子操作的操作数上注入微小扰动，并比较原始程序与扰动版本的输出来高效计算浮点数误差的新方法。",
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
      "利用 Flightradar24 大规模航班追踪数据集，以前所未有的时空粒度评估全球航空 CO2 排放的航次间变异性。我们为超过两百种标准机型开发了简化模型，可捕获航次间的排放波动。",
    paperUrl: "https://pubs.acs.org/doi/10.1021/acs.est.5c02371",
  },
  {
    id: "dela",
    title: "DELA: A Novel Approach for Detecting Errors Induced by Large Atomic Condition Numbers",
    venue: "arXiv preprint",
    year: "2024",
    authors: ["Youshuai Tan", "Zhanwei Zhang", "Jinfu Chen", "Zishuo Ding", "Jifeng Xuan", "Weiyi Shang"],
    description:
      "我们提出 DELA 方法，基于大多数数值误差源于原子操作中较大条件数这一观察。DELA 在单个原子操作结果中注入微小扰动并比较输出来检测误差。",
    paperUrl: "https://arxiv.org/abs/2412.20804",
  },
];

const zhProjects: Project[] = [
  {
    id: "bicone",
    slug: "bicone",
    period: "2026年3月",
    year: "2026",
    title: "BiCone",
    category: "软件工程",
    description: "开发了一款面向 Bilibili 的跨平台追更与防失效工具，支持 UP 主订阅、更新通知与自动缓存，尽量避免视频失效带来的遗憾。",
    image: { src: `${projectImageBase}/bicone.jpg`, alt: "BiCone 项目封面", width: 1328, height: 815 },
    techStack: ["Flutter", "Dart", "RSSHub", "Android", "iOS", "Windows"],
    links: [
      { label: "Code", href: "https://github.com/IT-Bill/BiCone" },
      { label: "Demo", href: "https://bicone.it-bill.com" },
    ],
  },
  {
    id: "refind",
    slug: "refind",
    period: "2026年2月",
    year: "2026",
    title: "ReFind",
    category: "软件工程",
    description: "开发了一个面向 VS Code 的 AI 扩展，可将自然语言描述的查找与替换需求转换为正则表达式，并直接接入 VS Code 内置的查找/替换流程。",
    image: { src: `${projectImageBase}/refind.png`, alt: "ReFind 项目封面", width: 1200, height: 675 },
    techStack: ["TypeScript", "VS Code Extension API", "Regex", "GitHub Copilot", "LLM"],
    links: [{ label: "Code", href: "https://github.com/IT-Bill/refind" }],
  },
  {
    id: "badapple",
    slug: "badapple",
    period: "2025年4月 - 2025年6月",
    year: "2025",
    title: "BADAPPLE",
    category: "机器学习",
    description: "开发了一个基于多模态 AI 的小说转视频生成管线，结合场景分析、图像生成、语音合成与视频合成，将小说文本自动转换为动漫化短视频。",
    image: { src: `${projectImageBase}/badapple.png`, alt: "BADAPPLE 项目封面", width: 1570, height: 905 },
    techStack: ["Python", "Gradio", "LLM", "Stable Diffusion", "ControlNet", "TTS"],
    links: [{ label: "Code", href: "https://github.com/SendingA/BADAPPLE" }],
  },
  {
    id: "canteen-traffic-monitoring",
    slug: "canteen-traffic-monitoring",
    period: "2023年12月",
    year: "2023",
    title: "食堂人流监控系统",
    category: "数据科学",
    description: "通过实时监控数据计算食堂排队长度，并可视化展示排队变化趋势，三个月内吸引了 30,000 次访问。",
    image: { src: `${projectImageBase}/canteen-traffic-monitoring.png`, alt: "食堂人流监控系统项目封面", width: 1421, height: 1027 },
    techStack: ["数据监控", "时间序列分析", "交互式仪表盘"],
    links: [
      { label: "Code", href: "https://github.com/SUSTech-CRA/sustech-online-ng" },
      { label: "Demo", href: "https://sustech.online/canteen/" },
    ],
  },
  {
    id: "llm-json-parser-fuzzing",
    slug: "llm-json-parser-fuzzing",
    period: "2023年10月",
    year: "2023",
    title: "基于 LLM 的 JSON 解析器模糊测试",
    category: "机器学习",
    description: "利用 Llama2-7B/13B 等开源大语言模型合成多样化 JSON 输入，对 13 个解析器进行 100 多种测试用例类型的测试，发现 26 个行为差异。",
    image: { src: `${projectImageBase}/llm-json-parser-fuzzing.png`, alt: "基于 LLM 的 JSON 解析器模糊测试项目封面", width: 1536, height: 683 },
    techStack: ["Python", "LLM", "模糊测试"],
    links: [{ label: "Report", href: "/llm-json-parser-fuzzing-final-report.pdf" }],
  },
  {
    id: "cpu-in-minisys",
    slug: "cpu-in-minisys",
    period: "2023年6月",
    year: "2023",
    title: "Minisys CPU 设计",
    category: "嵌入式系统",
    description: "实现了一个兼容 Minisys 的 CPU，支持 32 条核心指令，解析 COE 二进制文件，并通过 Minisys 开发板与用户交互。",
    image: { src: `${projectImageBase}/cpu-in-minisys.png`, alt: "Minisys CPU 设计项目封面", width: 1531, height: 938 },
    techStack: ["Verilog", "数字电路设计", "FPGA"],
    links: [
      { label: "Code", href: "https://github.com/IT-Bill/CS214-CPU" },
      { label: "Demo", href: "https://github.com/IT-Bill/CS214-CPU/blob/main/image/video.mp4" },
    ],
  },
  {
    id: "capacitated-arc-routing",
    slug: "capacitated-arc-routing",
    period: "2023年5月",
    year: "2023",
    title: "有容量限制的弧路由问题",
    category: "机器学习",
    description: "构建了模因算法和混合元启发式求解器，在 180 秒内对中小规模图达到最优 CARP 解，并在 255 节点网络上表现出竞争力。",
    image: { src: `${projectImageBase}/capacitated-arc-routing.png`, alt: "有容量限制的弧路由问题项目封面", width: 920, height: 594 },
    techStack: ["模因算法", "启发式算法", "组合优化"],
    links: [
      { label: "Code", href: "https://github.com/IT-Bill/CS311-AI/tree/main/Proj-CARP" },
      { label: "Report", href: "https://github.com/IT-Bill/CS311-AI/blob/main/Proj-CARP/CARP_Report.pdf" },
    ],
  },
  {
    id: "simple-compiler",
    slug: "simple-compiler",
    period: "2023年1月 - 2023年2月",
    year: "2023",
    title: "简易编译器",
    category: "嵌入式系统",
    description:
      "开发了一个简易编译器（代码量达 15,000 行），将 C 语言文件编译为中间表示（IR）和 MIPS32 汇编代码。编译器支持 I/O 操作、控制流和函数调用等核心功能，包含完整的词法、语法和语义分析及友好的错误提示。",
    image: { src: `${projectImageBase}/simple-compiler.png`, alt: "简易编译器项目封面", width: 1847, height: 1145 },
    techStack: ["C", "编译原理", "IR", "MIPS32", "语法分析"],
    links: [
      { label: "Code", href: "https://github.com/IT-Bill/CS301-TBG-Battle-System" },
      { label: "Report", href: "https://github.com/IT-Bill/CS301-TBG-Battle-System/blob/main/report.pdf" },
    ],
  },
  {
    id: "tbg-battle-system",
    slug: "tbg-battle-system",
    period: "2023年1月 - 2023年2月",
    year: "2023",
    title: "MiniSTM32 回合制对战系统",
    category: "嵌入式系统",
    description: "该系统允许玩家为自定义角色选择动作、追踪生命值，并通过 miniSTM32 开发板进行精确数据传输的实时多人对战。",
    image: { src: `${projectImageBase}/tbg-battle-system.png`, alt: "MiniSTM32 回合制对战系统项目封面", width: 1380, height: 863 },
    techStack: ["C++", "miniSTM32", "嵌入式系统", "多人对战", "实时通信"],
    links: [
      { label: "Code", href: "https://github.com/IT-Bill/CS301-TBG-Battle-System" },
      { label: "Report", href: "https://github.com/IT-Bill/CS301-TBG-Battle-System/blob/main/report.pdf" },
    ],
  },
  {
    id: "reversed-reversi",
    slug: "reversed-reversi",
    period: "2022年10月",
    year: "2022",
    title: "基于强 AI 的反转黑白棋",
    category: "机器学习",
    description: "实现了蒙特卡洛搜索与基于位运算加速的快速 Alpha-Beta 剪枝算法，构建了强大的反转黑白棋 AI。",
    image: { src: `${projectImageBase}/reversed-reversi.png`, alt: "基于强 AI 的反转黑白棋项目封面", width: 1026, height: 789 },
    techStack: ["Python", "蒙特卡洛搜索", "Alpha-Beta 剪枝"],
    links: [{ label: "Code", href: "https://github.com/IT-Bill/CS311-AI/tree/main/Proj-Reversed-Reversi" }],
  },
  {
    id: "aviation-co2-emissions",
    slug: "aviation-co2-emissions",
    period: "2022年5月",
    year: "2022",
    title: "基于综合航班数据估算全球航空 CO2 排放",
    category: "数据科学",
    description: "处理了 10 TB 的 Flightradar24 数据，覆盖 1.53 亿次航班，建模飞机级别的 CO2 排放，解释了 99.4% 的排放方差，并指出滑行优化策略可减少高达 20% 的排放。",
    image: { src: `${projectImageBase}/aviation-co2-emissions.png`, alt: "基于综合航班数据估算全球航空 CO2 排放项目封面", width: 661, height: 290 },
    techStack: ["大数据分析", "统计建模", "机器学习"],
    links: [],
  },
  {
    id: "othello-game",
    slug: "othello-game",
    period: "2021年12月",
    year: "2021",
    title: "Java 黑白棋游戏",
    category: "Web 开发",
    description: "开发了一款具有互动式 Swing 界面和流畅游戏动画的黑白棋游戏体验。",
    image: { src: `${projectImageBase}/othello-game.png`, alt: "Java 黑白棋游戏项目封面", width: 1616, height: 877 },
    techStack: ["Java", "Swing"],
    links: [{ label: "Code", href: "https://github.com/IT-Bill/Reversi-Java" }],
  },
];

const zhContactLinks: ContactLink[] = [
  { label: "邮箱", value: zhProfile.email, href: `mailto:${zhProfile.email}` },
  { label: "GitHub", value: "github.com/IT-Bill", href: "https://github.com/IT-Bill" },
  { label: "LinkedIn", value: "linkedin.com/in/it-bill", href: "https://www.linkedin.com/in/it-bill/" },
  { label: "X", value: "@IT_Billx", href: "https://x.com/IT_Billx" },
];

export const zhPortfolio: PortfolioContent = {
  locale: "zh",
  htmlLang: "zh-CN",
  meta: {
    title: "张展玮 - 软件工程师 & 机器学习研究者",
    description: "张展玮的终端风格个人主页，展示软件工程、机器学习、科研经历与项目作品。",
    image: zhProfile.avatar.src,
  },
  nav: {
    items: [
      { href: "#about", label: "关于", shortLabel: "关" },
      { href: "#experiences", label: "经历", shortLabel: "历" },
      { href: "#publications", label: "论文", shortLabel: "文" },
      { href: "#projects", label: "项目", shortLabel: "项" },
      { href: "#contact", label: "联系", shortLabel: "联" },
    ],
    themeAriaLabel: "切换主题样式",
    languageTargetLocale: "en",
    languageAriaLabel: "Switch to English",
    languageCommand: "lang",
    languageFlag: "--zh",
    languageShortFlag: "--zh",
  },
  profile: zhProfile,
  asciiArt,
  statusLines: zhStatusLines,
  heroResume: {
    label: "简历",
    command: "ls ./cv",
    links: zhResumeLinks,
  },
  heroEducation: {
    title: "教育经历",
    command: "cat ./education.log",
    items: [
      {
        degree: "数据科学与分析 哲学硕士",
        institution: "香港科技大学（广州）",
        period: "2025 - 至今",
      },
      {
        degree: "计算机科学与技术 工学学士",
        institution: "南方科技大学",
        period: "2021 - 2025",
      },
    ],
  },
  aboutLines: zhAboutLines,
  researchFocus: zhResearchFocus,
  toolGroups: zhToolGroups,
  experiences: zhExperiences,
  publications: zhPublications,
  projects: zhProjects,
  contactLinks: zhContactLinks,
  terminal: {
    ready: "中文资料已加载。按 Enter 继续。",
    totalPublications: "共 {count} 篇论文",
    totalProjects: "共 {count} 个项目",
    contactComment: "欢迎技术交流、项目合作与机会讨论。",
    builtWith: "使用 Astro 构建，并融合终端式交互。",
    loadingImage: "正在加载图像...",
    privateAccess: "./access --private",
  },
};

export const portfolioContent: Record<Locale, PortfolioContent> = {
  en: englishPortfolio,
  zh: zhPortfolio,
};
