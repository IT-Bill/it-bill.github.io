import type { Experience } from '@/lib/types';
import React from 'react';
import { EXPERIENCE } from '@/constants';
import { GraduationCap, Briefcase, FlaskConical, CalendarDays, MapPin, Sparkles } from 'lucide-react';

const getIconByType = (type: Experience['type']) => {
  switch (type) {
    case 'education':
      return <GraduationCap size={18} />;
    case 'work':
      return <Briefcase size={18} />;
    case 'research':
      return <FlaskConical size={18} />;
    default:
      return <Sparkles size={18} />;
  }
};

const Experiences: React.FC = () => {
  return (
    <div className="w-full">
      <section className="bg-linear-to-b from-background via-background/95 to-background px-4 md:px-8 py-12 md:py-20">
        <div className="container mx-auto max-w-6xl">

          <div className="relative border-l border-border-dark ml-3 md:ml-6 space-y-12 pb-4">
            {EXPERIENCE.map((exp) => (
              <article key={exp.id} className="relative pl-8 md:pl-12 group">
                <div className="absolute -left-5 top-0 h-10 w-10 rounded-full border-2 border-primary/40 flex items-center justify-center text-primary  backdrop-blur">
                  {getIconByType(exp.type)}
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-primary">
                    <span className="inline-flex items-center gap-1"><CalendarDays size={14} /> {exp.period}</span>
                    <span className="inline-flex items-center gap-1 text-muted-foreground">
                      <MapPin size={14} />
                      {exp.institution}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-3xl">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded text-xs font-medium bg-card border border-border/60 text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experiences;
