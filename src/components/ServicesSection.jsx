import React from 'react';
import { servicesContent } from '../data'; // Assuming servicesContent will be exported from data.js

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            {servicesContent.title}
          </h2>
          <p className="text-xl text-gray-300">
            {servicesContent.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesContent.items.map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <div className={`w-12 h-12 bg-gradient-to-r ${
                service.color === 'orange' ? 'from-orange-500 to-red-500' :
                service.color === 'red' ? 'from-red-500 to-pink-500' :
                'from-yellow-500 to-orange-500'
              } rounded-lg flex items-center justify-center mb-4`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-orange-400">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;