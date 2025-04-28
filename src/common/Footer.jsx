import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start gap-10">

        {/* Left Side - Logo and Address */}
        <div className="flex flex-col gap-6">
          {/* Logo */}
          <img
            src="/path-to-your-logo.png" // <-- Replace with your logo path
            alt="MobiusEngine Logo"
            className="h-10"
          />

          {/* Address */}
          <div className="text-sm text-gray-700">
            <p className="font-semibold text-blue-600 mb-1">Address</p>
            <p>1675 Mission St Ste 103 #450<br />San Francisco, CA 94103</p>
          </div>
        </div>

        {/* Center - Email and Phone */}
        <div className="flex flex-col gap-6">
          {/* Email */}
          <div className="text-sm text-gray-700">
            <p className="font-semibold text-blue-600 mb-1">Email</p>
            <a href="mailto:finance@mobiusengine.ai" className="hover:underline">
              finance@mobiusengine.ai
            </a>
          </div>

          {/* Telephone */}
          <div className="text-sm text-gray-700">
            <p className="font-semibold text-blue-600 mb-1">Telephone</p>
            <a href="tel:6608886026" className="hover:underline">
              660–888–6026
            </a>
          </div>
        </div>

        {/* Right Side - Social Links */}
        <div className="flex flex-col gap-6">
          <p className="font-semibold text-blue-600 text-sm">Socials</p>
          <div className="flex gap-4">
            {/* LinkedIn Icons */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <div className="border border-blue-600 rounded-full p-2">
                <img src="/linkedin-icon.svg" alt="LinkedIn" className="h-5 w-5" />
              </div>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <div className="border border-blue-600 rounded-full p-2">
                <img src="/linkedin-icon.svg" alt="LinkedIn" className="h-5 w-5" />
              </div>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-600 mt-16 py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-xs text-white">
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
