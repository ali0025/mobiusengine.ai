import { ArrowRight } from 'lucide-react';
import React from 'react';

const ServiceCard = ({ title, price, description, features }) => {
  return (
    <div className="border rounded-xl p-6 flex flex-col items-start hover:shadow-md transition-all w-full max-w-[320px] mx-auto">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <p className="text-xs text-gray-500 mb-4">{description}</p>
      <p className="text-2xl font-bold mb-4">${price}<span className="text-sm font-normal"> one time</span></p>
      <ul className="space-y-2 mb-6 text-sm">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-gray-700">
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

export default ServiceCard;
