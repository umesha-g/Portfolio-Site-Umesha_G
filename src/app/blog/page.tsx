'use client';
import GoToTopButton from '../components/go_to_top_button';
import styles from '../Layout.module.css';
import React from 'react';
import BlogNavbar from './blog_navbar';
import Contact_Section from '../components/contact_section/contact_section';

export default function Blog() {
 
    return (
        <main className={` bg-neutral-950 font-jost  text-white overflow-hidden` }>
          <GoToTopButton/>
          <BlogNavbar/>
          <section className='min-h-screen text-center items-center justify-center flex '>
            

            <div className=''>
              <h1 className='text-white'>Comming Soon...</h1>
            </div>
            
            <Contact_Section/>
          </section>

        
          
        </main>
      );
    }