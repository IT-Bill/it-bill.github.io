import React, { useState } from 'react';
import { Mail, Linkedin, Github, ArrowUpRight, Send, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 构建 mailto 链接
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:zzhang364@connect.hkust-gz.edu.cn?subject=${subject}&body=${body}`;
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="w-full">
      <section className="px-4 md:px-8 py-12 md:py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Contact Information */}
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6 tracking-tight">
                  Get in Touch
                </h1>
                <p className="text-muted-foreground text-lg mb-12 max-w-md leading-relaxed">
                  I'm open to discussing technology, project collaborations, or any potential opportunities. I look forward to hearing from you.
                </p>

                <div className="space-y-4">
                  {/* Email */}
                  <a 
                    href="mailto:zzhang364@connect.hkust-gz.edu.cn" 
                    className="group flex items-center p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                  >
                    <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                      <Mail size={24} />
                    </div>
                    <div className="ml-4 flex-1">
                      <p className="text-sm text-muted-foreground font-medium">Email Me</p>
                      <p className="text-foreground font-medium">zzhang364@connect.hkust-gz.edu.cn</p>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a 
                    href="https://www.linkedin.com/in/it-bill/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                  >
                    <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                      <Linkedin size={24} />
                    </div>
                    <div className="ml-4 flex-1">
                      <p className="text-sm text-muted-foreground font-medium">LinkedIn</p>
                      <p className="text-foreground font-medium">linkedin.com/in/it-bill</p>
                    </div>
                    <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>

                  {/* GitHub */}
                  <a 
                    href="https://github.com/IT-Bill" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                  >
                    <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                      <Github size={24} />
                    </div>
                    <div className="ml-4 flex-1">
                      <p className="text-sm text-muted-foreground font-medium">GitHub</p>
                      <p className="text-foreground font-medium">github.com/IT-Bill</p>
                    </div>
                    <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>

                  {/* Twitter/X */}
                  <a 
                    href="https://x.com/IT_Billx" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                  >
                    <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                      <Twitter size={24} />
                    </div>
                    <div className="ml-4 flex-1">
                      <p className="text-sm text-muted-foreground font-medium">X (Twitter)</p>
                      <p className="text-foreground font-medium">@IT_Billx</p>
                    </div>
                    <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-xl shadow-primary/5">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="How can I help you?"
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
