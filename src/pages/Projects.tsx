import React, { useState } from 'react';
import { PROJECTS } from '@/lib/constants';
import { Github, FolderOpen, FileChartLine, Projector } from 'lucide-react';

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
        <p className="text-muted-foreground text-lg">
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
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                : 'bg-card text-muted-foreground hover:bg-muted/60 hover:text-foreground'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group flex flex-col rounded-xl bg-card border border-border/70 overflow-hidden hover:border-primary/50 transition-all duration-300">
            {/* Image Container */}
            <div className="relative w-full aspect-video overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent dark:from-black/70 z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500"
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
                <p className="text-xs text-muted-foreground font-medium mb-3">
                  {formatDate(project.startDate)}
                  {project.startDate && project.endDate && ' - '}
                  {formatDate(project.endDate)}
                </p>
              )}

              <p className="text-muted-foreground text-sm mb-6 flex-1 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border/60 flex justify-end gap-3">
                   {project.repoUrl && (
                     <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors bg-card border border-border px-4 py-2 rounded-lg hover:border-primary/50 hover:bg-muted/20">
                       <Github size={16} />
                       Code
                     </a>
                   )}
                   {project.demoUrl && (
                     <a href={project.demoUrl} target='_blank' rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors bg-card border border-border px-4 py-2 rounded-lg hover:border-primary/50 hover:bg-muted/20">
                       <Projector size={16} />
                       Demo
                     </a>
                   )}

                   {project.reportUrl && (
                     <a href={project.reportUrl} target='_blank' rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors bg-card border border-border px-4 py-2 rounded-lg hover:border-primary/50 hover:bg-muted/20">
                       <FileChartLine size={16} />
                       Report
                     </a>
                   )}

                   {!project.repoUrl && !project.demoUrl && !project.reportUrl && (
                     <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-muted-foreground text-sm font-medium cursor-not-allowed">
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