import React from 'react';
import PricingCard from '../components/PricingCard';
import { ArrowRight, Check } from 'lucide-react';

const PricingPlans = () => {
  const plans = [
    {
      title: 'April Promo',
      price: 35,
      subheading:false,
      features: [
        'Curated jobs from 1M+ listings, refreshed every 48 hours',
        'Up to 20 human-applied roles per week (no bots, no fluff — just real company sites)',
        'Need more? Add extra apps for just $1.5 each',
        'Your own dedicated application analyst',
        'Personalized with up to 10 filters & 5 job titles'
      ]
    },
    {
      title: 'Starter',
      price: 50,
      popular: true,
      subheading:true,
      features: [
        'All the perks of the Promo Plan, plus:',
        'Resume review & story-focused feedback',
        'Dedicated search specialist',
        'Up to 50 job apps/week',
        'Extra apps at $1.5 each',
        'Analyst support within 6 hours (SLA/PST hours)'
      ]
    },
    {
      title: 'Plus',
      price: 100,
      subheading:true,
      features: [
        'Everything in Starter, with more muscle:',
        'Up to 75 apps/week',
        'Apply to 15 job titles',
        'Analyst + full application team on Pacific hours'
      ]
    }
  ];

  return (
    <section className="py-12 text-light-blue font-dmsans ">
      <div className="max-w-[972px] mx-auto px-4">
        <h2 className="text-3xl font-bold font-dmsans mb-[85.5px]">Job Application Service Plans</h2>
        <div className=" flex justify-between   ">
          {plans.map((plan, index) => (
            <PricingCard 
              key={index}
              title={plan.title}
              price={plan.price}
              subheading={plan.subheading}
              features={plan.features}
              popular={plan.popular}
            />
          ))}
        </div>

        
    
<div className="relative mt-10  bg-[#0047FF] text-white rounded-3xl p-8 flex flex-col  ">
  
  <div className="flex justify-between items-center">
    <h3 className="text-2xl font-bold">Advance</h3>
    <p className="text-4xl font-bold">
      $150<span className="text-base font-normal">/week</span>
    </p>
  </div>

  
  <p className="text-sm pb-[33px]">Top-tier support for serious job hunters:</p>

  
  <div className="w-[293px] mb-[27.75px] border bg-[#BCBCBC] "></div>

  
  <ul className="flex flex-wrap gap-[15px] w-[584px]">
    <li className="flex items-center gap-2">
    <span className="text-white bg-[#4AD257] rounded-full h-3.5 w-3.5 flex items-center justify-center">
            <Check size={10} />
          </span>
          
       Everything in Plus
    </li>
    <li className="flex items-center gap-2">
      <span className="text-white bg-[#4AD257] rounded-full h-3.5 w-3.5 flex items-center justify-center">
            <Check size={10} />
          </span> Custom Resumes & Cover Letters
    </li>
    <li className="flex items-center gap-2">
      <span className="text-white bg-[#4AD257] rounded-full h-3.5 w-3.5 flex items-center justify-center">
            <Check size={10} />
          </span> 20 fully customized applications/week
    </li>
    <li className="flex items-center gap-2">
      <span className="text-white bg-[#4AD257] rounded-full h-3.5 w-3.5 flex items-center justify-center">
            <Check size={10} />
          </span> Help with complex job searches
    </li>
    <li className="flex items-center gap-2">
      <span className="text-white bg-[#4AD257] rounded-full h-3.5 w-3.5 flex items-center justify-center">
            <Check size={10} />
          </span> Access to senior resume experts, Founder & Exec Coaches
    </li>
  </ul>

  
  <div>
    <button className="flex absolute right-[23.2px] bottom-[24.75px] items-center justify-center gap-2 px-6 py-3 bg-whiteish text-light-blue font-semibold rounded-full transition-all duration-300 hover:bg-[#022183] hover:text-whiteish">
      Get Started
      <ArrowRight size={20} />
    </button>
    
  

  </div>
</div>

      </div>
    </section>
  );
};

export default PricingPlans;
