import React from 'react';
import Navbar from '../common/Navbar';
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from 'lucide-react';

import rectangle from '../assets/images/Rectangle.png';
import ebook from '../assets/images/hiring-ebook.png';
import smallbook from '../assets/components/smallboook.png';

import HowWeWork from '../components/HowWeWork';
import Aboutus from '../components/Aboutus';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';
import PricingPlans from '../components/PricingPlans';
import ResumeServices from '../components/ResumeServices';
import Footer from '../common/Footer';

function Home() {
  return (
    <div className="relative w-full">
      <Navbar />
      <img src={rectangle} alt="Background" className="w-full h-[500px] md:h-[649px] object-cover" />

      <div className="absolute top-[120px] md:top-[200px] left-5 md:left-[227px] flex flex-col md:flex-wrap justify-between items-start w-[90%] md:w-[978px] md:mx-auto  mx-auto h-auto md:h-[333px]">
        <div className="flex flex-col justify-between h-auto md:h-[270px] space-y-4">
          <h1 className="text-4xl md:text-6xl font-semibold font-sora text-white leading-tight">
            Land job interviews <br />
            <span className="text-light-blue">10x</span> faster
          </h1>

          <p className="font-dmsans text-offwhite text-sm md:text-[15px] font-normal">
            Custom-built resumes that match your goals, keywords,<br className="hidden md:block" /> and recruiter expectations.
          </p>

          <Link to="/get-started">
  <button className="bg-whiteish text-dark-blue  px-6 py-2 rounded-full flex items-center gap-2 w-fit transition-all duration-300 hover:bg-[#022183] hover:text-whiteish">
    Get Started
    <ArrowRight size={16} />
  </button>
</Link>

        </div>

        <div className="relative mt-10 md:mt-0">
          <img src={ebook} alt="Hiring Trends Ebook" className="w-[180px] md:w-[226px] h-[240px] md:h-[292px]" />
          <div className="absolute -bottom-0 right-0 translate-x-[27px] backdrop-blur-xs bg-[#D9D9D94D] border border-white rounded-full w-[70px] md:w-[90px] h-[70px] md:h-[90px] flex items-center justify-center">
            <img src={smallbook} alt="Small Book" className="w-[36px] md:w-[46px] h-[36px] md:h-[46px]" />
          </div>
          <button className="absolute p-1 right-0 top-1/2 translate-x-[-30px] translate-y-[100px] md:translate-y-[150px] rotate-180 w-[18px] h-[18px] bg-white text-blue-800 rounded-full transition-all duration-300 hover:bg-[#022183] hover:text-whiteish">
            <ArrowUpRight size={10} />
          </button>
          <p className="text-white text-xs md:text-[13px] mt-5 ml-10">Download Free E-Book</p>
        </div>
      </div>

      <HowWeWork />
      <Aboutus />
      <Testimonials />
      <WhyChooseUs />
      <PricingPlans />
      <div className="border border-[#BCBCBC] flex m-auto w-[90%] md:w-[969px] my-10"></div>
      <ResumeServices />
      <Footer />
    </div>
  );
}

export default Home;
