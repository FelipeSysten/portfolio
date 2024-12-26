import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Entre em Contato</h2>
          <p className="mt-4 text-xl text-gray-600">
            Tem um projeto em mente? Vamos trabalhar juntos para transformar suas ideias em realidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-md hover:bg-purple-700 transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-purple-600 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900">Localização</h3>
                <p className="text-gray-600">Itabuna, Brasil</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-purple-600 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900">E-mail</h3>
                <a href="mailto:seu.email@exemplo.com" className="text-gray-600 hover:text-purple-600">
                  systen3@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-purple-600 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900">Telefone</h3>
                <a href="tel:+5511999999999" className="text-gray-600 hover:text-purple-600">
                  +55 (73) 9884335-3532
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}