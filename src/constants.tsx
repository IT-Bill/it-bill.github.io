import type { Project, Experience, Skill } from '@/lib/types';
import { 
  Code2, 
  BrainCircuit, 
  Layout, 
  Server, 
  Terminal, 
  Cloud 
} from 'lucide-react';
import tbgBattleSystemImage from './assets/projects/tbg-battle-system-in-ministm32.png';
import simpleCompilerImage from './assets/projects/simple-compiler.png';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Full-Stack E-commerce Platform',
    category: 'Web Development',
    description: 'A comprehensive e-commerce solution with features like product management, user authentication, and a payment gateway.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGANXxtxTC8gho-G7Tjy94Z_0YZ1wasxw6H0mQ1mxK7UFoaUA-tcvqKKAB4hHxh5TZ5XqqunH80Bid5iDAHz654XdjyFBHq3BtfWK71H4Zox7YEwC3Vs94XTALjvAHyupHKIBNAOIz3hf6PcSiGTGUBUCIHyVcY4uTlmkSc9NDVngC222HOharx6bd26FXb6oJaTI_Boyh6j0e-GzClwr27LSJAmSeyXKE6Sx0aZEe8JbnQpUOpYzkVE2Ac4W-wm2L9jgYpc_J6mAd',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    repoUrl: '#'
  },
  {
    id: '2',
    title: 'Real-time Object Detection System',
    category: 'Machine Learning',
    description: 'Developed a system to detect and classify objects in a live video stream using a custom-trained deep learning model.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAh38tCO4bWRoHsjEUtweupmgV_ha9khVGWadZJCteau9hs1wexsW8P0ugz8h52C-Jyx_JnZZ_KFZYy6hSk8M0ykLNzATksUoHWZRaAl421BpAeLABMGx7LZWcX2bZDVTu5BFXPtDXHZ8y667GGz8D_iU-4LHYz1_nUnYZb7LB_NM58XBtYNbNiz4f-OSFA1f3XtP3-BJx0ZJnwmRwgaif0nRUQi-AoPy4Y0Steotn-cjH_MgVNf_EGDQ4Q5fmvX2ISePchfgg_VMtl',
    techStack: ['Python', 'TensorFlow', 'OpenCV', 'Docker'],
    demoUrl: '#'
  },
  {
    id: '3',
    title: 'Customer Churn Prediction Model',
    category: 'Data Science',
    description: 'Analyzed a large dataset of customer behavior to build a predictive model that identifies customers at high risk of churning.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC00aEH80r1OVQBcbyu3_NVG4F4LUkxy03t4YyKnoBzCO5KTq95noUfzjmeC9TGY-J2FO5kFM7UkT56MtAZciW4wn7-FKUitm4BU-ZmzGkl67VkhQRyK__59C_NY8FJ4Tryf-Vy19We4Vo6abom_rEjX2s1Npj55RGpzm3Y7i6NvhifhRUzdynk1hnlGEk7ka9QROgSMHf8sqGIoxEIWQ4pQvC7hwYESbu4rT_mhRCtIgiKIJZF61EUi9abv-d3F4Zx9XiSBB5rCQtc',
    techStack: ['Python', 'Pandas', 'Scikit-learn', 'Jupyter'],
    repoUrl: '#'
  },
  {
    id: '4',
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
    id: '5',
    title: 'Simple Compiler',
    category: 'Embedded Systems',
    description: 'Developed a simple compiler (still has 15,000 lines) that translates C language files into Intermediate Representation (IR) and MIPS32 assembly. The compiler supports essential features such as I/O operations, control flow and function calls. It includes comprehensive lexical, syntax, and semantic analysis, along with informative error messages.',
    image: simpleCompilerImage,
    techStack: ['C++', 'Arduino', 'MQTT', 'PlatformIO'],
    startDate: '2023-01-15',
    endDate: '2023-02-15',
    repoUrl: 'https://github.com/IT-Bill/CS301-TBG-Battle-System',
    reportUrl: 'https://github.com/IT-Bill/CS301-TBG-Battle-System/blob/main/report.pdf',
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    period: 'Sep 2022 - May 2024',
    title: 'Master of Science in Computer Engineering',
    institution: 'University of Example, City, State',
    description: 'Focused on machine learning algorithms and distributed systems. Thesis project involved developing a novel approach for real-time data processing, improving efficiency by 15%.',
    type: 'education',
    tags: ['Python', 'Machine Learning', 'Distributed Systems']
  },
  {
    id: '2',
    period: 'May 2023 - Aug 2023',
    title: 'Software Engineer Intern',
    institution: 'Tech Solutions Inc.',
    description: 'Contributed to the backend services for a major e-commerce platform. Implemented new API endpoints and optimized database queries, reducing average response time by 200ms.',
    type: 'work',
    tags: ['Node.js', 'PostgreSQL', 'REST APIs', 'Docker']
  },
  {
    id: '3',
    period: 'Sep 2018 - May 2022',
    title: 'Bachelor of Science in Electrical Engineering',
    institution: 'State University',
    description: 'Graduated with honors. Senior project focused on embedded systems design for an autonomous drone, utilizing C++ and ROS.',
    type: 'education',
    tags: ['C++', 'Embedded Systems', 'ROS']
  },
  {
    id: '4',
    period: 'Jan 2022 - May 2022',
    title: 'Research Assistant',
    institution: 'University Robotics Lab',
    description: 'Assisted in research on sensor fusion for robotics, processing and analyzing sensor data using MATLAB and Python.',
    type: 'research',
    tags: ['MATLAB', 'Data Analysis', 'Python']
  }
];

export const PROGRAMMING_LANGUAGES: Skill[] = [
  { name: 'Python', proficiency: 'Proficient', category: 'Language', useCase: 'Machine Learning, Backend Development', icon: <Code2 /> },
  { name: 'JavaScript/TypeScript', proficiency: 'Proficient', category: 'Language', useCase: 'Frontend & Backend Web Development', icon: <Code2 /> },
  { name: 'C++', proficiency: 'Familiar', category: 'Language', useCase: 'High-Performance Computing, Coursework', icon: <Code2 /> },
  { name: 'Java', proficiency: 'Familiar', category: 'Language', useCase: 'Enterprise Applications, Android', icon: <Code2 /> },
];

export const FRAMEWORKS: Skill[] = [
  { name: 'React', proficiency: 'Proficient', category: 'Framework', useCase: 'Declarative UI', icon: <Layout /> },
  { name: 'Node.js', proficiency: 'Proficient', category: 'Runtime', useCase: 'Backend Services', icon: <Server /> },
  { name: 'TensorFlow', proficiency: 'Proficient', category: 'ML Library', useCase: 'Deep Learning', icon: <BrainCircuit /> },
  { name: 'PyTorch', proficiency: 'Proficient', category: 'ML Library', useCase: 'Research', icon: <BrainCircuit /> },
  { name: 'Docker', proficiency: 'Proficient', category: 'DevOps', useCase: 'Containerization', icon: <Terminal /> },
  { name: 'AWS', proficiency: 'Familiar', category: 'Cloud', useCase: 'Deployment', icon: <Cloud /> },
];