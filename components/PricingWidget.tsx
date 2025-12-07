import React from 'react';
import { PRICING_TIERS, FOOTER_NOTE } from '../constants';
import PricingCard from './PricingCard';

const PricingWidget: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      {/* Header Section */}
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight mb-4">
          Optimized for <span className="text-zinc-900 underline decoration-orange-500 decoration-4 underline-offset-4">Discovery</span>
        </h2>
        <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
          Choose a plan tailored to your market competition. From foundational SEO to aggressive Generative Engine Optimization dominance.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-20 gap-x-8 items-stretch mb-16">
        {PRICING_TIERS.map((tier) => (
          <PricingCard key={tier.id} tier={tier} />
        ))}
      </div>

      {/* Footer Disclaimer */}
      <div className="mt-12 border-t border-zinc-200 pt-8 text-center">
        <p className="text-xs text-zinc-400 max-w-4xl mx-auto leading-relaxed">
          {FOOTER_NOTE}
        </p>
      </div>
    </section>
  );
};

export default PricingWidget;