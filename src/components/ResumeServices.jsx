import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { ArrowRight } from 'lucide-react';

const ResumeServices = () => {
  const services = [
    {
      title: 'Resume Rebuild',
      price: 1000,
      description: 'Crafted for senior to VP-level professionals ready for their next big step.',
      features: [
        '3× 30-min coaching',
        'Focused on storytelling, not just formatting',
        'Analyst + full application team on Pacific hours',
        'Tailored to your target industry, company, or role',
        'Direct work with our co-founder (ex-Google, JP Morgan)',
        'Executive coaching from UC Berkeley alum with Dev 10+ yrs experience',
        'Resume Rebuild portfolio available upon request'
      ]
    },
    {
      title: 'Interview Prep',
      price: 500,
      description: 'Two sessions to sharpen your story, confidence, and clarity — fast.',
      features: [
        '2× 45–min live coaching with our co-founder',
        'Real-time, practical feedback',
        'Build clarity, empathy & executive presence',
        'For senior and leadership roles — technical & non-technical'
      ]
    }
  ];

  return (
    <section className="py-16 ">
      <div className="max-w-[969px] flex flex-col items-start justify-center mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-light-blue">Resume Building & Coaching</h2>
        <p className="text-center text-gray-600 text-sm mb-10">
          Let's talk about where you're headed — and how your resume can get you there. Schedule a call to get started.
        </p>

   
        <div className="flex mx-auto h-[619px] flex-col md:flex-row items-center  gap-[45px] mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              price={service.price}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>

       
        <div className="bg-light-blue w-[1056px] translate-x-[-60px] h-[265.5px] font-dmsans text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between ">
          <p className="uppercase text-3xl tracking-wide mb-2 md:mb-0">Still have<br/> doubts?</p>
          <div className="text-[60px] font-bold mb-2 md:mb-0">Contact us</div>
          <button className="bg-white text-blue-600 rounded-full p-3 transition-all duration-300 hover:bg-[#022183] hover:text-whiteish">
            <ArrowRight size={40}/>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResumeServices;
