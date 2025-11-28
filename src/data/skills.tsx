import type { Skill } from '@/lib/types';
import { 
  Code2, 
  BrainCircuit, 
  Layout, 
  Server, 
  Terminal, 
  Cloud 
} from 'lucide-react';

export const PROGRAMMING_LANGUAGES_DATA: Skill[] = [
  { name: 'Python', proficiency: 'Proficient', category: 'Language', useCase: 'Machine Learning, Backend Development', icon: <Code2 /> },
  { name: 'JavaScript/TypeScript', proficiency: 'Proficient', category: 'Language', useCase: 'Frontend & Backend Web Development', icon: <Code2 /> },
  { name: 'C++', proficiency: 'Familiar', category: 'Language', useCase: 'High-Performance Computing, Coursework', icon: <Code2 /> },
  { name: 'Java', proficiency: 'Familiar', category: 'Language', useCase: 'Enterprise Applications, Android', icon: <Code2 /> },
];

export const FRAMEWORKS_DATA: Skill[] = [
  { name: 'React', proficiency: 'Proficient', category: 'Framework', useCase: 'Declarative UI', icon: <Layout /> },
  { name: 'Node.js', proficiency: 'Proficient', category: 'Runtime', useCase: 'Backend Services', icon: <Server /> },
  { name: 'TensorFlow', proficiency: 'Proficient', category: 'ML Library', useCase: 'Deep Learning', icon: <BrainCircuit /> },
  { name: 'PyTorch', proficiency: 'Proficient', category: 'ML Library', useCase: 'Research', icon: <BrainCircuit /> },
  { name: 'Docker', proficiency: 'Proficient', category: 'DevOps', useCase: 'Containerization', icon: <Terminal /> },
  { name: 'AWS', proficiency: 'Familiar', category: 'Cloud', useCase: 'Deployment', icon: <Cloud /> },
];
