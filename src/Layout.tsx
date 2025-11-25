import type React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Menu, X, Cpu, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from "react";
import ModeToggle from "@/components/mode-toggle";

const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div>
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background-dark/80 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 text-white">
              <Cpu className="text-primary size-6" />
              <h1 className="text-xl font-bold tracking-tight">Zhanwei Zhang</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <NavLink 
                to="/" 
                className={({ isActive }) => `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-white' : 'text-gray-400'}`}
              >
                Home
              </NavLink>
              <NavLink 
                to="/projects" 
                className={({ isActive }) => `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-white' : 'text-gray-400'}`}
              >
                Projects
              </NavLink>
              <NavLink 
                to="/resume" 
                className={({ isActive }) => `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-white' : 'text-gray-400'}`}
              >
                Resume & Skills
              </NavLink>
            </nav>


            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <ModeToggle />
              <NavLink 
                to="/contact"
                className="flex items-center justify-center h-9 px-4 rounded-md bg-primary text-white text-sm font-bold hover:bg-primary-hover transition-colors"
              >
                Contact
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-400 hover:text-white"
              onClick={toggleMenu}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-background-dark px-4 py-4 space-y-4">
            <NavLink 
              to="/" 
              onClick={closeMenu}
              className={({ isActive }) => `block text-base font-medium ${isActive ? 'text-primary' : 'text-gray-300'}`}
            >
              Home
            </NavLink>
            <NavLink 
              to="/projects" 
              onClick={closeMenu}
              className={({ isActive }) => `block text-base font-medium ${isActive ? 'text-primary' : 'text-gray-300'}`}
            >
              Projects
            </NavLink>
            <NavLink 
              to="/resume" 
              onClick={closeMenu}
              className={({ isActive }) => `block text-base font-medium ${isActive ? 'text-primary' : 'text-gray-300'}`}
            >
              Resume & Skills
            </NavLink>
            <NavLink 
              to="/contact" 
              onClick={closeMenu}
              className="block text-base font-medium text-primary"
            >
              Contact Me
            </NavLink>
          </div>
        )}
      </header>

      <main>
        {/* 这里相当于 Next.js 里的 {children} */}
        <Outlet />
      </main>

      <footer className="border-t border-white/10 bg-background-dark mt-auto">
        <div className="container mx-auto px-4 md:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-white text-lg font-bold mb-1">Zhanwei Zhang</h3>
              <p className="text-gray-400 text-sm">Aspiring Software Engineer & Machine Learning Researcher</p>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all">
                <Github size={20} />
              </a>
              <a href="#" className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all">
                <Linkedin size={20} />
              </a>
              <a href="mailto:yuan.li@example.com" className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-600 text-xs">
            © {new Date().getFullYear()} Zhanwei Zhang. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
