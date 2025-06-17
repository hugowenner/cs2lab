import React from 'react';
import { Target, Heart, Zap, Gamepad2 } from 'lucide-react';
import { aboutSectionContent } from '../data'; // Assuming aboutSectionContent will be exported from data.js

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            {aboutSectionContent.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {aboutSectionContent.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-gray-700 to-gray-600 p-6 rounded-xl border border-orange-500/20">
              <Target className="w-8 h-8 text-orange-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-orange-400">{aboutSectionContent.mission.title}</h3>
              <p className="text-gray-300">
                {aboutSectionContent.mission.description}
              </p>
            </div>

            <div className="bg-gradient-to-r from-gray-700 to-gray-600 p-6 rounded-xl border border-orange-500/20">
              <Heart className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-red-400">{aboutSectionContent.values.title}</h3>
              <div className="grid grid-cols-2 gap-2 text-gray-300">
                {aboutSectionContent.values.items.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 p-8 rounded-xl border border-orange-500/30">
              <Gamepad2 className="w-12 h-12 text-orange-400 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-center mb-4 text-orange-400">{aboutSectionContent.philosophy.title}</h3>
              <p className="text-gray-300 text-center mb-4">
                {aboutSectionContent.philosophy.description}
              </p>
              <div className="text-center">
                <span className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {aboutSectionContent.philosophy.tag}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;