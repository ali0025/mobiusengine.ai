import { ArrowRight, Check } from 'lucide-react';
import React from 'react';

const ServiceCard = ({ title, price, description, features }) => {
  return (
    <div className="relative border rounded-xl h-full font-dmsans text-light-blue p-6 flex flex-col items-start hover:shadow-md transition-all w-full max-w-[320px] mx-auto">
      <h3 className="text-xl font-dmsans leading-[30px] tracking-[-0.4px] font-semibold mb-3">{title}</h3>
      <p className="text-xs  mb-4">{description}</p>
      <p className="text-[42px] font-bold mb-4">${price}<span className="text-[19.5px] "> one time</span></p>
      <ul className="space-y-2 mb-6 text-sm">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 ">
             <span className="text-white bg-[#4AD257] rounded-full h-3.5 w-3.5 flex items-center justify-center">
            <Check size={15} />
          </span>
          
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className="absolute bottom-[23.8px] flex items-center gap-2 px-6 py-3 bg-[#0047FF] text-white font-semibold rounded-full hover:bg-[#0037cc] transition">
      Get Started
      <ArrowRight size={20} />
    </button>
    </div>
  );
};

export default ServiceCard;
