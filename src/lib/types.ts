import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: 'Web Development' | 'Machine Learning' | 'Data Science' | 'Embedded Systems';
  description: string;
  image: string;
  techStack: string[];
  startDate?: string;
  endDate?: string;
  repoUrl?: string;
  reportUrl?: string;
  demoUrl?: string;
}

export interface Experience {
  id: string;
  period: string;
  title: string;
  institution: string;
  description: string;
  type: 'education' | 'work' | 'research';
  tags: string[];
}

export interface Skill {
  name: string;
  proficiency: 'Proficient' | 'Familiar';
  category: string;
  useCase?: string;
  icon?: React.ReactNode;
}