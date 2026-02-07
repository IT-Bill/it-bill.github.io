import type { Experience } from '../lib/types';

export const EXPERIENCE_DATA: Omit<Experience, 'id'>[] = [
  {
    period: 'Sep 2024 - Aug 2025',
    title: 'Large Language Model Intern',
    institution: 'Linksome, Shenzhen',
    description: '• Integrated multi-type Retrieval Augmented Generation (RAG) and GraphRAG systems.\n• Optimized GraphRAG code to extract better entities & relationships and construct domain-specific knowledge graphs.\n• Built a QA Pipeline for generating high-quality QA pairs from documents with accurate ground truth annotations.',
    type: 'work',
    tags: ['LLM', 'RAG', 'GraphRAG', 'Knowledge Graph', 'NLP']
  },
  {
    period: 'May 2024 - Aug 2024',
    title: 'Visiting Researcher',
    institution: 'Wuhan University, Wuhan',
    description: 'Advisor: Prof. Jinfu Chen (WHU); Prof. Weiyi Shang (UWaterloo)\n• Focused on software logging and failure workarounds.\n• Developed an automated analysis pipeline to extract, filter, and sample code commits containing try-catch blocks.\n• Conducted research on floating-point error detection, proposing novel approaches for identifying error-inducing inputs in numerical programs.',
    type: 'research',
    tags: ['Software Engineering', 'Software Logging', 'Code Analysis', 'Floating-Point Errors']
  },
  {
    period: 'Sep 2021 - Jun 2025',
    title: 'B.Eng. in Computer Science and Technology',
    institution: 'Southern University of Science and Technology (SUSTech)',
    description: 'Turing Master Class | Advisor: Prof. Yepang Liu\nGPA: 3.79/4.0 | Weighted Avg Score: 90.92 | Ranking: 36/195\nMain courses: Math Logic (A+), Computer Programming (A+), Calculus (A), Linear Algebra (A), Data Structures & Algorithms (A), Database Systems (A-), Machine Learning (A), Compilers (B+)',
    type: 'education',
    tags: ['Machine Learning', 'Data Structures', 'Algorithms', 'Database Systems', 'Compilers']
  },
];
