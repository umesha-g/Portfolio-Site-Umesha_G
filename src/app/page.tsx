
'use client';

import { AiFillGithub, AiFillGold, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import {BsFillMoonStarsFill} from 'react-icons/bs'
import { useEffect,useRef } from 'react';



export default function Home() {

  const navbarRef = useRef<HTMLElement>(null);

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

  return (
    <main className="bg-white">
      <section id='hero' className="bg-slate-900 min-h-screen">
        <div className="relative pt-20">
          <nav ref={navbarRef} className="bg-slate-900 absolute left-0 right-0 px-10 py-4 lg:py-7 mb-6 md:mb-12 md:flex md:justify-between"
          >
            <div className="flex justify-center md:justify-start mb-6 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-adventbold mr-2 text-amber-600">UMESHA</h1>
              <h1 className="text-3xl md:text-4xl font-adventthin text-amber-600">G.</h1>
            </div>
            <div className="items-center justify-center lg:flex">
              <ul className="flex items-center 2xl:text-lg justify-center md:justify-end text-white">
                <li><a href="#services" className="px-4">Services</a></li>
                <li><a href="#projects" className="px-4">Projects</a></li>
                <li><a href="#contact" className="px-4">Contact</a></li>
              </ul>
            </div>
          </nav>
        </div>
        <div className='mt-24 lg:mt-32 mx-12 md:mx-40 lg:flex 2xl:mt-64'>
          <div>
            <div>
              <h2 className='text-center  md:text-left leading-8 text-white text-xl 2xl:text-2xl'>Hi , I am Umesha. I am a Developer also a Designer 
                <br/>Welcome to My Portfolio Site.
              </h2>
            </div>
            <div className='flex pt-5 justify-center md:justify-start text-3xl 2xl:text-4xl text-amber-600 mb-10 lg:mb-20 ' >
              <AiFillGold className=''/>
              <AiFillLinkedin className='mx-6'/>
              <AiFillGithub className=''/>
            </div>
            <div className='flex items-center justify-center lg:justify-start'>
            <a className="bg-amber-600  text-slate-900 px-4 py-2 rounded 2xl:px-8 2xl:py-4 2xl:text-lg" href="#" >Resume</a>
            </div>
          </div>
        </div>
     </section>

     <section id="services" className='min-h-screen bg-gray-100'>

      <div>
        <h3 className='text-2xl px-10 py-10 font-adventbold text-amber-600'>Services I Offer</h3>
      </div>

     </section>

     <section id="projects" className='min-h-screen bg-slate-900'>

      <div>
        <h3 className='text-2xl px-10 py-10 font-adventbold text-amber-600'>My Projects</h3>
      </div>

      </section>

      <section id="contact" className='min-h-screen bg-gray-100'>

        <div>
          <h3 className='text-2xl px-10 py-10 font-adventbold text-amber-600'>Contact Me</h3>
        </div>

      </section>

    </main>
  );
}
