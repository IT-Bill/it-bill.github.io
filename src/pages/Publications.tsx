import React from "react";
import { PUBLICATIONS } from "@/lib/constants";
import { FileText, Code, Users, Calendar } from "lucide-react";

const Publications: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12">
      <div className="space-y-6">
        {PUBLICATIONS.map((pub) => (
          <div
            key={pub.id}
            className="bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/40 transition-all group shadow-sm hover:shadow-primary/5"
          >
            <div className="flex flex-col md:flex-row justify-between gap-4 mb-3">
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {pub.title}
              </h3>
              <span className="shrink-0 px-3 py-1 rounded-full bg-muted/60 text-sm font-medium text-muted-foreground border border-border/60 h-fit w-fit flex items-center gap-2">
                <Calendar size={14} className="text-muted-foreground" />
                {pub.year}
              </span>
            </div>

            <div className="text-primary font-medium mb-3 flex items-center gap-2">
              <span className="bg-primary/10 px-2 py-1 rounded text-sm border border-primary/20 text-primary">
                {pub.conference}
              </span>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
              <Users size={16} className="text-muted-foreground" />
              <span className="italic">{pub.authors.join(", ")}</span>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed border-l border-border/50 pl-4">
              {pub.description}
            </p>

            <div className="flex flex-wrap gap-4">
              {pub.paperUrl && (
                <a
                  href={pub.paperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors bg-card border border-border px-4 py-2 rounded-lg hover:border-primary/50 hover:bg-muted/20"
                >
                  <FileText size={18} /> Read Paper
                </a>
              )}
              {pub.repoUrl && (
                <a
                  href={pub.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors bg-card border border-border px-4 py-2 rounded-lg hover:border-primary/50 hover:bg-muted/20"
                >
                  <Code size={18} /> View Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
