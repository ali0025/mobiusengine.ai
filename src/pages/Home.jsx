import React from 'react';
import Navbar from '../common/Navbar';
import { Link } from "react-router-dom";
import { ArrowUpRight,ArrowRight } from 'lucide-react';


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

      {/* Background image */}
      <img
        src={rectangle}
        alt="Background"
        className="w-full h-[649px] object-cover"
      />

      {/* Content on top of background */}
      <div className="absolute top-[200px] left-[227px] flex justify-between items-start w-[978px] h-[333px]">

        {/* Left section */}
        <div className="flex flex-col justify-between h-[270px]">
          <h1 className="text-6xl font-semibold font-sora text-white">
            Land job interviews <br />
            <span className="text-light-blue">10x</span> faster
          </h1>

          <p className="font-dmsans text-offwhite text-[15px] font-normal mt-4">
            Custom-built resumes that match your goals, keywords,<br /> and recruiter expectations.
          </p>

          {/* Normal Get Started Button */}
          <Link to="/get-started">
            {/* <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:bg-gray-100 transition">
              Get Started →
            </button> */}
              <button className="bg-whiteish text-dark-blue px-6 py-2 rounded-full flex items-center gap-2">
               

          Get Started
               
          <ArrowRight size={16} />
          </button>
          </Link>
        </div>

        {/* Right section - ebook image and download button */}
        <div className="relative">
          <img src={ebook} alt="Hiring Trends Ebook" className="w-[226px] h-[292px]" />

          {/* Small circle with blurred background */}
          <div className="absolute -bottom-0 right-0 translate-x-[27px] bg-white/30 backdrop-blur-md rounded-full w-[90px] h-[90px] flex items-center justify-center">
            <img src={smallbook} alt="Small Book" className="w-[46px] h-[46px]" />
          </div>

          {/* Arrow icon */}
          {/* <img
            src={whitearrow}
            alt="Arrow"
            className="absolute right-0 top-1/2 translate-x-[-30px] translate-y-[150px] rotate-180 w-[18.75px] h-[18.75px]"
          /> */}
          <button className="absolute p-1 right-0 top-1/2 translate-x-[-30px] translate-y-[150px] rotate-180 w-[18.75px] h-[18.75px] bg-white text-blue-800 rounded-full">
                <ArrowUpRight size={10} />
              </button>

          {/* Download text */}
          <p className="text-white text-[13px] mt-[28px] ml-[40px]">Download Free E-Book</p>
        </div>
      </div>

      {/* Other sections */}
      <HowWeWork />
      <Aboutus />
      <Testimonials />
      <WhyChooseUs />
      <PricingPlans />
      <ResumeServices />
      <Footer />
    </div>
  );
}

export default Home;


