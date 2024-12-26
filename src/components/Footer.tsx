import React from 'react';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Portfólio
            </span>
            <p className="mt-2 text-gray-400">Construindo o futuro, uma linha de código por vez.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/FelipeSysten" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/felipesouzaalves/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/systen.dev/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="mailto:systen3@gmail.com" className="text-gray-400 hover:text-white">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Felipe de Souza. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}