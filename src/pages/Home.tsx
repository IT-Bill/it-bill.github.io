import React from "react";
import { NavLink } from "react-router-dom";
import { PROJECTS } from "../constants";
import {
  ArrowRight,
  Code,
  Database,
  BrainCircuit,
  Terminal,
} from "lucide-react";

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-24 md:pb-32 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
            {/* Text Content */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                <span className="flex h-2 w-2 rounded-full mr-2 animate-pulse bg-primary"></span>
                Available for hire
              </div>
              <h1 className="text-5xl font-black tracking-tight text-foreground mb-6 leading-tight">
                Zhanwei ZHANG
                <span className="block text-xl font-medium text-muted-foreground mt-2">
                  <a
                    href="https://www.hkust-gz.edu.cn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary hover:underline transition-colors "
                  >
                    The Hong Kong University of Science and Technology
                    (Guangzhou)
                  </a>
                </span>
                <span className="block text-xl font-medium text-muted-foreground mt-2">
                  M.Phil. in{" "}
                  <a
                    href="https://www.hkust-gz.edu.cn/academics/hubs-and-thrust-areas/information-hub/data-science-and-analytics/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary hover:underline transition-colors "
                  >
                    Thrust of Data Science and Analytics
                  </a>
                </span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
                A dedicated and innovative engineer with a strong background in
                software development and machine learning, seeking to apply
                academic knowledge and practical skills to solve complex
                challenges.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="/cv-zhanwei.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center px-8 rounded-lg bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                >
                  Download CV
                </a>
                <NavLink
                  to="/projects"
                  className="h-12 px-8 rounded-lg bg-foreground/10 text-foreground font-bold hover:bg-foreground/20 transition-colors flex items-center gap-2"
                >
                  View Projects <ArrowRight size={18} />
                </NavLink>
              </div>
            </div>

            {/* Avatar */}
            <div className="shrink-0 w-64 h-64 md:w-80 md:h-80 relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8T9v4lYI2X295ofmKaNHenOugh4gNcJrEpUaDB73v5sO0M1AhyH1-CF_Iw-J-Hh6O9yJhmm7mUEGEuPKKC9SFyZ6g_mwxtLe3pEspIZeYbo1Xyx_6iYdTJugmsdYQuHfncCoQBowRmNvKheZoWjppC6reNJoEIT1LUbV4G8WK1YJNO0EJuMcXLLGk-nxOooNFbVTrQvkqaDf33CAciMN3Bk_l114yMUVAd9wp2Gfib70A3Ko2oQN2mGRCrPSTYwYOS-DZQOCYqsTR"
                alt="Zhanwei ZHANG"
                className="w-full h-full object-cover rounded-full border-4 border-border/40 shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Skills */}
      <section className="py-16 bg-muted/40 border-y border-border/60">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center md:text-left">
            Core Competencies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                name: "Full Stack Dev",
                icon: <Code className="text-primary" />,
              },
              {
                name: "Machine Learning",
                icon: <BrainCircuit className="text-primary" />,
              },
              {
                name: "Database Systems",
                icon: <Database className="text-primary" />,
              },
              {
                name: "DevOps & Cloud",
                icon: <Terminal className="text-primary" />,
              },
            ].map((skill, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/60 hover:border-primary/50 transition-colors"
              >
                <div className="p-3 rounded-lg bg-primary/10">{skill.icon}</div>
                <span className="font-bold text-foreground">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Featured Projects
            </h2>
            <NavLink
              to="/projects"
              className="text-primary hover:text-foreground transition-colors flex items-center gap-1"
            >
              View All <ArrowRight size={16} />
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.slice(0, 2).map((project) => (
              <div
                key={project.id}
                className="group relative rounded-xl bg-card border border-border overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="text-primary text-xs font-bold uppercase tracking-wider mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-md bg-muted/40 text-muted-foreground text-xs font-medium border border-border/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
