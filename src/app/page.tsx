'use client';

import Navbar from '@/app/components/navbar';
import Hero from '@/app/components/hero';

export default function Home() {
  
  return (
    <main className="bg-white">

      <section id='hero' className="bg-slate-900 min-h-screen">
        <div className='relative'><Navbar /></div>
        <div className='relative'><Hero /></div>
        
      </section>

      <section id="services" className='min-h-screen bg-gray-100'>
        <div>
          <h3 className='text-2xl text-center lg:text-left px-10 py-20 font-adventbold text-amber-600'>Services I Offer</h3>
        </div>
      </section>

      <section id="projects" className='min-h-screen bg-amber-600'>
        <div>
          <h3 className='text-2xl text-center lg:text-left px-10 py-20 font-adventbold text-white'>My Projects</h3>
        </div>
      </section>

      <section id="about" className='min-h-screen bg-gray-100'>
        <div>
          <h3 className='text-2xl text-center lg:text-left px-10 py-20 font-adventbold text-amber-600'>Who am I?</h3>
        </div>
      </section>

      <section id="contact" className='min-h-screen bg-slate-900'>
        <div>
          <h3 className='text-2xl text-center lg:text-left px-10 py-20 font-adventbold text-amber-600'>Contact Me</h3>
        </div>
      </section>

      <section>
        <div className='bg-slate-950 h-10 text-white items-center content-center  text-center' ><p >Designed By Umesha G. 2024</p></div>
      </section>
    </main>
  );
}
