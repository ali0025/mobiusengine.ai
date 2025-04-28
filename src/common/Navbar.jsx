import React from 'react'
import { Link} from "react-router-dom"

import whitefull from '../assets/logos/white_full_logo.svg'
import { NavbarLinks } from "../data/navbar-links"
import { ArrowRight } from 'lucide-react'
import getstarted from "../assets/components/getting_43.svg"

function Navbar() {
  return (
    <div className='absolute justify-between w-full top-0 left-0 flex p-[33.78px]   text-white z-10 px-[85px]'>
        <Link>
      <img src={whitefull} alt="description" className='w-[188px] h-[37.44px]' />
        </Link>
       <nav className='flex'>
        <ul className='flex justify-between items-center w-[675px]'>
          {NavbarLinks.map((link,index)=>(
            <li key={index}>
              <Link to={link?.path}>
                <p className='font-dmsans text-[18px]'>{link.title}</p>
              </Link>
            </li>
          ))

            
          }
        </ul>
       </nav>
       <button className="flex  items-center gap-2 px-6 py-3 text-dark-blue bg-whiteish  font-semibold rounded-full ">
      <p className='font-dmsans text-[18px]' >
        Get Started
        </p>
     
    </button>
            
    </div>
  )
}

export default Navbar
