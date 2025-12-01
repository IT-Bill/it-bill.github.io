import React from "react";
import { NavLink } from "react-router-dom";
import { PROJECTS } from "@/lib/constants";
import {
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Mail,
  GraduationCap,
} from "lucide-react";

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-24 md:pb-32 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">
            {/* Left Side - Avatar, Name, Position, Social */}
            <div className="flex flex-col items-center text-center shrink-0 w-full md:w-auto">
              {/* Avatar */}
              <div className="w-48 h-48 md:w-56 md:h-56 relative mb-6">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8T9v4lYI2X295ofmKaNHenOugh4gNcJrEpUaDB73v5sO0M1AhyH1-CF_Iw-J-Hh6O9yJhmm7mUEGEuPKKC9SFyZ6g_mwxtLe3pEspIZeYbo1Xyx_6iYdTJugmsdYQuHfncCoQBowRmNvKheZoWjppC6reNJoEIT1LUbV4G8WK1YJNO0EJuMcXLLGk-nxOooNFbVTrQvkqaDf33CAciMN3Bk_l114yMUVAd9wp2Gfib70A3Ko2oQN2mGRCrPSTYwYOS-DZQOCYqsTR"
                  alt="Zhanwei ZHANG"
                  className="w-full h-full object-cover rounded-full border-4 border-border/40 shadow-2xl relative z-10"
                />
              </div>

              {/* Name */}
              <h1 className="text-3xl md:text-4xl font-black tracking-tight text-foreground mb-2">
                Zhanwei ZHANG
              </h1>

              {/* Position */}
              <div className="text-sm md:text-base text-muted-foreground mb-1">
                <a
                  href="https://www.hkust-gz.edu.cn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary hover:underline transition-colors"
                >
                  HKUST(GZ)
                </a>
              </div>
              <div className="text-sm md:text-base text-muted-foreground mb-4">
                M.Phil. in{" "}
                <a
                  href="https://www.hkust-gz.edu.cn/academics/hubs-and-thrust-areas/information-hub/data-science-and-analytics/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary hover:underline transition-colors"
                >
                  DSA
                </a>
              </div>

              {/* Social Media Links */}
              <div className="flex gap-3">
                <a
                  href="https://github.com/IT-Bill"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-foreground/5 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/it-bill/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-foreground/5 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://x.com/IT_Billx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-foreground/5 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label="X (Twitter)"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="mailto:zzhang364@connect.hkust-gz.edu.cn"
                  className="p-2.5 rounded-full bg-foreground/5 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
              {/* <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                <span className="flex h-2 w-2 rounded-full mr-2 animate-pulse bg-primary"></span>
                Available for hire
              </div> */}

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
              </div>

              {/* Education */}
              <div className="mt-10 w-full">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <GraduationCap className="text-primary" size={24} />
                  Education
                </h2>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-card border border-border/60">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-foreground">
                          M.Phil. in Data Science and Analytics
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          The Hong Kong University of Science and Technology (Guangzhou)
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">
                        2025 - Present
                      </span>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border/60">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-foreground">
                          B.Eng. in Computer Science and Technology
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Southern University of Science and Technology
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">
                        2021 - 2025
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 md:px-8 bg-muted/40 border-y border-border/60">
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
                    className="w-full h-full object-cover transition-transform duration-500"
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

      {/* Tools & Languages & Frameworks */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Tools */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center md:text-left">
              Tools
            </h2>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {[
                { name: "IntelliJ IDEA", icon: "intellij/intellij-original" },
                { name: "PyCharm", icon: "pycharm/pycharm-original" },
                { name: "VSCode", icon: "vscode/vscode-original" },
                { name: "Anaconda", icon: "anaconda/anaconda-original" },
                { name: "Linux", icon: "linux/linux-original" },
                { name: "Git", icon: "git/git-original" },
                { name: "GitHub", icon: "github/github-original" },
                { name: "Premiere Pro", icon: "premierepro/premierepro-original" },
                { name: "CMake", icon: "cmake/cmake-original" },
              ].map((tool, idx) => (
                <img
                  key={idx}
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tool.icon}.svg`}
                  alt={tool.name}
                  title={tool.name}
                  className="w-10 h-10 transition-transform"
                />
              ))}
            </div>
          </div>

          {/* Languages & Frameworks */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center md:text-left">
              Languages & Frameworks
            </h2>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {[
                { name: "C", icon: "c/c-original" },
                { name: "C++", icon: "cplusplus/cplusplus-original" },
                { name: "Java", icon: "java/java-original" },
                { name: "Spring Boot", icon: "spring/spring-original" },
                { name: "Python", icon: "python/python-original" },
                { name: "MySQL", icon: "mysql/mysql-original" },
                { name: "PostgreSQL", icon: "postgresql/postgresql-original" },
                { name: "Vue", icon: "vuejs/vuejs-original" },
                { name: "React", icon: "react/react-original" },
                { name: "Next.js", icon: "nextjs/nextjs-original" },
              ].map((lang, idx) => (
                <img
                  key={idx}
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${lang.icon}.svg`}
                  alt={lang.name}
                  title={lang.name}
                  className="w-10 h-10 transition-transform"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
