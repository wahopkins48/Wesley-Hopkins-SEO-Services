import React from 'react';
import PricingWidget from './components/PricingWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-50 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="w-full">
        <PricingWidget />
      </div>
    </div>
  );
};

export default App;