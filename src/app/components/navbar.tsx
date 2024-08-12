import Link from 'next/link';
import React,{ useEffect, useRef, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu_sectionScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
    const sectionId = e.currentTarget.getAttribute('section-id');
    const section = document.getElementById(sectionId || '');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const Reload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    window.location.reload();
  };
  return (
    <div className="relative z-50">
      <nav className="bg-slate-900 fixed top-0 left-0 right-0 px-10 py-2 items-center lg:py-3 2xl:py-4 flex justify-between z-10">
        <div className="flex justify-start mb-2 lg:mb-0 ml-3 sm:ml-14">
          <h1 className="text-2xl lg:text-3xl 2xl:text-4xl font-adventbold mr-2 text-amber-600">
            <Link href="#" onClick={Reload}>UMESHA</Link>
          </h1>
          <h1 className="text-2xl lg:text-3xl 2xl:text-4xl font-adventthin mr-2 text-amber-600">
            <Link href="#" onClick={Reload}>G</Link>
          </h1>
          <h1 className="text-2xl lg:text-3xl 2xl:text-4xl font-adventthin mr-2 text-amber-600">
            <Link href="#" onClick={Reload}>.</Link>
          </h1>
        </div>
        
        <a onClick={toggleMenu_sectionScroll}> <HiMenu size={30} className="sm:hidden items-center text-3xl mr-2 text-amber-600" /></a>
        

        <div className={`sm:flex ${isMenuOpen ? 'block' : 'hidden'}  2xl:text-lg justify-end absolute top-0 sm:static left-0 w-full bg-slate-900 `}>
          <ul className="flex  flex-col sm:mr-24 sm:flex-row min-h-screen sm:min-h-0 items-center justify-center h-full text-white  bg-slate-900 ">
            <li className='my-10  sm:my-0'><a id='about_bt' section-id="about_sc" className="hover:text-amber-600 2xl:px-8 sm:px-6 text-2xl sm:text-base 2xl:text-lg transition-colors duration-300 cursor-pointer" onClick={toggleMenu_sectionScroll}>ABOUT</a></li>
            <li className='my-10  sm:my-0'><a id='service_bt' section-id="services_sc" className="hover:text-amber-600 2xl:px-8 sm:px-6 text-2xl sm:text-base 2xl:text-lg transition-colors duration-300 cursor-pointer" onClick={toggleMenu_sectionScroll}>SERVICES</a></li>
            <li className='my-10  sm:my-0'><a id='project_bt' section-id="projects_sc" className="hover:text-amber-600 2xl:px-8 sm:px-6 text-2xl sm:text-base 2xl:text-lg transition-colors duration-300 cursor-pointer" onClick={toggleMenu_sectionScroll}>PROJECTS</a></li>
            <li className='my-10  sm:my-0'><a id='contact_bt' section-id="contact_sc" className="hover:text-amber-600 2xl:px-8 sm:px-6 text-2xl sm:text-base 2xl:text-lg transition-colors duration-300 cursor-pointer" onClick={toggleMenu_sectionScroll}>CONTACT</a></li>
            <li className='my-10 sm:my-0 sm:hidden'><a className="sm:px-8 text-4xl mr-2 text-amber-600" onClick={toggleMenu_sectionScroll}><HiX/></a></li>
          </ul>
        </div>

      </nav>

    </div>
      
  );
}