import React from 'react';
import { Target } from 'lucide-react';
import { footerContent } from '../data';

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t border-blue-electric-500/20 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-electric-500 to-blue-electric-700 rounded-lg flex items-center justify-center">
            <Target className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-electric-400 to-blue-electric-600 bg-clip-text text-transparent">
            {footerContent.title}
          </span>
        </div>
        <p className="text-gray-400 mb-2">
          {footerContent.subtitle}
        </p>
        <p className="text-sm text-gray-500">
          {footerContent.description}
        </p>
      </div>
    </footer>
  );
};

export default Footer;