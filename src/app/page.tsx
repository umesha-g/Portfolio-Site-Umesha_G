'use client';
import React from 'react';
import Navbar from '../app/components/navbar';
import Hero from '../app/components/hero';
import GoToTopButton from '../app/components/go_to_top_button';
import Serv_Section from '../app/components/serv_section';
import About_Section from '../app/components/about_section_3';
import Link from 'next/link';
import Project_Section from './components/proj_sec';


export default function Home() {
  
  return (
    <main className="bg-white font-jost">
      <GoToTopButton/>

      <section id='hero_sc' className="bg-slate-900 min-h-screen">
        <div className='relative'><Navbar /></div>
        <div className='relative'><Hero /></div>
      </section>

      <section id="about_sc"  className=' bg-gray-100'>
        <About_Section/>
      </section>

      <section id="services_sc" className='min-h-screen bg-amber-600'>
        <Serv_Section/>
      </section>

      <section id="projects_sc" className='min-h-screen items-center bg-gray-100'>
        <Project_Section/>
      </section>

      <section id="contact_sc" className='h-96 bg-slate-900'>
        <div className='flex flex-col h-96'>
          <div className='flex-1 lg:py-10 py-5'>
            <h3 className='lg:text-4xl text-3xl font-bold mb-8 text-center text-white'>Contact Me</h3>
          </div>
          <div className='bg-slate-950  text-white text-center  w-full p-4 2xl:p-8' >
            <p >Designed By Umesha G. 2024 ©</p>
          </div>
        </div>
      </section>
      
    </main>
  );
}
