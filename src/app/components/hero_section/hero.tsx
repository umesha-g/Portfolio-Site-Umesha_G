import React from 'react';
import { AiFillGithub, AiFillLinkedin, } from 'react-icons/ai';
import { TbBrandFiverr } from 'react-icons/tb';
import AnimatedDivision from '../animated_div';
import heroImage1 from '#/assets/hero_section/DSC_08791114414.png';
import heroImage2 from '#/assets/hero_section/DSC_087911165858.png';
import Image from 'next/image';

export default function Hero() {

    return (
      
        <div className='grid lg:grid-cols-2 grid-cols-1 lg:mx-10 mx-0 '>

          <AnimatedDivision className= 'pt-5 lg:pt-20 2xl:pt-0 mx-12 lg:ml-24 2xl:ml-44 lg:mx-20 lg:flex '>
            <div className='mt-24 lg:mt-44 2xl:mt-80'>

              <div className='text-center lg:text-left '>
                <h3 className='text-white text-lg lg:text-xl 2xl:text-2xl -mb-4'>Hello there, I am</h3>
                <h2 className='font-jost text-red-1 text-5xl font-black lg:text-6xl xl:text-6.5xl my-5 2xl:text-7xl'>Umesha Madushan</h2>
                <h3 className='text-white text-lg lg:text-xl 2xl:text-2xl -mt-4'>Developer and Designer <br className='lg:hidden'/> from  Sri Lanka </h3>
              </div>

              <div className=' flex pt-5 justify-center lg:justify-start text-2xl 2xl:text-4xl text-red-1 mb-5 lg:mb-10 ' >
                <a target="_blank" href='https://www.fiverr.com/umesha_g'><TbBrandFiverr  className=''/></a>
                <a target="_blank" href='https://lk.linkedin.com/in/umeshag'><AiFillLinkedin className='mx-6'/></a>
                <a target="_blank" href='https://github.com/umesha-g'><AiFillGithub className=''/></a>
              </div>

              <div className=' flex items-center justify-center lg:justify-start'>
                <a className="bg-neutral-600 text-white hover:bg-red-1 px-4 py-2 rounded 2xl:px-6 2xl:py-3 2xl:text-xl" href="#">Resume</a>
              </div>

            </div>
          </AnimatedDivision>

          <AnimatedDivision className='container justify-self-center object-contain '>
            <div className='xl:relative ml-10 xl:ml-0'>
            <Image className='xl:absolute mt-10 lg:mt-40 xl:mt-32 2xl:mt-20 justify-self-center sm:px-10 md:px-20 lg:px-0  self-center ' sizes='100vw'style={{width:'90%',height:'auto'}} quality={100}  alt="" src={heroImage1}/>
            <Image className='xl:absolute  mt-10 lg:mt-40 xl:mt-32 2xl:mt-20 justify-self-center sm:px-10 md:px-20 lg:px-0 hidden xl:block self-center ease-in-out duration-500 delay-100 transition-opacity opacity-0 hover:opacity-100 ' sizes='100vw'style={{width:'90%',height:'auto'}} quality={100}  alt="" src={heroImage2}/>
            
            </div>
          </AnimatedDivision>

        </div>
   
    );

}