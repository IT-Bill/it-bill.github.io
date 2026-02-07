export interface Skill {
  name: string;
  proficiency: 'Proficient' | 'Familiar';
  category: string;
  useCase?: string;
  group: 'language' | 'framework';
}

export const skills: Skill[] = [
  // Languages
  { name: 'Python', proficiency: 'Proficient', category: 'Language', useCase: 'Machine Learning, Backend Development', group: 'language' },
  { name: 'JavaScript/TypeScript', proficiency: 'Proficient', category: 'Language', useCase: 'Frontend & Backend Web Development', group: 'language' },
  { name: 'C++', proficiency: 'Familiar', category: 'Language', useCase: 'High-Performance Computing, Coursework', group: 'language' },
  { name: 'Java', proficiency: 'Familiar', category: 'Language', useCase: 'Enterprise Applications, Android', group: 'language' },

  // Frameworks & Tools
  { name: 'React', proficiency: 'Proficient', category: 'Framework', useCase: 'Declarative UI', group: 'framework' },
  { name: 'Node.js', proficiency: 'Proficient', category: 'Runtime', useCase: 'Backend Services', group: 'framework' },
  { name: 'TensorFlow', proficiency: 'Proficient', category: 'ML Library', useCase: 'Deep Learning', group: 'framework' },
  { name: 'PyTorch', proficiency: 'Proficient', category: 'ML Library', useCase: 'Research', group: 'framework' },
  { name: 'Docker', proficiency: 'Proficient', category: 'DevOps', useCase: 'Containerization', group: 'framework' },
  { name: 'AWS', proficiency: 'Familiar', category: 'Cloud', useCase: 'Deployment', group: 'framework' },
];
