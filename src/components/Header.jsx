import React from 'react';
import RFlogo from "../images/rf_logo_white.png";
import { Link } from 'gatsby';
const Header = () => {
  return (
    <header className=' flex gap-2 py-2 border-b-2 border-gray-alpha font-geistLight items-center'>
        <div className="">
            <img src={RFlogo} alt="Rollens Logo" className="w-[80px]" />
        </div>
        <div className='ml-auto flex gap-8 items-center'>
            <Link to="/" className="text-md text-white hover:text-rol-yellow transition-hover ease-in-out duration-300 font-normal">Home</Link>
            <Link to="/" className="text-md text-white hover:text-rol-yellow transition-hover ease-in-out duration-300 font-normal">About</Link>
            <Link to="/" className="text-md text-white hover:text-rol-yellow transition-hover ease-in-out duration-300 font-normal">Project</Link>
            <Link to="/" className="text-md text-rol-yellow transition-hover ease-in-out duration-300 font-normal border-2 border-rol-yellow rounded-md px-3 py-2 hover:border-gray-alpha hover:text-white">Contact Me</Link>
        </div>
    </header>
    )
}
export default Header;