import React from 'react';
import { Github, Instagram, Linkedin, Mail, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Portfólio
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">Início</a>
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">Sobre</a>
            <a href="#projects" className="text-gray-700 hover:text-purple-600 transition-colors">Projetos</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contato</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/FelipeSysten" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/felipesouzaalves/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/systen.dev/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="mailto:systen3@gmail.com" className="text-gray-600 hover:text-purple-600">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <button className="md:hidden">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
}