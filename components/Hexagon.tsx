import React from 'react';

interface HexagonProps {
  colorClass: string;
  price: string;
  className?: string;
}

const Hexagon: React.FC<HexagonProps> = ({ colorClass, price, className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center w-24 h-24 ${className}`}>
      {/* Hexagon Shape */}
      <svg
        viewBox="0 0 100 100"
        className={`absolute inset-0 w-full h-full drop-shadow-lg ${colorClass}`}
        fill="currentColor"
      >
        <path d="M50 0 L95 25 L95 75 L50 100 L5 75 L5 25 Z" />
      </svg>
      
      {/* Price Text */}
      <div className="relative z-10 text-white font-bold text-xl tracking-tight">
        {price}
        <span className="block text-[10px] font-normal text-center opacity-90">/mo</span>
      </div>
    </div>
  );
};

export default Hexagon;