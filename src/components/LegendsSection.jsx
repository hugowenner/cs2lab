import React from 'react';
import { legendsContent } from '../data';
import LegendCard from './LegendCard';

const LegendsSection = () => {
  return (
    <section id="legends" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-electric-400 to-blue-electric-600 bg-clip-text text-transparent">
            {legendsContent.title}
          </h2>
          {legendsContent.subtitle && (
             <p className="text-xl text-white"> {/* ALTERADO: de text-gray-300 para text-white */}
               {legendsContent.subtitle}
             </p>
          )}
        </div>

        <div className="space-y-8">
          {legendsContent.items.map((legend, index) => (
            <LegendCard key={index} legend={legend} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegendsSection;