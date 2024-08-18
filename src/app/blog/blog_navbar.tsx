import Link from 'next/link';
import React,{ useEffect, useRef, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { delay, motion, useAnimation } from 'framer-motion';
import useWindowWidth from '../components/window_width_listener';

export default function BlogNavbar() {
    const [isMenuOpen, setIsMenuOpen,] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const controls = useAnimation();
    const width = useWindowWidth();

    const toggleMenu_sectionScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const id =e.currentTarget.getAttribute('Id');
        if(id!='home'){e.preventDefault();};
        setIsMenuOpen(!isMenuOpen);
        
        const sectionId = e.currentTarget.getAttribute('section-id');
        const section = document.getElementById(sectionId || '');
        if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        };

        if(width<800){
            controls.start({ 
                opacity: 1, y: 0, 
            });
            controls.set({
                opacity: 0, y: 50, 
            });
        };
    };

    return (

        <div className="relative z-50">
        <nav className="bg-bunker-950 fixed top-0 left-0 right-0 pl-10 xl:pr-5 2xl:pr-10 py-2 items-center lg:py-3 2xl:py-4 flex justify-between z-10">
            <div className="flex justify-start mb-2 lg:mb-0 ml-3 md:ml-14">
            <h1 className="text-2xl lg:text-3xl 2xl:text-4xl font-adventbold mr-2 text-thatch-green-500">
                <Link href="/" >UMESHA</Link>
            </h1>
            <h1 className="text-2xl lg:text-3xl 2xl:text-4xl font-adventthin mr-2 text-thatch-green-500">
                <Link href="/" >G</Link>
            </h1>
            <h1 className="text-2xl lg:text-3xl 2xl:text-4xl font-adventthin mr-2 text-thatch-green-500">
                <Link href="/" >.</Link>
            </h1>
            </div>
            
            <Link href="#" onClick={toggleMenu_sectionScroll}> <HiMenu size={30} className="md:hidden items-center text-3xl mr-10 sm:mr-20 text-thatch-green-500" /></Link>
            
            <div ref={ref} className={`md:flex ${isMenuOpen ? 'block' : 'hidden'}  2xl:text-lg justify-end absolute top-0 md:static transition-opacity duration-200 left-0 w-full bg-bunker-950 `}>
            <ul className="flex  flex-col md:mr-24 md:flex-row min-h-screen md:min-h-0 items-center justify-center h-full text-white  bg-bunker-950 ">
                <motion.li animate={controls} transition= {{duration: 0.6, ease: 'easeInOut', delay:0.20 }} className='my-10  md:my-0'><Link href='/' id='home' className="hover:text-thatch-green-500 2xl:px-8 md:px-6 text-2xl md:text-base 2xl:text-lg transition-colors duration-300 cursor-pointer" onClick={toggleMenu_sectionScroll}>HOME</Link></motion.li>
                <motion.li animate={controls} transition= {{duration: 0.6, ease: 'easeInOut', delay:0.25 }} className='my-10 md:my-0 md:hidden'><Link href="#" id='close' className="md:px-8 text-4xl mr-2 text-thatch-green-500" onClick={toggleMenu_sectionScroll}><HiX/></Link></motion.li>
            </ul>
            </div>
        </nav>
        </div>

    );
}