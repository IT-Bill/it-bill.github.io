import type { Experience } from '@/lib/types';

export const EXPERIENCE_DATA: Omit<Experience, 'id'>[] = [
  {
    period: 'Sep 2022 - May 2024',
    title: 'Master of Science in Computer Engineering',
    institution: 'University of Example, City, State',
    description: 'Focused on machine learning algorithms and distributed systems. Thesis project involved developing a novel approach for real-time data processing, improving efficiency by 15%.',
    type: 'education',
    tags: ['Python', 'Machine Learning', 'Distributed Systems']
  },
  {
    period: 'May 2023 - Aug 2023',
    title: 'Software Engineer Intern',
    institution: 'Tech Solutions Inc.',
    description: 'Contributed to the backend services for a major e-commerce platform. Implemented new API endpoints and optimized database queries, reducing average response time by 200ms.',
    type: 'work',
    tags: ['Node.js', 'PostgreSQL', 'REST APIs', 'Docker']
  },
  {
    period: 'Sep 2018 - May 2022',
    title: 'Bachelor of Science in Electrical Engineering',
    institution: 'State University',
    description: 'Graduated with honors. Senior project focused on embedded systems design for an autonomous drone, utilizing C++ and ROS.',
    type: 'education',
    tags: ['C++', 'Embedded Systems', 'ROS']
  },
  {
    period: 'Jan 2022 - May 2022',
    title: 'Research Assistant',
    institution: 'University Robotics Lab',
    description: 'Assisted in research on sensor fusion for robotics, processing and analyzing sensor data using MATLAB and Python.',
    type: 'research',
    tags: ['MATLAB', 'Data Analysis', 'Python']
  }
];
