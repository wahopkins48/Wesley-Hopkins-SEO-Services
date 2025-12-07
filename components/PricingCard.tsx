import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { PricingTier } from '../types';
import Hexagon from './Hexagon';

interface PricingCardProps {
  tier: PricingTier;
}

const PricingCard: React.FC<PricingCardProps> = ({ tier }) => {
  // Color mappings
  const colorMap = {
    zinc: {
      hex: 'text-zinc-600',
      bg: 'bg-zinc-600',
      button: 'bg-zinc-700 hover:bg-zinc-800',
      border: 'border-zinc-200',
      highlight: 'text-zinc-700',
    },
    cyan: {
      hex: 'text-cyan-600',
      bg: 'bg-cyan-600',
      button: 'bg-cyan-600 hover:bg-cyan-700',
      border: 'border-cyan-200',
      highlight: 'text-cyan-700',
    },
    orange: {
      hex: 'text-orange-500',
      bg: 'bg-orange-500',
      button: 'bg-orange-600 hover:bg-orange-700',
      border: 'border-orange-200',
      highlight: 'text-orange-600',
    },
  };

  const colors = colorMap[tier.color];

  return (
    <div className={`relative flex flex-col pt-12 bg-white rounded-3xl shadow-xl transition-transform duration-300 hover:-translate-y-2 border ${colors.border} h-full`}>
      
      {/* Floating Hexagon Price Tag */}
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-20">
        <Hexagon colorClass={colors.hex} price={tier.price} />
        {/* Shadow blur for depth */}
        <div className={`absolute top-4 left-2 right-2 h-16 blur-xl opacity-30 ${colors.bg} -z-10`}></div>
      </div>

      <div className="px-8 pb-8 flex-grow flex flex-col">
        {/* Header */}
        <div className="text-center mt-6 mb-6">
          <h4 className="text-sm font-bold tracking-widest text-zinc-400 uppercase mb-1">
            {tier.subtitle}
          </h4>
          <h3 className={`text-2xl font-bold uppercase tracking-wider ${colors.highlight}`}>
            {tier.name}
          </h3>
          <p className="text-zinc-500 text-sm mt-3 h-10 leading-snug flex items-center justify-center">
            {tier.description}
          </p>
        </div>

        {/* Divider */}
        <div className="w-16 h-1 mx-auto rounded-full bg-zinc-100 mb-6"></div>

        {/* Features List */}
        <ul className="space-y-4 mb-8 text-sm text-zinc-600 flex-grow">
          {tier.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className={`mt-0.5 min-w-[16px] ${colors.highlight}`}>
                <CheckCircle2 size={16} strokeWidth={3} />
              </div>
              <div>
                <span className={feature.text.startsWith('Everything') ? 'font-semibold text-zinc-800' : ''}>
                  {feature.text}
                </span>
                {feature.subfeatures && (
                  <ul className="mt-2 space-y-1 ml-1 border-l-2 border-zinc-100 pl-3">
                    {feature.subfeatures.map((sub, idx) => (
                      <li key={idx} className="text-xs text-zinc-500 flex items-center gap-2">
                        <span className={`w-1 h-1 rounded-full ${colors.bg}`}></span>
                        {sub}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>

        {/* Focus Area */}
        <div className="bg-zinc-50 rounded-xl p-4 mb-6 border border-zinc-100">
            <span className="text-xs font-bold text-zinc-400 uppercase block mb-1">Key Focus</span>
            <p className={`text-sm font-medium ${colors.highlight} leading-tight`}>
                {tier.focus}
            </p>
        </div>

        {/* Action Button */}
        <div className="mt-auto">
          <button
            className={`w-full py-4 rounded-xl text-white font-bold tracking-wider shadow-lg transition-all active:scale-95 ${colors.button}`}
          >
            SELECT PLAN
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;