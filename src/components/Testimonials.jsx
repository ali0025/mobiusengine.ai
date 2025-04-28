import { Play, ArrowUpRight } from 'lucide-react';

const testimonials = [
  {
    name: "Holly",
    description: "is a senior executive who got over 10 job interviews and an offer she accepted",
  },
  {
    name: "Holly",
    description: "is a senior executive who got over 10 job interviews and an offer she accepted",
  },
  {
    name: "Holly",
    description: "is a senior executive who got over 10 job interviews and an offer she accepted",
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 px-4 flex flex-col items-center">
      <h2 className="text-2xl font-semibold text-blue-600 mb-8">What our clients have to say</h2>
      <div className="flex flex-wrap gap-6 justify-center  ">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-72 bg-white border border-blue-500 rounded-2xl overflow-hidden flex flex-col justify-between"
          >
            <div className="h-48 flex items-center justify-center">
              <button className="bg-blue-600 p-3 rounded-full">
                <Play className="text-white" size={24} />
              </button>
            </div>
            <div className="bg-blue-600 p-4 text-white relative ">
              <p className=''>
                {testimonial.name} <span className="font-bold ">{testimonial.description.split(' ')[0]} {testimonial.description.split(' ')[1]}</span> {testimonial.description.split(' ').slice(2).join(' ')}
              </p>
              <button className="absolute bottom-4 right-4 bg-white text-blue-600 p-2 mt-[17px] rounded-full">
                <ArrowUpRight size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4 mt-8">
        <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full flex items-center gap-2">
          More customer testimonials
          <ArrowUpRight size={16} />
        </button>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full flex items-center gap-2">
          Get Started
          <ArrowUpRight size={16} />
        </button>
      </div>
    </section>
  );
}
