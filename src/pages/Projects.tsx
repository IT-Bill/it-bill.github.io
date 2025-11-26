import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, FolderOpen, FileChartLine, Projector } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Web Development', 'Machine Learning', 'Data Science', 'Embedded Systems'];

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return `${date.toLocaleString('en-US', { month: 'short' })}. ${date.getFullYear()}`;
  };

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="container mx-auto px-4 md:px-8 py-12">
      <div className="max-w-4xl mb-12">
        <h1 className="text-4xl font-black text-white mb-4">My Projects & Portfolio</h1>
        <p className="text-gray-400 text-lg">
          A collection of my work in web development, machine learning, and data science. 
          Each project represents a unique challenge and solution.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              filter === category
                ? 'bg-primary text-white shadow-lg shadow-primary/25'
                : 'bg-card-dark text-gray-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group flex flex-col rounded-xl bg-card-dark border border-border-dark overflow-hidden hover:border-primary/50 transition-all duration-300">
            {/* Image Container */}
            <div className="relative w-full aspect-video overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-4 left-4 z-20">
                 <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-bold shadow-sm backdrop-blur-sm">
                   {project.category}
                 </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-6">
              <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
              
              {(project.startDate || project.endDate) && (
                <p className="text-xs text-primary/80 font-medium mb-3">
                  {formatDate(project.startDate)}
                  {project.startDate && project.endDate && ' - '}
                  {formatDate(project.endDate)}
                </p>
              )}

              <p className="text-gray-400 text-sm mb-6 flex-1 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex justify-end gap-3">
                   {project.repoUrl && (
                     <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary-hover text-primary-foreground text-sm font-medium transition-colors">
                       <Github size={16} />
                       Code
                     </a>
                   )}
                   {project.demoUrl && (
                     <a href={project.demoUrl} target='_blank' rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary-hover text-primary-foreground text-sm font-medium transition-colors">
                       <Projector size={16} />
                       Demo
                     </a>
                   )}

                   {project.reportUrl && (
                     <a href={project.reportUrl} target='_blank' rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary-hover text-primary-foreground text-sm font-medium transition-colors">
                       <FileChartLine size={16} />
                       Report
                     </a>
                   )}

                   {!project.repoUrl && !project.demoUrl && (
                     <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-gray-500 text-sm font-medium cursor-not-allowed">
                       <FolderOpen size={16} />
                       Private
                     </span>
                   )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;