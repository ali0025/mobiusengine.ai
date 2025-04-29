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
    <section className="pt-[67.5px] mx-auto w-[971.3625px] px-4 flex flex-col items-center">
      <h2 className="text-2xl pb-[85px]  self-start text-[30px]  font-semibold text-light-blue">What our clients have to say</h2>
      <div className="flex  gap-[39px] justify-center  ">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-72 h-[337.5px]  overflow-hidden flex flex-col border rounded-[26.25px] bg-light-blue"
          >
            <div className="h-48 flex items-center bg-white border border-light-blue rounded-[26.25px] justify-center">
              <button className="bg-light-blue p-3 rounded-full">
                <Play className="text-whiteish" size={24} />
              </button>
            </div>
            <div className="bg-light-blue p-4 text-whiteish relative pb-[56px]">
              <p className=''>
                {testimonial.name} <span className="font-bold ">{testimonial.description.split(' ')[0]} {testimonial.description.split(' ')[1]}</span> {testimonial.description.split(' ').slice(2).join(' ')}
              </p>
              <button className="absolute bottom-4 right-4 bg-whiteish transition-all duration-300 hover:bg-[#022183] hover:text-whiteish text-light-blue p-2 mt-[17px] rounded-full">
                <ArrowUpRight size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4 mt-8">
        <button className="border border-light-blue text-light-blue px-6 py-2 rounded-full flex items-center gap-2 transition-all duration-300 hover:bg-[#022183] hover:text-whiteish">
          More customer testimonials
          <ArrowUpRight size={16} />
        </button>
        <button className="bg-light-blue text-white px-6 py-2 rounded-full flex items-center gap-2 transition-all duration-300 hover:bg-[#022183] hover:text-whiteish">
          Get Started
          <ArrowUpRight size={16} />
        </button>
      </div>
    </section>
  );
}
