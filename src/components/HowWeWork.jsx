import React from 'react';

const HowWeWork = () => {
  const steps = [
    {
      number: "1",
      title: "Submit Intake Form",
    },
    {
      number: "2",
      title: "We do the search and curation for list of jobs",
    },
    {
      number: "3",
      title: "You approve, we do the tedious part (applying)",
    },
    {
      number: "4",
      title: "You get the interviews",
    },
  ];

  return (
    <section className="flex flex-col items-start px-[232px] pt-[54px] pb-[98.25px] bg-white">
      <h2 className="text-2xl font-semibold text-light-blue mb-10">How we work?</h2>
      <div className="flex flex-wrap justify-start gap-12 max-w-6xl">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col ">
            <div className="w-12 h-12 border text-black border-dark-blue rounded-full flex items-center justify-center text-lg font-bold mb-4">
              {step.number}
            </div>
            <div className="w-[159.75px] h-0.5 bg-light-blue mb-4"></div>
            <p className="text-light-blue max-w-[210px] ">{step.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
