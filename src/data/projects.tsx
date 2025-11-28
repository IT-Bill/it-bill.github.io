import type { Project } from '@/lib/types';
import tbgBattleSystemImage from '../assets/projects/tbg-battle-system-in-ministm32.png';
import simpleCompilerImage from '../assets/projects/simple-compiler.png';

export const PROJECTS_DATA: Omit<Project, 'id'>[] = [
  {
    title: 'Full-Stack E-commerce Platform',
    category: 'Web Development',
    description: 'A comprehensive e-commerce solution with features like product management, user authentication, and a payment gateway.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGANXxtxTC8gho-G7Tjy94Z_0YZ1wasxw6H0mQ1mxK7UFoaUA-tcvqKKAB4hHxh5TZ5XqqunH80Bid5iDAHz654XdjyFBHq3BtfWK71H4Zox7YEwC3Vs94XTALjvAHyupHKIBNAOIz3hf6PcSiGTGUBUCIHyVcY4uTlmkSc9NDVngC222HOharx6bd26FXb6oJaTI_Boyh6j0e-GzClwr27LSJAmSeyXKE6Sx0aZEe8JbnQpUOpYzkVE2Ac4W-wm2L9jgYpc_J6mAd',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    repoUrl: '#'
  },
  {
    title: 'Real-time Object Detection System',
    category: 'Machine Learning',
    description: 'Developed a system to detect and classify objects in a live video stream using a custom-trained deep learning model.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAh38tCO4bWRoHsjEUtweupmgV_ha9khVGWadZJCteau9hs1wexsW8P0ugz8h52C-Jyx_JnZZ_KFZYy6hSk8M0ykLNzATksUoHWZRaAl421BpAeLABMGx7LZWcX2bZDVTu5BFXPtDXHZ8y667GGz8D_iU-4LHYz1_nUnYZb7LB_NM58XBtYNbNiz4f-OSFA1f3XtP3-BJx0ZJnwmRwgaif0nRUQi-AoPy4Y0Steotn-cjH_MgVNf_EGDQ4Q5fmvX2ISePchfgg_VMtl',
    techStack: ['Python', 'TensorFlow', 'OpenCV', 'Docker'],
    demoUrl: '#'
  },
  {
    title: 'Customer Churn Prediction Model',
    category: 'Data Science',
    description: 'Analyzed a large dataset of customer behavior to build a predictive model that identifies customers at high risk of churning.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC00aEH80r1OVQBcbyu3_NVG4F4LUkxy03t4YyKnoBzCO5KTq95noUfzjmeC9TGY-J2FO5kFM7UkT56MtAZciW4wn7-FKUitm4BU-ZmzGkl67VkhQRyK__59C_NY8FJ4Tryf-Vy19We4Vo6abom_rEjX2s1Npj55RGpzm3Y7i6NvhifhRUzdynk1hnlGEk7ka9QROgSMHf8sqGIoxEIWQ4pQvC7hwYESbu4rT_mhRCtIgiKIJZF61EUi9abv-d3F4Zx9XiSBB5rCQtc',
    techStack: ['Python', 'Pandas', 'Scikit-learn', 'Jupyter'],
    repoUrl: '#'
  },
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
  }
];
