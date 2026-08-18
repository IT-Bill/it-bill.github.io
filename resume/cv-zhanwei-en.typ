#import "template.typ": *

#cv-resume(
  lang: "en",
  body-size: 9pt,
  body-leading: 0.88em,
  header-left: [Curriculum Vitae for Zhanwei Zhang],
  header-right: [Last Update: Aug 17, 2026],
  name: [Zhanwei Zhang (张展玮)],
  contact: [
    (+86) 13380806800 | #cv-link("mailto:zzhang364@connect.hkust-gz.edu.cn", "zzhang364@connect.hkust-gz.edu.cn") | #cv-link("https://it-bill.github.io/", "https://it-bill.github.io/")
  ],
)[
  #cv-section[Education]
  #cv-entry(title: [M.Phil. in Data Science and Analytics, Hong Kong University of Science and Technology (Guangzhou)], date: "Sep 2025 ~ Present")[
    #cv-line[Information Hub]
    #cv-line[Advisor: Prof. Zishuo Ding]
  ]
  #cv-entry(title: [B.Sc. in Computer Science and Technology, Southern University of Science and Technology (SUSTech)], date: "Sep 2021 ~ Jun 2025")[
    #cv-line[Turing Master Class]
    #cv-line[Advisor: Prof. Yepang Liu]
    #cv-line[GPA: 3.79 / 4.0 | Weight Avg Score: 90.92 | Ranking: 36 / 195]
    #cv-line[Selected Coursework: Data Structures & Algorithms (A), Machine Learning (A), Database Systems (A-), Compilers (B+)]
  ]

  #cv-section[Experience]
  #cv-entry(title: [Qualcomm, Shenzhen | AI Agent Platform Intern], date: "May 2026 ~ Present")[
    #cv-line[Led architecture evolution of an internal AI Agent platform, enabling unified Agent / Workflow / Tool integration.]
    #cv-line[Designed an Engine + Plugin architecture with dynamic backend/frontend loading via Python Entry Points and Module Federation.]
    #cv-line[Built an Agent Runtime with DeepAgents, unifying Tool / MCP / Skills / Subagent integration with AG-UI and HITL support.]
  ]
  #cv-entry(title: [Lingsome, Shenzhen | LLM Intern], date: "Aug 2024 ~ Aug 2025")[
    #cv-line[Designed multi-granularity RAG indexing and joint retrieval strategies to improve retrieval quality on domain data.]
    #cv-line[Researched and adapted Microsoft GraphRAG to company-specific domain data, constructing domain knowledge graphs.]
    #cv-line[Explored automated RAG evaluation through question generation and Ground Truth annotation prototypes.]
  ]
  #cv-entry(title: [Wuhan University, Wuhan | Visiting Researcher], date: "May ~ Aug 2024")[
    #cv-line[Advisor: Prof. Jinfu Chen (WHU); Prof. Weiyi Shang (UWaterloo)]
    #cv-line[Studied software logging and failure-workaround patterns, building an automated pipeline to mine and sample relevant code commits.]
  ]

  #cv-section[Selected Projects]
  #cv-entry(title: [OpenStar], date: "Jul 2026 ~ Present")[
    #cv-line[Built Chat / Explore / Watch Agent workflows for open-source project discovery, understanding, and tracking.]
    #cv-line[Designed Agent research and Watch pipelines that autonomously inspect releases and repository activity via tools and produce structured assessments.]
  ]
#cv-entry(title: [NIYO.AI Custom-Fit Nail 3D Modeling Platform], date: "Jan 2026 ~ Present")[
  #cv-line[Turned vision and geometry prototypes into a production 3D annotation/modeling platform, covering full-stack development and the vision-to-3D workflow.]
  #cv-line[Built synthetic-data and training pipelines for millions of multi-view samples, model training/evaluation, and production inference.]
  #cv-line[Rewrote the shared geometry core in Rust with Python/WASM bindings, cutting compute from hundreds of ms to \~10 ms for real-time 3D interaction.]
]
  #cv-entry(title: [WiTH - AI Health Companion], date: "Jun 2026")[
    #cv-line[Built an AI health Agent integrating user profiles, health records, and 20+ tools for personalized interaction.]
    #cv-line[Implemented semantic memory and proactive reminders that turn conversations into actionable tasks; won Third Prize at the Shenzhen Hackathon.]
  ]
  #cv-entry(title: [AI Micro-Drama Studio], date: "Sep 2025 ~ Jan 2026")[
    #cv-line[Built an end-to-end pipeline turning novels/scripts into storyboards, integrating generation, editing, and export in one workflow.]
  ]
  #cv-entry(title: [Othello Game through Java and Python Programming with Strong AI], date: "Mar 2023")[
    #cv-line[Implemented Monte Carlo and Alpha-Beta search; ranked 3/29 with an 81% win rate.]
  ]
  #cv-entry(title: [Canteen Traffic Monitoring], date: "Dec 2023 ~ Jan 2024")[
    #cv-line[Calculated the length of the queue by monitoring data and displayed a chart showing the changes in queue length.]
    #cv-line[Won award for finalist in National College Students' Innovation and Entrepreneurship Training program.]
    #cv-line[About 30,000 visits within three months.]
  ]
  #cv-section[Research]
  #cv-entry(title: [Numerical Error Detection in Floating-Point Computing], date: "Sep 2024 ~ Feb 2026")[
    #cv-line[Developed perturbation- and Newton-guided error detection methods, achieving 173/174 significant-error cases at 0.13% of oracle cost and detecting 80 bugs across 47 functions.]
  ]
  #cv-entry(title: [R1-style Reasoning Pipeline Reproduction], date: "May ~ Jun 2025")[
    #cv-line[Implemented Cold-start SFT and GRPO on Qwen2.5 models (0.5B–7B) to reproduce and evaluate an R1-style reasoning pipeline.]
  ]
  #cv-entry(title: [LLM-Based JSON Parser Fuzzing], date: "Sep 2023 ~ Jan 2024")[
    #cv-line[Used Llama 2 7B/13B to fuzz 13 JSON parsers, testing 100+ case types and identifying 26+ behavioral differences.]
  ]

  #cv-section[Selected Publications]
  #cv-line[Y. Tan, #strong[Z. Zhang], et al. #emph[“ICE: Reducing Search Space for Error-Inducing Input Detection.”] IEEE Transactions on Software Engineering, 2026.]
  #cv-line[Y. Tan, #strong[Z. Zhang], et al. #emph[“Mathematically-Guided Detection of Floating-Point Errors.”] ISSTA 2026.]

  #cv-section[Patents]
  #cv-entry(title: [一种点餐方法、系统、终端及介质 (Innovative Ordering Method, System, Terminal, and Medium Patent)], date: "May 2023")[
    #cv-line[Innovated a method and system to alleviate peak-hour traffic in cafeterias.]
    #cv-line[Applied on May 5, 2023; Application no: 202310498065]
  ]

  #cv-section[Skills]
  #cv-skill[Programming Languages][Python, TypeScript/JavaScript, Rust, C/C++, Java]
  #cv-skill[Technology Stack][React / Next.js, PyTorch, PostgreSQL, Docker, Git]
  #cv-skill[AI Development][Codex, Claude Code, OpenAI / Claude Agent SDK, Pi Agent, LangChain]
  #cv-skill[Languages][Mandarin (Native), Cantonese (Native), English (IELTS 6.5)]

  #cv-section[Honors & Scholarships]
  #cv-honor(title: [Third Prize, Shenzhen Hackathon], date: "Jun 2026")
  #cv-honor(title: [Special Innovation Award (Unique Winner) & Second Prize, OpenHarmony Competition Training Camp], date: "Sep 2025")
  #cv-honor(title: [Postgraduate Studentship (PGS), HKUST(GZ)], date: "Sep 2025")
  #cv-honor(title: [Outstanding Student, SUSTech], date: "Jan 2024")
  #cv-honor(title: [Honorable Mention, Mathematical Contest in Modeling], date: "May 2023")
  #cv-honor(title: [Finalist, National College Students' Innovation and Entrepreneurship Training program], date: "Jun 2023")
  #cv-honor(title: [Third Prize, China Undergraduate Mathematical Contest in Model], date: "Sep 2023")
]
