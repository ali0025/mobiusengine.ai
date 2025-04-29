import React from "react";
import blue from '../assets/logos/blue_full_logo_26.svg'

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-16 font-dmsans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start gap-10">

        
        <div className="flex flex-col gap-6">
       
          <img
            src={blue}
            alt="MobiusEngine Logo"
            className="h-10"
          />

       
          <div className="text-sm text-gray-700">
            <p className="font-semibold text-blue-600 mb-1">Address</p>
            <p>1675 Mission St Ste 103 #450<br />San Francisco, CA 94103</p>
          </div>
        </div>

       
        <div className="flex flex-col gap-6">
      
          <div className="text-sm text-gray-700">
            <p className="font-semibold text-blue-600 mb-1">Email</p>
            <a href="mailto:finance@mobiusengine.ai" className="hover:underline">
              finance@mobiusengine.ai
            </a>
          </div>

        
          <div className="text-sm text-gray-700">
            <p className="font-semibold text-blue-600 mb-1">Telephone</p>
            <a href="tel:6608886026" className="hover:underline">
              660–888–6026
            </a>
          </div>
        </div>

      
        <div className="flex flex-col gap-6">
          <p className="font-semibold text-light-blue text-sm">Socials</p>
          <div className="flex gap-4 text-light-blue font-dmsans">
         
            <a
                href="https://linkedin.com/in/ashwin"
                target="_blank"
                rel="noopener noreferrer"
                className=" flex justify-center items-center   w-[33px] h-[33px] font-bold  text-[20px] rounded-full p-2 border border-light-blue"
              >
                in
              </a>
              <a
                href="https://linkedin.com/in/ashwin"
                target="_blank"
                rel="noopener noreferrer"
                className=" flex justify-center items-center  w-[33px] h-[33px] font-bold  text-[20px] rounded-full p-2 border border-light-blue"
              >
                in
              </a>
          </div>
        </div>

      </div>


      <div className="bg-light-blue mt-16 py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-xs text-white">
        <p>© 2023 Mobiusservices LLC</p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="/terms" className="hover:underline">
            Terms & Conditions
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
