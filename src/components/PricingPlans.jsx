import React from 'react';
import PricingCard from '../components/PricingCard';
import { ArrowRight } from 'lucide-react';

const PricingPlans = () => {
  const plans = [
    {
      title: 'April Promo',
      price: 35,
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
      features: [
        'Everything in Starter, with more muscle:',
        'Up to 75 apps/week',
        'Apply to 15 job titles',
        'Analyst + full application team on Pacific hours'
      ]
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Job Application Service Plans</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {plans.map((plan, index) => (
            <PricingCard 
              key={index}
              title={plan.title}
              price={plan.price}
              features={plan.features}
              popular={plan.popular}
            />
          ))}
        </div>

        {/* Advance Plan */}
        <div className="mt-16 p-8 bg-blue-600 text-white rounded-2xl flex flex-col items-center text-center">
          <h3 className="text-2xl font-semibold mb-4">Advance</h3>
          <p className="mb-8">Top-tier support for serious job hunters:</p>
          <ul className="space-y-3 mb-8">
            <li>✔️ Everything in Plus</li>
            <li>✔️ Custom Resumes & Cover Letters</li>
            <li>✔️ 20 fully customized applications/week</li>
            <li>✔️ Help with complex job searches</li>
            <li>✔️ Access to senior resume experts, Founder & Exec Coaches</li>
          </ul>
          <p className="text-3xl font-bold mb-6">$150<span className="text-base font-normal">/week</span></p>
          <button className="flex items-center gap-2 px-6 py-3 bg-[#0047FF] text-white font-semibold rounded-full hover:bg-[#0037cc] transition">
      Get Started
      <ArrowRight size={20} />
    </button>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
