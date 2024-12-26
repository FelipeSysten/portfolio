import React from 'react';
import { ArrowRight, Code2, Terminal } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="pt-24 pb-12 sm:pt-32 sm:pb-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left md:max-w-2xl">
            <div className="flex justify-center md:justify-start mb-6 space-x-2">
              <Code2 className="w-8 h-8 text-purple-600" />
              <Terminal className="w-8 h-8 text-blue-500" />
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              Desenvolvedor Full-Stack
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
                Criando Experiências Digitais
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Desenvolvo aplicações bonitas e funcionais com tecnologias modernas.
              Vamos criar algo incrível juntos.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
              >
                Ver Projetos
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50 transition-colors"
              >
                Contato
              </a>
            </div>
          </div>
          
          <div className="mt-12 md:mt-0 md:ml-12">
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-purple-600">
                <img
                  src="https://ts-portfolio-chi.vercel.app/img/team.jpg"
                  alt="Felipe de Souza"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/20 to-blue-500/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}