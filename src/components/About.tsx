import React from 'react';
import { Brain, Code, Globe, Rocket } from 'lucide-react';

export function About() {
  const skills = [
    { icon: <Code className="w-6 h-6" />, name: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS'] },
    { icon: <Globe className="w-6 h-6" />, name: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL'] },
    { icon: <Brain className="w-6 h-6" />, name: 'Ferramentas', items: ['Git', 'Docker', 'AWS'] },
    { icon: <Rocket className="w-6 h-6" />, name: 'Soft Skills', items: ['Comunicação', 'Liderança', 'Resolução de Problemas'] },
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Sobre Mim</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Sou um desenvolvedor apaixonado por criar aplicações web escaláveis, seguras e confiáveis.
            Adoro aprender novas tecnologias e resolver problemas complexos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-purple-600 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{skill.name}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}