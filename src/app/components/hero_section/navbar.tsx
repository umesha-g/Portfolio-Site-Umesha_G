import Link from 'next/link';
import React,{ useEffect, useRef, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, useAnimation } from 'framer-motion';
import useWindowWidth from '../window_width_listener';
import logo from "#/assets/Asset 5.svg"
import Image from 'next/image';
import { useScreenOrientation } from '../orientation_identifier';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen,] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const width = useWindowWidth();
  const [navSty, setHeightSty] = useState<string>('my-4');
  const orientation = useScreenOrientation();

  useEffect(() => {
    let newNavSty = 'my-8 ';

    if (orientation === 'portrait-primary') {
      newNavSty = 'my-8 md:my-4 ';
    } else {
      newNavSty = 'md:my-4 ';
    }

    setHeightSty(newNavSty);
  }, [orientation]);

  const toggleMenu_sectionScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const id =e.currentTarget.getAttribute('Id');
    if(id!='blog'){e.preventDefault();};
    setIsMenuOpen(!isMenuOpen);
    
    const sectionId = e.currentTarget.getAttribute('section-id');
    const section = document.getElementById(sectionId || '');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    };

    if(width<1024){
      controls.start({ 
        opacity: 1, y: 0, 
      });
      controls.set({
        opacity: 0, y: 50, 
      });
    };
  };

  const Reload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    window.location.reload();
  };

  return (
      <nav className={`z-50 bg-neutral-950 fixed top-0 left-0 right-0 pl-10 xl:pr-5 2xl:pr-10 py-2 items-center content-center lg:py-3 2xl:py-4 flex justify-between`}>
        <div className="flex relative items-center justify-start mb-2 lg:mb-0 -ml-12 sm:-ml-0 lg:ml-14 xl:ml-20 2xl:ml-24 mt-1 lg:mt-0">
          <Link href="#" onClick={Reload} ><Image className='h-7 lg:h-9 p-0 m-0' height={45}  alt="" src={logo}/></Link>
        </div>
        
        <Link href="#" onClick={toggleMenu_sectionScroll}> <HiMenu size={30} className="lg:hidden items-center text-3xl mr-10 sm:mr-20 text-red-1" /></Link>

        <div ref={ref} className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} border-l-8 lg:border-0 border-red-1 2xl:text-lg justify-end absolute top-0 lg:static left-0 w-full bg-neutral-950 `}>
          <ul className={` flex flex-col lg:mr-24 lg:flex-row text-center min-h-screen lg:min-h-0 items-center justify-center h-full text-white  bg-neutral-950 `}>
            <motion.li animate={controls} transition= {{duration: 0.4, ease: 'easeInOut', delay:0.05 }} className={`${navSty} lg:my-0`}><Link href="#" id='about_bt' section-id="about_sc" className="hover:text-red-1 2xl:px-8 lg:px-6 text-xl lg:text-base 2xl:text-lg transition-colors duration-300 cursor-pointer" onClick={toggleMenu_sectionScroll}>ABOUT</Link></motion.li>
            <motion.li animate={controls} transition= {{duration: 0.4, ease: 'easeInOut', delay:0.10 }} className={`${navSty} lg:my-0`}><Link href="#" id='service_bt' section-id="services_sc" className="hover:text-red-1 2xl:px-8 lg:px-6 text-xl lg:text-base 2xl:text-lg transition-colors duration-300 cursor-pointer" onClick={toggleMenu_sectionScroll}>SERVICES</Link></motion.li>
            <motion.li animate={controls} transition= {{duration: 0.4, ease: 'easeInOut', delay:0.15 }} className={`${navSty} lg:my-0`}><Link href="#" id='project_bt' section-id="projects_sc" className="hover:text-red-1 2xl:px-8 lg:px-6 text-xl lg:text-base 2xl:text-lg transition-colors duration-300 cursor-pointer" onClick={toggleMenu_sectionScroll}>PROJECTS</Link></motion.li>
            <motion.li animate={controls} transition= {{duration: 0.4, ease: 'easeInOut', delay:0.20 }} className={`${navSty} lg:my-0`}><Link href="#" id='contact_bt' section-id="test_sc" className="hover:text-red-1 2xl:px-8 lg:px-6 text-xl lg:text-base 2xl:text-lg transition-colors duration-300 cursor-pointer" onClick={toggleMenu_sectionScroll}>TESTIMONIALS</Link></motion.li>
            <motion.li animate={controls} transition= {{duration: 0.4, ease: 'easeInOut', delay:0.20 }} className={`${navSty} lg:my-0`}><Link href='/blog' id='blog' className=" 2xl:px-8 lg:px-6 text-xl lg:text-base 2xl:text-lg transition-colors duration-300 cursor-pointer" onClick={toggleMenu_sectionScroll}><div className='bg-red-1 lg:-my-8 lg:px-4 lg:ml-6 lg:py-1 hover:bg-red-900 rounded-sm'><h1>BLOG</h1></div></Link></motion.li>
            <motion.li animate={controls} transition= {{duration: 0.4, ease: 'easeInOut', delay:0.25 }} className={`${navSty}  lg:my-0 lg:hidden`}><Link href="#" id='close' className="lg:px-8 text-4xl mr-2 text-red-1" onClick={toggleMenu_sectionScroll}><HiX/></Link></motion.li>
          </ul>
        </div>

      </nav>     
  );
}