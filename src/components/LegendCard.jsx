import React, { useState } from 'react';

const LegendCard = ({ legend }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 350;

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const needsTruncation = legend.description.length > maxLength;

  const displayedDescription = needsTruncation && !isExpanded
    ? legend.description.substring(0, maxLength) + '...'
    : legend.description;

  return (
    <div className="bg-gradient-to-r from-gray-700 to-gray-600 p-8 rounded-xl border border-blue-electric-500/20 hover:border-blue-electric-500/40 transition-all duration-300">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          {/* O gradiente da cor do ícone agora usará blue-electric por padrão, ou você pode definir cores específicas no seu 'data.js' para 'legend.color' que correspondam a gradientes definidos no tailwind.config.js */}
          <div className={`w-16 h-16 bg-gradient-to-r from-blue-electric-500 to-blue-electric-700 rounded-full flex items-center justify-center`}>
            <legend.icon className="w-8 h-8 text-white" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-4 text-blue-electric-400">{legend.title}</h3>
          <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
            {displayedDescription}
          </p>
          {needsTruncation && (
            <button
              onClick={toggleExpanded}
              className="mt-4 text-blue-electric-400 hover:text-blue-electric-500 font-semibold"
            >
              {isExpanded ? 'Ler Menos' : 'Ler Mais'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LegendCard;