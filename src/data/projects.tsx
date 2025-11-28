import type { Project } from '@/lib/types';
import tbgBattleSystemImage from '../assets/projects/tbg-battle-system-in-ministm32.png';
import simpleCompilerImage from '../assets/projects/simple-compiler.png';
import canteenTrafficMonitoringImage from '../assets/projects/canteen-traffic-monitoring.png';
import capacitatedArcRoutingProblemProjectImage from '../assets/projects/capacitated-arc-routing-problem-project.png';
import cpuInMinisysImage from '../assets/projects/cpu-in-minisys.png';
import estimatingGlobalAviationCo2EmissionsImage from '../assets/projects/estimating-global-aviation-co2-emissions-with-comprehensive-flight-data.png';
import llmBasedJsonParserFuzzingImage from '../assets/projects/llm-based-json-parser-fuzzing-for-bug-discovery-and-behavioral-analysis.png';
import othelloGameThroughJavaImage from '../assets/projects/othello-game-through-java.png';
import reversedReversiThroughPythonImage from '../assets/projects/reversed-reversi-through-python-with-strong-ai.png';

export const PROJECTS_DATA: Omit<Project, 'id'>[] = [
  {
    title: 'TBG Battle System in MiniSTM32',
    category: 'Embedded Systems',
    description: 'The system lets players choose actions for their customizable characters, track HP, and engage in real-time multiplayer matches using miniSTM32 boards with accurate data transmission.',
    image: tbgBattleSystemImage,
    techStack: ['C++', 'Arduino', 'MQTT', 'PlatformIO'],
    startDate: '2023-01-15',
    endDate: '2023-02-15',
    repoUrl: 'https://github.com/IT-Bill/CS301-TBG-Battle-System',
    reportUrl: 'https://github.com/IT-Bill/CS301-TBG-Battle-System/blob/main/report.pdf',
  },
  {
    title: 'Simple Compiler',
    category: 'Embedded Systems',
    description: 'Developed a simple compiler (still has 15,000 lines) that translates C language files into Intermediate Representation (IR) and MIPS32 assembly. The compiler supports essential features such as I/O operations, control flow and function calls. It includes comprehensive lexical, syntax, and semantic analysis, along with informative error messages.',
    image: simpleCompilerImage,
    techStack: ['C++', 'Arduino', 'MQTT', 'PlatformIO'],
    startDate: '2023-01-15',
    endDate: '2023-02-15',
    repoUrl: 'https://github.com/IT-Bill/CS301-TBG-Battle-System',
    reportUrl: 'https://github.com/IT-Bill/CS301-TBG-Battle-System/blob/main/report.pdf',
  },
  {
    title: 'Canteen Traffic Monitoring',
    category: 'Data Science',
    description: 'Calculated the canteen queue length from live monitoring data and visualized how the queue changed over time, attracting 30,000 visits in three months.',
    image: canteenTrafficMonitoringImage,
    techStack: ['Data Monitoring', 'Time Series Analysis', 'Interactive Dashboards'],
    startDate: '2023-12-31',
    repoUrl: 'https://github.com/SUSTech-CRA/sustech-online-ng',
    demoUrl: 'https://sustech.online/canteen/',
  },
  {
    title: 'Capacitated Arc Routing Problem Project',
    category: 'Machine Learning',
    description: 'Built a memetic and hybrid metaheuristic solver that reaches optimal CARP solutions on small and medium graphs within 180 seconds and delivers competitive performance on 255-vertex networks.',
    image: capacitatedArcRoutingProblemProjectImage,
    techStack: ['Memetic Algorithm', 'Heuristics', 'Combinatorial Optimization'],
    startDate: '2023-05-01',
    repoUrl: 'https://github.com/IT-Bill/CS311-AI/tree/main/Proj-CARP',
    reportUrl: 'https://github.com/IT-Bill/CS311-AI/blob/main/Proj-CARP/CARP_Report.pdf',
  },
  {
    title: 'CPU in Minisys',
    category: 'Embedded Systems',
    description: 'Implemented a Minisys-compatible CPU that supports 32 core instructions, parses COE binaries, and interfaces with users through the Minisys development board.',
    image: cpuInMinisysImage,
    techStack: ['Verilog', 'Digital Design', 'FPGA'],
    startDate: '2023-06-01',
    repoUrl: 'https://github.com/IT-Bill/CS214-CPU',
    demoUrl: 'https://github.com/IT-Bill/CS214-CPU/blob/main/image/video.mp4',
  },
  {
    title: 'Estimating Global Aviation CO2 Emissions with Comprehensive Flight Data',
    category: 'Data Science',
    description: 'Processed 10 TB of Flightradar24 data covering 153 million flights to model aircraft-level CO2 emissions, explain 99.4% of emission variance, and highlight taxi optimization strategies that cut emissions by up to 20%.',
    image: estimatingGlobalAviationCo2EmissionsImage,
    techStack: ['Big Data Analytics', 'Statistical Modeling', 'Machine Learning'],
    startDate: '2022-05-01',
  },
  {
    title: 'LLM-Based JSON Parser Fuzzing for Bug Discovery and Behavioral Analysis',
    category: 'Machine Learning',
    description: 'Used open-source LLMs such as Llama2-7B/13B to synthesize diverse JSON inputs, exercising 13 parsers with 100+ case types and surfacing 26 behavioral divergences.',
    image: llmBasedJsonParserFuzzingImage,
    techStack: ['Python', 'LLM', 'Fuzzing'],
    startDate: '2023-10-01',
    reportUrl: '/uploads/llm-json-parser-fuzzing-final-report.pdf',
  },
  {
    title: 'Othello Game through Java',
    category: 'Web Development',
    description: 'Developed a visually engaging Othello experience with an interactive Swing interface and smooth in-game animations.',
    image: othelloGameThroughJavaImage,
    techStack: ['Java', 'Swing'],
    startDate: '2021-12-01',
    repoUrl: 'https://github.com/IT-Bill/Reversi-Java',
  },
  {
    title: 'Reversed Reversi through Python with Strong AI',
    category: 'Machine Learning',
    description: 'Implemented Monte Carlo search together with FAST alpha-beta pruning accelerated by bitwise operations to build a strong Reversed Reversi AI.',
    image: reversedReversiThroughPythonImage,
    techStack: ['Python', 'Monte Carlo Search', 'Alpha-Beta Pruning'],
    startDate: '2022-10-01',
    repoUrl: 'https://github.com/IT-Bill/CS311-AI/tree/main/Proj-Reversed-Reversi',
  }
];
