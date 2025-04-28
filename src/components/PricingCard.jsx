import React from 'react';
import { ArrowRight } from 'lucide-react';

const PricingCard = ({ title, price, features, popular }) => {
  return (
    <div className="border rounded-2xl p-6 flex flex-col items-center shadow-md hover:shadow-lg transition-all relative">
      {popular && (
        <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
          Popular
        </div>
      )}
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-3xl font-bold mb-6">${price}<span className="text-base font-normal">/week</span></p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-2 text-gray-700">
            <span className="text-green-500">✔️</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className="flex items-center gap-2 px-6 py-3 bg-[#0047FF] text-white font-semibold rounded-full hover:bg-[#0037cc] transition">
      Get Started
      <ArrowRight size={20} />
    </button>
    </div>
  );
};

export default PricingCard;
