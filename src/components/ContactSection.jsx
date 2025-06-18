import React from 'react';
import { MessageCircle } from 'lucide-react'; // Removido 'Users'
import { contactContent } from '../data';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-electric-400 to-blue-electric-600 bg-clip-text text-transparent">
            {contactContent.title}
          </h2>
          {/* Subtítulo: de text-gray-300 para text-white */}
          <p className="text-xl text-white mb-8">
            {contactContent.subtitle}
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-xl border border-blue-electric-500/20 mb-8">
          <div className="grid md:grid-cols-1 gap-8"> {/* Alterado para 1 coluna */}
            <div className="text-center">
              <MessageCircle className="w-12 h-12 text-blue-electric-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-blue-electric-400">{contactContent.discord.title}</h3>
              {/* Descrição Discord: de text-gray-300 para text-white */}
              <p className="text-white mb-4">
                {contactContent.discord.description}
              </p>
              <a
                href="https://discord.gg/HGWT47n5ww"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-electric-500 to-blue-electric-700 hover:from-blue-electric-600 hover:to-blue-electric-800 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                {contactContent.discord.buttonText}
              </a>
            </div>
            {/* Removido o bloco do Steam */}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-electric-500/10 to-blue-electric-500/10 p-6 rounded-xl border border-blue-electric-500/30">
          {/* Citação: de text-gray-300 para text-white */}
          <p className="text-lg text-white mb-4">
            <strong className="text-blue-electric-400">{contactContent.quote.text}</strong>
          </p>
          <p className="text-blue-electric-400 font-semibold">
            {contactContent.quote.tagline}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;