'use client';
import GoToTopButton from '../components/go_to_top_button';
import styles from '../Layout.module.css';
import React from 'react';
import BlogNavbar from './blog_navbar';

export default function Blog() {
 
    return (
        <main className={`${styles.container} bg-bunker-950 font-jost min-h-screen text-white overflow-hidden` }>
          <GoToTopButton/>
          <BlogNavbar/>
          <section className='min-h-screen text-center items-center justify-center  flex '>
            

            <div className=''>
              <h1 className='text-white'>Comming Soon...</h1>

            </div>
          </section>

            <div className='relative'>
              <footer className=" rounded-lg  m-4">
                  <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                  <div className="sm:flex sm:items-center sm:justify-between">
                  </div>
                      <hr className="my-6 border-thatch-green-500 sm:mx-auto lg:my-8" />
                      <span className="block text-sm text-thatch-green-500 sm:text-center ">Designed By Umesha G. © 2024 All Rights Reserved.</span>
                  </div>
              </footer>
            </div>
          
        </main>
      );
    }