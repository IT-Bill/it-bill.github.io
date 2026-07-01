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
  header-right: [上次更新: 2026.2.6],
  name: [张展玮（Zhanwei Zhang）],
  contact: [
    (+86) 13380806800 | #cv-link("mailto:zzhang364@connect.hkust-gz.edu.cn", "zzhang364@connect.hkust-gz.edu.cn") | #cv-link("https://it-bill.github.io/", "https://it-bill.github.io/")
  ],
  address: [广东省广州市南沙区笃学路 1 号],
)[
  #zh-section[教育经历]
  #zh-entry[香港科技大学（广州）| 信息枢纽 | 数据科学与分析学域 | 硕士研究生][2025.9 ~ 至今][
    #zh-line[导师：丁子硕教授]
  ]
  #zh-entry[南方科技大学 | 计算机科学与技术 | 图灵班 | 本科][2021.9 ~ 2025.6][
    #zh-line[导师：刘烨庞教授]
    #zh-line[GPA: 3.79 / 4.0 | 加权平均分: 90.92 | 排名: 36 / 195]
    #zh-line[核心课程: 数理逻辑 (A+), Java程序设计 (A+), 数据结构与算法 (A), 机器学习 (A), 数据库系统 (A-), 编译原理 (B+)]
  ]

  #zh-section[实习经历]
  #zh-entry[领寻，深圳 | 大语言模型实习生][2024.8 ~ 2025.8][
    #zh-line[集成多种类型的检索增强生成 (RAG) 和 GraphRAG 系统。]
    #zh-line[优化 GraphRAG 代码，提升实体 (Entity) 与关系 (Relationship) 的提取质量，构建特定领域的知识图谱。]
    #zh-line[开发并改进数据处理流程 (Pipelines)，显著提高了实体和关系的抽取效果。]
  ]
  #zh-entry[武汉大学 | 访问研究员][2024.5 ~ 2024.8][
    #zh-line[教授：陈金富教授（武汉大学）；Weiyi Shang教授（滑铁卢大学）]
    #zh-line[专注于软件日志记录 (Logging) 与故障规避 (Failure Workarounds) 研究。]
    #zh-line[开发自动化分析流程，用于提取、过滤和采样包含 try-catch 代码块的代码提交。]
  ]

  #zh-section[项目]
  #zh-entry[AI 短剧工作室][2025.9 ~ 至今][
    #zh-line[搭建端到端流程，能够将小说或剧本直接转化为生产级的分镜工作流平台。]
    #zh-line[在集成界面中整合创作、生成、编辑和导出功能，简化了达到发布标准的AI短剧制作流程。]
  ]
  #zh-entry[可定制 AI 陪伴玩偶 (OpenHarmony TSC 项目)][2025.9 ~ 2026.1][
    #zh-line[开发集成云端 LLM 的 AIoT 系统，通过可定制的性格设定和多模态交互提供个性化陪伴体验。]
    #zh-line[构建跨平台前端，涵盖移动端 App 和小程序。]
  ]
  #zh-entry[基于 Java 和 Python 的黑白棋 (Othello) 强人工智能][2021.10 ~ 2021.12 & 2023.3][
    #zh-line[开发了视觉美观的游戏界面，并实现了蒙特卡洛 (Monte Carlo) 及 Alpha-Beta 剪枝算法。]
    #zh-line[排名：3/29 | 胜率：81%（图灵班）]
  ]
  #zh-entry[食堂人流监测系统][2023.12 ~ 2024.1][
    #zh-line[通过监控数据计算排队长度，并展示队列长度变化的实时图表。]
    #zh-line[项目在 3 个月内获得约 30,000 次访问。]
  ]
  #zh-entry[简易编译器][2023.9 ~ 2024.1][
    #zh-line[实现了一款将部分 C 语言文件转换为中间表示 (IR) 和 MIPS32 汇编代码的编译器。]
    #zh-line[支持 I/O 操作、控制流和函数调用等核心功能。]
    #zh-line[实现了词法、语法和语义分析，并提供详细的错误提示信息。]
  ]

  #zh-section[科研经历]
  #zh-entry[浮点计算中的数值错误检测][2024.9 ~ 2026.2][
    #zh-line[PI-detector：提出一种条件数 (Condition-number) 引导的扰动方法以替代昂贵的高精度 Oracle。以仅约 0.13% 的 Oracle 开销发现了 173 个显著错误案例（速度提升高达 73.46 倍）。]
    #pagebreak(weak: false)
    #zh-line[MGDE：将错误检测转化为 Newton-Raphson 引导的收敛输入搜索。在 47 个函数中检测出 80 个 Bug（相比之下 ATOMU 为 70/46，FPCC 为 53/42），速度分别提升了 41.71 倍和 10.17 倍。]
  ]
  #zh-entry[R1 类推理流程复现与评估][2025.5 ~ 2025.6][
    #zh-line[复现 DeepSeek-R1 训练流程，实现了 GRPO 和冷启动监督微调 (Cold-start SFT)，显著增强了 Qwen2.5 系列（0.5B 至 7B）的多步推理能力。]
  ]
  #zh-entry[基于 LLM 的 JSON 解析器模糊测试与行为分析][2023.9 ~ 2024.1][
    #zh-line[利用 Llama2-7B/13B 等开源大模型生成测试用例。]
    #zh-line[对 13 个 JSON 解析器进行了测试，覆盖超过 100 种用例类型，发现了超过 26 种行为差异 (Behavioral Diversities)。]
  ]

  #zh-section[发表论文]
  #zh-line[Tan, Y., #strong[Zhang, Z.], Ding, Z., Zheng, L., Chen, J., & Shang, W. (2025). #emph[A mathematics-guided approach to floating-point error detection.] arXiv. #cv-link("https://arxiv.org/abs/2510.10081", "https://arxiv.org/abs/2510.10081") (Under Review)]
  #zh-line[Tan, Y., #strong[Zhang, Z.], Chen, J., Ding, Z., Xuan, J., & Shang, W. (2025). #emph[Computing floating-point errors by injecting perturbations.] arXiv. #cv-link("https://arxiv.org/abs/2507.08467", "https://arxiv.org/abs/2507.08467")]
  #zh-line[Han, Y., Shen, H., He, X., Mai, Z., Zhang, R., Zheng, Z., Liu, Y., Zhang, X., Li, G., #strong[Zhang, Z.], Liang, Z., Chen, Y., Xie, Y., Li, M., Shen, G., Wang, C., Ye, J., Zhu, L., Fu, T.-M., & Yang, X. (2025). A comprehensive analysis of interflight variability in carbon dioxide emissions from global aviation. #emph[Environmental Science & Technology], 59(12), 6179-6191. doi:10.1021/acs.est.5c02371]

  #zh-section[专利]
  #zh-entry[一种点餐方法、系统、终端及介质][2023.5][
    #zh-line[提出一种缓解食堂高峰期人流拥堵的方法与系统。]
    #zh-line[申请日：2023 年 5 月 5 日；申请号：202310498065]
  ]

  #zh-section[技能]
  #zh-line[#strong[语言：] 英语(流利; IELTS: 6.5), 普通话(母语), 粤语(母语)]
  #zh-line[#strong[编程语言：] Java, Python, C/C++, SQL, JavaScript/TypeScript]
  #zh-line[#strong[框架：] Spring Boot, Vue, React, Langchain]
  #zh-line[#strong[开发工具：] IntelliJ IDEA, PyCharm, Visual Studio Code, Anaconda, Git, CMake]

  #zh-section[荣誉奖项]
  #zh-entry[OpenHarmony 竞赛训练营 | 特别创新奖 (唯一获奖团队) & 二等奖][2025.9][]
  #zh-entry[香港科技大学（广州）| 研究生奖学金 (PGS)][2025.9][]
  #zh-entry[南方科技大学 | 优秀学生][2024.1][]
  #zh-entry[全国大学生数学建模竞赛 | 三等奖][2023.9][]
  #zh-entry[国家级大学生创新创业训练计划 | 优胜奖][2023.6][]
  #zh-entry[美国大学生数学建模竞赛 (MCM) | H 奖 (Honorable Mention)][2023.5][]
]
