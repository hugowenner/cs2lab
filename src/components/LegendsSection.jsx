import React from 'react';
import { legendsContent } from '../data'; // Assuming legendsContent will be exported from data.js

const LegendsSection = () => {
  return (
    <section id="legends" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            {legendsContent.title}
          </h2>
          <p className="text-xl text-gray-300">
            {legendsContent.subtitle}
          </p>
        </div>

        <div className="space-y-8">
          {legendsContent.items.map((legend, index) => (
            <div key={index} className="bg-gradient-to-r from-gray-700 to-gray-600 p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 bg-gradient-to-r ${legend.color} rounded-full flex items-center justify-center`}>
                    <legend.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-orange-400">{legend.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{legend.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegendsSection;