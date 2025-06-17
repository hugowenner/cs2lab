import React from 'react';
import { MessageCircle, Users } from 'lucide-react';
import { contactContent } from '../data'; // Assuming contactContent will be exported from data.js

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            {contactContent.title}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {contactContent.subtitle}
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-xl border border-orange-500/20 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <MessageCircle className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-orange-400">{contactContent.discord.title}</h3>
              <p className="text-gray-300 mb-4">
                {contactContent.discord.description}
              </p>
              <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                {contactContent.discord.buttonText}
              </button>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-red-400">{contactContent.steam.title}</h3>
              <p className="text-gray-300 mb-4">
                {contactContent.steam.description}
              </p>
              <button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                {contactContent.steam.buttonText}
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-6 rounded-xl border border-orange-500/30">
          <p className="text-lg text-gray-300 mb-4">
            <strong className="text-orange-400">{contactContent.quote.text}</strong>
          </p>
          <p className="text-orange-400 font-semibold">
            {contactContent.quote.tagline}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;