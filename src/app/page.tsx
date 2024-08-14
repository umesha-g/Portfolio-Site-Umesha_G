'use client';
import React from 'react';
import Navbar from './components/hero_section/navbar';
import Hero from './components/hero_section/hero';
import GoToTopButton from '../app/components/go_to_top_button';
import Service_Section from './components/service_section/service_section';
import About_Section from './components/about_section/about_section';
import Project_Section from './components/project_section/project_sec';
import Contact_Section from './components/contact_section/contact_section';


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
        <Service_Section/>
      </section>

      <section id="projects_sc" className='min-h-screen items-center bg-gray-100'>
        <Project_Section/>
      </section>

      <section id="contact_sc" className='h-96 bg-slate-900'>
        <Contact_Section/>
      </section>
  
    </main>
  );
}
