'use client';
import React from 'react';
import Navbar from './components/hero_section/navbar';
import Hero from './components/hero_section/hero';
import GoToTopButton from '../app/components/go_to_top_button';
import Service_Section from './components/service_section/service_section';
import About_Section from './components/about_section/about_section';
import Project_Section from './components/project_section/project_sec';
import Contact_Section from './components/contact_section/contact_section';
import styles from './Layout.module.css';
import Testimonial_Section from './components/testimonial_section/testimonial_sec';

export default function Home() {
  
  return (
    <main className={`  font-jost text-white overflow-hidden` }>
    
      <GoToTopButton/>

      <section id='hero_sc' className=' bg-neutral-950 min-h-screen'>
        <Navbar />
        <Hero />
      </section>

      <section id="about_sc"  className='min-h-screen bg-neutral-900 '>
        <About_Section/>
      </section>

      <section id="services_sc" className='bg-neutral-950 min-h-screen '>
        <Service_Section/>
      </section>

      <section id="projects_sc" className='min-h-screen bg-neutral-900  items-center '>
        <Project_Section/>
      </section>

      <section id="test_sc" className='min-h-screen relative bg-neutral-950  items-center '>
        <Testimonial_Section/>
        <Contact_Section/>
      </section>

    </main>
  );
}
