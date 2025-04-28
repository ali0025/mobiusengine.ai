import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: "🤝",
      title: "Tried, Tested, Trusted",
      description:
        "Built by folks with 40+ years in tech and hiring — we know the game, and we've got your back.",
    },
    {
      icon: "👤",
      title: "Real People, Real Help",
      description:
        "A hands-on team that actually cares — guiding you through every twist in your career path.",
    },
    {
      icon: "⭐",
      title: "Beat the Line",
      description:
        "We search, shortlist, and apply for you, so your name shows up first — every single day.",
    },
  ];

  return (
    <div className="bg-blue-50 p-8 rounded-2xl max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold text-blue-900 mb-8">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="border-2 border-blue-200 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition duration-300"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">{feature.title}</h3>
            <p className="text-sm text-blue-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
