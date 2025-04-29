import React from "react";
import asset31 from '../assets/components/Asset31.svg'
import profile from '../assets/components/profile1.svg'
import star from '../assets/components/Star1.svg'

const WhyChooseUs = () => {
  const features = [
    {
      icon: asset31,
      title: "Tried, Tested, Trusted",
      description:
        "Built by folks with 40+ years in tech and hiring — we know the game, and we've got your back.",
    },
    {
      icon: profile,
      title: "Real People, Real Help",
      description:
        "A hands-on team that actually cares — guiding you through every twist in your career path.",
    },
    {
      icon: star,
      title: "Beat the Line",
      description:
        "We search, shortlist, and apply for you, so your name shows up first — every single day.",
    },
  ];

  return (
    <div className="bg-[#F8FAFF] pt-[43.5px] text-dark-blue pb-[73px] mb-[82.5px] mt-[112px] pl-[45px] pr-[41.25px] rounded-2xl max-w-[1059px] mx-auto">
      <h2 className="text-3xl font-semibold  mb-[36.75px]">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[82.5px]">
        {features.map((feature, index) => (
          <div
            key={index}
            className="border-2 border-dark-blue rounded-2xl p-6 h-[237px] flex flex-col items-start hover:shadow-lg transition duration-300"
          >
            <img className="text-[37.5px] mb-[39.75px]" src={feature.icon}></img>
            <h3 className="text-xl font-semibold  mb-4">{feature.title}</h3>
            <p className="text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
