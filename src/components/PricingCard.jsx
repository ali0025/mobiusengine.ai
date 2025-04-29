import React from 'react';
import { ArrowRight, Check, } from 'lucide-react';

const PricingCard = ({ title, price,subheading, features, popular }) => {
  return (
    <div className="border rounded-2xl pl-[29.25px] pr-[39.75px]   text-light-blue h-[511px] w-[298px] flex flex-col items-start  shadow-md hover:shadow-lg transition-all relative">
      {popular && (
        <div className="absolute top-[22.5px] right-2 bg-[#EBF1FF] text-light-blue border border-light-blue text-xs px-2 py-1 rounded-full">
          Popular
        </div>
      )}
      <h3 className="text-2xl font-semibold mb-4 mt-[22.5px]">{title}</h3>
      <p className="text-[42px] font-dmsans font-bold mb-[30.75px]">${price}<span className="text-[19.5px] font-normal">/week</span></p>
      <div className='border w-[246px] border-[#BCBCBC] mb-[21.75px]'></div>
      <ul className="space-y-3 tracking-tight  font-dmsans font-medium leading-1.5  mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex  space-x-2 text-[13.5px] font-meduim leading-[1.04] ">
            {subheading&&index==0 ? <><span className="text-white font-extrabold rounded-full h-3.5 w-3.5 flex items-center justify-center">
            
          </span>
          <span className='font-semibold'>{feature}</span></> : (
        <>
          <span className="text-white bg-[#4AD257] rounded-full h-3.5 w-3.5 flex items-center justify-center">
            <Check size={10} />
          </span>
          <span>{feature}</span>
        </>
      )}
            
          </li>
        ))}
      </ul>
      <button className="flex absolute bottom-[22.5px] items-center gap-2 px-6 py-3 bg-[#0047FF] text-white font-semibold rounded-full hover:bg-[#0037cc] transition">
      Get Started
      <ArrowRight size={20} />
    </button>
    </div>
  );
};

export default PricingCard;
