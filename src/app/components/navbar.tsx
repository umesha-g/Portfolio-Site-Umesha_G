
import { useEffect, useRef, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {

    const navbarRef = useRef<HTMLElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (navbarRef.current) {
        navbarRef.current.style.position = 'absolute';
        navbarRef.current.style.top = '0';
        }

        const handleScroll = () => {
        if (navbarRef.current) {
            const navbarHeight = navbarRef.current.offsetHeight;
            navbarRef.current.style.top = `${window.pageYOffset}px`;
        }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
       
        <div  className="relative">

          <nav ref={navbarRef} className="bg-slate-900 absolute left-0 right-0 px-10 py-2 items-center lg:py-3 2xl:py-4 flex justify-between z-10">

            <div className="flex justify-start mb-2 lg:mb-0 ml-3 sm:ml-14">
              <h1 className="text-2xl lg:text-3xl 2xl:text-4xl font-adventbold mr-2 text-amber-600"><a href="#hero">UMESHA</a></h1>
              <h1 className="text-2xl lg:text-3xl 2xl:text-4xl font-adventthin mr-2 text-amber-600"><a href="#hero">G</a></h1>
              <h1 className="text-2xl lg:text-3xl 2xl:text-4xl font-adventthin mr-2 text-amber-600"><a href="#hero">.</a></h1>
            </div>

            <button onClick={toggleMenu} className="text-white sm:hidden items-center">
                <HiMenu size={30} className="text-3xl mr-2 text-amber-600" />
            </button>

            <div className={`sm:flex ${isMenuOpen ? 'block' : 'hidden'}  2xl:text-lg justify-end absolute top-0 sm:static left-0 w-full bg-slate-900 `}>
              <ul className="flex flex-col sm:mr-24 sm:flex-row min-h-screen sm:min-h-0 items-center justify-center h-full text-white  bg-slate-900 ">
                <li className='my-10  sm:my-0'><a href="#services" className="2xl:px-8 sm:px-6 text-2xl sm:text-base 2xl:text-lg" onClick={toggleMenu}>SERVICES</a></li>
                <li className='my-10  sm:my-0'><a href="#projects" className="2xl:px-8 sm:px-6 text-2xl sm:text-base 2xl:text-lg" onClick={toggleMenu}>PROJECTS</a></li>
                <li className='my-10  sm:my-0'><a href="#about" className="2xl:px-8 sm:px-6 text-2xl sm:text-base 2xl:text-lg" onClick={toggleMenu}>ABOUT</a></li>
                <li className='my-10  sm:my-0'><a href="#contact" className="2xl:px-8 sm:px-6 text-2xl sm:text-base 2xl:text-lg" onClick={toggleMenu}>CONTACT</a></li>
                <li className='my-10 sm:my-0 sm:hidden'><a className="sm:px-8 text-4xl mr-2 text-amber-600" onClick={toggleMenu}><HiX/></a></li>
              </ul>
            </div>

          </nav>

        </div>
        
    );
}