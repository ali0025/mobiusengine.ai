import React from "react";
import rec2 from "../assets/images/Rectangle2.png";

import ashwin from "../assets/images/ashwin.png";
import nicloe from "../assets/images/nicolle.png";
import { ArrowUpRight } from "lucide-react";

export default function Aboutus() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden text-white py-24 px-6 md:px-20">
      {/* Background Image */}
      <img
        src={rec2}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Content on top */}
      <div className="relative max-w-6xl mx-auto z-10 text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-16">About Us</h2>

        <div className="flex flex-col gap-24 items-center">
          {/* Profile 1 */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="relative flex justify-center items-center">
              <div className="w-40 h-40 md:w-48 md:h-48 bg-white rounded-full flex justify-center items-center overflow-hidden">
                <img
                  src={ashwin}
                  alt="Ashwin"
                  className="w-[150px] h-[190px] translate-x-1 translate-y-4"
                />
              </div>
              <a
                href="https://linkedin.com/in/ashwin"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute flex justify-center items-center backdrop-blur-xs bg-[#D9D9D94D] w-[60px] h-[60px] text-[#DADADA] bottom-0 right-0  text-[30px] rounded-full p-2 border border-white"
              >
                in
              </a>
            </div>
            <div className="max-w-2xl text-center md:text-left">
              <p className="mb-4">
                <span className="font-semibold">Ashwin</span> is the founder of
                mobiusengine.ai. He is an accomplished senior executive with
                over 20 years of experience in cloud infrastructure and
                financial services. With over 2 decades of experience at Google
                and JP Morgan, Ashwin held various product and GTM roles. Ashwin
                is an MBA holder from Yale University.
              </p>
              <p>
                Ashwin’s vision with Mobius is to give job seekers a significant
                advantage in securing the roles of their dreams.
              </p>
            </div>
          </div>

          {/* Profile 2 */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="relative flex justify-center items-center">
              <div className="w-40 h-40 md:w-48 md:h-48 bg-white rounded-full flex justify-center items-center overflow-hidden">
                <img
                  src={nicloe}
                  alt="Nicole"
                  className="w-full h-full object-cover"
                />
              </div>
              <a
                href="https://linkedin.com/in/decole"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute flex justify-center items-center backdrop-blur-xs bg-[#D9D9D94D] w-[60px] h-[60px] text-[#DADADA] bottom-0 right-0  text-[30px] rounded-full p-2 border border-white"
              >
                in
              </a>
            </div>
            <div className="max-w-2xl text-center md:text-left">
              <p className="mb-4">
                <span className="font-semibold">Nicole</span> is an Executive
                coach at Mobius specializing in resume builds and career
                advisory.
              </p>
              <p>
                With a B.S. in Business Administration from UC Berkeley and 7+
                years of experience in AI-driven product strategy, she has seen
                firsthand how the proper positioning opens doors. She takes a
                targeted, results-driven approach to help clients confidently
                stand out and land roles that truly match their skills and
                potential.
              </p>
            </div>
          </div>

          {/* Footer links */}
          <div className="mt-20 text-sm text-white space-y-4 text-center md:text-left">
            <a
              href="/board-of-advisors"
              className=" hover:underline flex"
            >
              Learn more about our Board of Advisors <ArrowUpRight size={20}/>
            </a>
            <br />
            <a
              href="https://linkedin.com/company/mobius"
              className="flex hover:underline"
            >
              Follow us on our LinkedIn page <ArrowUpRight size={20}/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
