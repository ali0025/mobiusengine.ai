import React from 'react';
import { Link } from "react-router-dom";

import whitefull from '../assets/logos/white_full_logo.svg';
import { NavbarLinks } from "../data/navbar-links";

function Navbar() {
  return (
    <div className="absolute top-0 left-0 w-full flex items-center justify-between px-5 md:px-[85px] py-6 text-white z-10">
      <Link to="/">
        <img src={whitefull} alt="Logo" className="w-[140px] md:w-[188px] h-auto" />
      </Link>

      <nav className="hidden md:flex">
        <ul className="flex items-center gap-8">
          {NavbarLinks.map((link, index) => (
            <li key={index}>
              <Link to={link?.path}>
                <p className="font-dmsans text-base md:text-[18px]">{link.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button className="hidden md:flex items-center gap-2 px-5 md:px-6 py-2 md:py-3 text-dark-blue bg-whiteish font-semibold rounded-full transition-all duration-300 hover:bg-[#022183] hover:text-whiteish">
        <p className="font-dmsans text-base md:text-[18px] ">Get Started</p>
      </button>
    </div>
  );
}

export default Navbar;
