#import "template.typ": *

#cv-resume(
  lang: "en",
  body-size: 9pt,
  body-leading: 0.88em,
  header-left: [Curriculum Vitae for Zhanwei Zhang],
  header-right: [Last Update: Jul 3, 2026],
  name: [Zhanwei Zhang (张展玮)],
  contact: [
    (+86) 13380806800 | #cv-link("mailto:zzhang364@connect.hkust-gz.edu.cn", "zzhang364@connect.hkust-gz.edu.cn") | #cv-link("https://it-bill.github.io/", "https://it-bill.github.io/")
  ],
  address: [No.1 Du Xue Rd, Nansha District, Guangzhou, Guangdong],
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
    #cv-line[Main courses: Mathematical Logic (A+), Java Programming (A+), Data Structures & Algorithms (A), Machine Learning (A), Database Systems (A-), Compilers (B+)]
  ]

  #cv-section[Internships]
  #cv-entry(title: [Large Language Model Intern in Lingsome, Shenzhen], date: "Aug 2024 ~ Aug 2025")[
    #cv-line[Integrated multi-type Retrieval Augmented Generation (RAG) and GraphRAG systems.]
    #cv-line[Optimized GraphRAG code to extract better entities & relationships and construct domain-specific knowledge graphs.]
    #cv-line[Developed and refined pipelines to extract improved entities and relationships.]
  ]
  #cv-entry(title: [Visiting Researcher in Wuhan University, Wuhan], date: "May ~ Aug 2024")[
    #cv-line[Advisor: Prof. Jinfu Chen (WHU); Prof. Weiyi Shang (UWaterloo)]
    #cv-line[Focused on software logging and failure workarounds.]
    #cv-line[Developed an automated analysis pipeline to extract, filter, and sample code commits containing try-catch blocks.]
  ]

  #cv-section[Selected Projects]
  #cv-entry(title: [WiTH - AI Health Companion], date: "Jun 2026")[
    #cv-line[Built an AI health companion for the 2026 Shenzhen Hackathon, combining health records, AI chat, and personalized reminders.]
    #cv-line[Designed the product workflow from daily health tracking to companion-style interaction, helping the team win Third Prize.]
  ]
  #cv-entry(title: [AI Micro-Drama Studio], date: "Sep 2025 ~ Jan 2026")[
    #cv-line[Built an end-to-end pipeline that transforms novels or scripts into production-ready storyboards.]
    #cv-line[Unified creation, generation, editing, and export in one interface to streamline publish-ready video production.]
  ]
  #cv-entry(title: [Customizable AI Companion Doll (OpenHarmony TSC Project)], date: "Sep 2025 ~ Jan 2026")[
    #cv-line[Developed an AIoT system integrating cloud-based LLMs to provide personalized companionship through customizable personalities and multimodal interaction.]
    #cv-line[Built the cross-platform frontend, including a mobile App and Mini-program.]
  ]
  #cv-entry(title: [Othello Game through Java and Python Programming with Strong AI], date: "Oct ~ Dec 2021 & Mar 2023")[
    #cv-line[Developed visually appealing interface and implemented Monte Carlo & Alpha Beta Pruning algorithm.]
  ]
  #cv-entry(title: [Canteen Traffic Monitoring], date: "Dec 2023 ~ Jan 2024")[
    #cv-line[Calculated the length of the queue by monitoring data and displayed a chart showing the changes in queue length.]
    #cv-line[Won award for finalist in National College Students' Innovation and Entrepreneurship Training program.]
    #cv-line[About 30,000 visits within three months.]
  ]
  #cv-entry(title: [Simple Compiler], date: "Sep 2023 ~ Jan 2024")[
    #cv-line[Developed a compiler that translates C language files into Intermediate Representation (IR) and MIPS32.]
    #cv-line[Supported essential features such as I/O operations, control flow and function calls.]
  ]

  #pagebreak(weak: false)
  #cv-section[Research]
  #cv-entry(title: [Numerical Error Detection in Floating-Point Computing], date: "Sep 2024 ~ Feb 2026")[
    #cv-line[PI-detector: A condition-number-guided perturbation approach can replace costly high-precision oracles, finding 173/174 significant-error cases at about 0.13% of oracle cost (up to 73.46× faster).]
    #cv-line[MGDE: Turn detection into a Newton-Raphson-guided convergent input search, reaching 80 bugs / 47 functions (vs. 70/46 ATOMU, 53/42 FPCC) while being 41.71× and 10.17× faster, respectively.]
  ]
  #cv-entry(title: [Reproduction and Evaluation of R1-style Reasoning Pipeline], date: "May 2025 ~ Jun 2025")[
    #cv-line[Replicated the DeepSeek-R1 training pipeline by implementing GRPO and Cold-start SFT, significantly enhancing the multi-step reasoning capabilities of Qwen2.5 models (0.5B to 7B).]
  ]
  #cv-entry(title: [LLM-Based JSON Parser Fuzzing for Bug Discovery and Behavioral Analysis], date: "Sep 2023 ~ Jan 2024")[
    #cv-line[Used opensource LLMs such as Llama2-7B/13B to generate test cases.]
    #cv-line[13 JSON Parsers and over 100 types of cases have been tested. Over 26 behavioral diversities have been found.]
  ]

  #cv-section[Publications]
  #cv-line[Tan, Y., #strong[Zhang, Z.], Ding, Z., Zheng, L., Chen, J., & Shang, W. (2025). #emph[A mathematics-guided approach to floating-point error detection.] arXiv. #cv-link("https://arxiv.org/abs/2510.10081", "https://arxiv.org/abs/2510.10081") (Under Review)]
  #cv-line[Tan, Y., #strong[Zhang, Z.], Chen, J., Ding, Z., Xuan, J., & Shang, W. (2025). #emph[Computing floating-point errors by injecting perturbations.] arXiv. #cv-link("https://arxiv.org/abs/2507.08467", "https://arxiv.org/abs/2507.08467")]
  #cv-line[Han, Y., Shen, H., He, X., Mai, Z., Zhang, R., Zheng, Z., Liu, Y., Zhang, X., Li, G., #strong[Zhang, Z.], Liang, Z., Chen, Y., Xie, Y., Li, M., Shen, G., Wang, C., Ye, J., Zhu, L., Fu, T.-M., & Yang, X. (2025). A comprehensive analysis of interflight variability in carbon dioxide emissions from global aviation. #emph[Environmental Science & Technology], 59(12), 6179-6191. doi:10.1021/acs.est.5c02371]

  #cv-section[Patents]
  #cv-entry(title: [一种点餐方法、系统、终端及介质 (Innovative Ordering Method, System, Terminal, and Medium Patent)], date: "May 2023")[
    #cv-line[Innovated a method and system to alleviate peak-hour traffic in cafeterias.]
    #cv-line[Applied on May 5, 2023; Application no: 202310498065]
  ]

  #cv-section[Skills]
  #cv-skill[Languages][English (Fluent; IELTS: 6.5), Mandarin (Native), Cantonese (Native)]
  #cv-skill[Programming Languages & Frameworks][Java, Python, C/C++, SQL, Spring Boot, Vue, React]
  #cv-skill[Tools][IntelliJ IDEA, PyCharm, Visual Studio Code, Anaconda, Git, CMake]

  #cv-section[Honors & Scholarships]
  #cv-honor(title: [Third Prize, Shenzhen Hackathon], date: "Jun 2026")
  #cv-honor(title: [Special Innovation Award (Unique Winner) & Second Prize, OpenHarmony Competition Training Camp], date: "Sep 2025")
  #cv-honor(title: [Postgraduate Studentship (PGS), HKUST(GZ)], date: "Sep 2025")
  #cv-honor(title: [Outstanding Student, SUSTech], date: "Jan 2024")
  #cv-honor(title: [Honorable Mention, Mathematical Contest in Modeling], date: "May 2023")
  #cv-honor(title: [Finalist, National College Students' Innovation and Entrepreneurship Training program], date: "Jun 2023")
  #cv-honor(title: [Third Prize, China Undergraduate Mathematical Contest in Model], date: "Sep 2023")
]
