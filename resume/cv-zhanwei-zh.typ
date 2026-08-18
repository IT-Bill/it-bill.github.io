#import "template.typ": *

#let zh-line(body) = cv-line(size: 8pt, below: 8.8pt)[#body]
#let zh-section(title) = cv-section(title, above: 16pt)
#let zh-entry(title, date, body) = cv-entry(
  title: title,
  date: date,
  title-size: 9pt,
  line-below: 0pt,
)[#body]

#cv-resume(
  lang: "zh",
  fonts: ("Times New Roman", "Songti SC"),
  body-size: 8pt,
  body-leading: 0.92em,
  header-left: [个人简历： 张展玮],
  header-right: [上次更新: 2026.8.17],
  name: [张展玮（Zhanwei Zhang）],
  contact: [
    (+86) 13380806800 | #cv-link("mailto:zzhang364@connect.hkust-gz.edu.cn", "zzhang364@connect.hkust-gz.edu.cn") | #cv-link("https://it-bill.github.io/", "https://it-bill.github.io/")
  ],
)[
  #zh-section[教育经历]
  #zh-entry[香港科技大学（广州）| 信息枢纽 | 数据科学与分析学域 | 硕士研究生][2025.9 \~ 至今][
    #zh-line[导师：丁子硕教授]
  ]
  #zh-entry[南方科技大学 | 计算机科学与技术 | 图灵班 | 本科][2021.9 \~ 2025.6][
    #zh-line[导师：刘烨庞教授]
    #zh-line[GPA: 3.79 / 4.0 | 加权平均分: 90.92 | 排名: 36 / 195]
    #zh-line[核心课程：数据结构与算法 (A), 机器学习 (A), 数据库系统 (A-), 编译原理 (B+)]
  ]

  #zh-section[实习经历]
  #zh-entry[高通，深圳 | AI Agent 平台实习生][2026.5 \~ 至今][
    #zh-line[主导内部 AI Agent 平台架构演进，支持 Agent / Workflow / Tool 的统一接入。]
    #zh-line[设计 Engine + Plugin 架构，基于 Python Entry Points 与 Module Federation 实现前后端动态加载。]
    #zh-line[基于 DeepAgents 构建 Agent Runtime，统一 Tool / MCP / Skills / Subagent 集成，并支持 AG-UI 与 HITL。]
  ]
  #zh-entry[领寻，深圳 | LLM 实习生][2024.8 \~ 2025.8][
    #zh-line[设计多粒度 RAG 索引与联合检索策略，提升领域数据的检索质量。]
    #zh-line[研究并适配 Microsoft GraphRAG 至公司领域数据，构建领域知识图谱。]
    #zh-line[探索 RAG 自动评测，通过问题生成与 Ground Truth 标注搭建验证原型。]
  ]
  #zh-entry[武汉大学，武汉 | 访问研究员][2024.5 \~ 2024.8][
    #zh-line[导师：陈金富教授（武汉大学）；Weiyi Shang 教授（滑铁卢大学）]
    #zh-line[研究软件 Logging 与 Failure Workarounds，并搭建自动化流程挖掘和采样相关代码提交。]
  ]

  #zh-section[项目]
  #zh-entry[OpenStar][2026.7 \~ 至今][
    #zh-line[构建 Chat / Explore / Watch Agent 工作流，用于开源项目发现、理解与持续追踪。]
    #zh-line[设计 Agent 调研与 Watch 链路，由 Agent 自主调用工具检查 Release 与仓库 Activity，并生成结构化评估。]
  ]
  #zh-entry[NIYO.AI 定制甲片 3D 标注与建模平台][2026.1 \~ 至今][
    #zh-line[主导将视觉、几何原型工程化为 3D 标注与建模平台，完成全栈开发与任务流建设，打通视觉处理到 3D 建模链路。]
    #zh-line[负责合成数据与模型训练链路，搭建大规模多视角数据生成流程，支撑百万级样本及模型训练、评估与生产推理。]
    #zh-line[以 Rust 重构共享几何内核并提供 Python / WASM 绑定，将计算从数百毫秒降至约 10ms，支撑实时 3D 交互。]
  ]
  #zh-entry[WiTH AI 健康伙伴][2026.6][
    #zh-line[构建 AI 健康 Agent，整合用户画像、健康记录与 20+ Tool Calling 能力，实现个性化交互。]
    #zh-line[实现语义记忆与主动健康提醒，将对话转化为可执行任务；获深圳黑客松三等奖。]
  ]
  #zh-entry[AI 短剧工作室][2025.9 \~ 2026.1][
    #zh-line[搭建端到端流程，将小说/剧本转化为分镜，并在统一工作流中整合生成、编辑与导出。]
  ]
  #zh-entry[基于 Java 和 Python 的黑白棋 (Othello) 强人工智能][2023.3][
    #zh-line[实现 Monte Carlo 与 Alpha-Beta 搜索；排名 3/29，胜率 81%。]
  ]
  #zh-entry[食堂人流监测系统][2023.12 \~ 2024.1][
    #zh-line[基于监控数据估算排队长度并实时展示变化。]
    #zh-line[获国家级大学生创新创业训练计划优胜奖。]
    #zh-line[上线 3 个月约 30,000 次访问。]
  ]

  #zh-section[科研经历]
  #zh-entry[浮点计算中的数值错误检测][2024.9 \~ 2026.2][
    #zh-line[开发扰动与 Newton 引导的错误检测方法，以约 0.13% 的 Oracle 开销发现 173/174 个显著错误案例，并在 47 个函数中检测出 80 个 Bug。]
  ]
  #zh-entry[R1-style 推理流程复现与评估][2025.5 \~ 2025.6][
    #zh-line[在 Qwen2.5（0.5B–7B）上实现 Cold-start SFT 与 GRPO，复现并评估 R1-style 推理训练流程。]
  ]
  #zh-entry[基于 LLM 的 JSON Parser Fuzzing][2023.9 \~ 2024.1][
    #zh-line[使用 Llama 2 7B/13B 对 13 个 JSON Parser 进行 Fuzzing，覆盖 100+ 用例类型，发现 26+ 行为差异。]
  ]

  #zh-section[代表性论文]
  #zh-line[Y. Tan, #strong[Z. Zhang], et al. #emph[“ICE: Reducing Search Space for Error-Inducing Input Detection.”] IEEE Transactions on Software Engineering, 2026.]
  #zh-line[Y. Tan, #strong[Z. Zhang], et al. #emph[“Mathematically-Guided Detection of Floating-Point Errors.”] ISSTA 2026.]

  #zh-section[专利]
  #zh-entry[一种点餐方法、系统、终端及介质][2023.5][
    #zh-line[提出一种缓解食堂高峰期人流拥堵的方法与系统。]
    #zh-line[申请日：2023 年 5 月 5 日；申请号：202310498065]
  ]

  #zh-section[技能]
  #zh-line[#strong[编程语言：] Python, Rust, C/C++, TypeScript/JavaScript, Java, SQL]
  #zh-line[#strong[框架与技术：] PyTorch, React / Next.js, PostgreSQL, Docker, Git]
  #zh-line[#strong[AI 开发工具：] Codex, Claude Code]
  #zh-line[#strong[语言能力：] 普通话（母语）, 粤语（母语）, 英语（IELTS 6.5）]

  #zh-section[荣誉奖项]
  #cv-honor(title: [2026 深圳黑客松 | 三等奖], date: "2026.6")
  #cv-honor(title: [OpenHarmony 竞赛训练营 | 特别创新奖（唯一获奖团队）& 二等奖], date: "2025.9")
  #cv-honor(title: [香港科技大学（广州）| 研究生奖学金 (PGS)], date: "2025.9")
  #cv-honor(title: [南方科技大学 | 优秀学生], date: "2024.1")
  #cv-honor(title: [美国大学生数学建模竞赛 (MCM) | H 奖 (Honorable Mention)], date: "2023.5")
  #cv-honor(title: [国家级大学生创新创业训练计划 | 优胜奖], date: "2023.6")
  #cv-honor(title: [全国大学生数学建模竞赛 | 三等奖], date: "2023.9")
]
