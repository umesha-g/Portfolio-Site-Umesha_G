import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { TbBrandFiverr } from 'react-icons/tb';
import AnimatedDivision from '../animated_div';
import heroImage1 from '#/assets/hero_section/DSC_08791114414.png';
import heroImage2 from '#/assets/hero_section/DSC_087911165858.png';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from './dwnld_button';

export default function Hero() {
  return (
    <div className="grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 grid-cols-1 md:ml-10  mx-0">
      <AnimatedDivision className="pt-5 lg:pt-28 xl:pt-0 2xl:pt-2 mx-12 lg:ml-24 2xl:ml-44 lg:flex">
        <div className="mt-24 lg:mt-44 xl:mt-52 2xl:mt-96">
          <div className="text-center md:text-left">
            <h3 className="text-white text-md lg:text-lg xl:text-xl 2xl:text-2xl -mb-4">Hello there, I am</h3>
            <h2 className="font-jost text-red-1 font-black text-3xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-6.5xl my-5 2xl:text-7xl">
              Umesha Madushan
            </h2>
            <h3 className="text-white text-md lg:text-lg xl:text-xl 2xl:text-2xl -mt-4">
              Developer and Designer <br className="lg:hidden" /> from Sri Lanka
            </h3>
          </div>

          <div className="flex pt-2 justify-center md:justify-start text-2xl lg:text-3xl 2xl:text-4xl text-red-1 mb-4 2xl:mb-10">
            <a target="_blank" href="https://www.fiverr.com/umesha_g" rel="noopener noreferrer">
              <TbBrandFiverr />
            </a>
            <a target="_blank" href="https://lk.linkedin.com/in/umeshag" rel="noopener noreferrer">
              <AiFillLinkedin className="mx-6" />
            </a>
            <a target="_blank" href="https://github.com/umesha-g" rel="noopener noreferrer">
              <AiFillGithub />
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start">
            <DownloadButton />
          </div>
        </div>
      </AnimatedDivision>

      <AnimatedDivision className="container justify-self-center relative ">
        <div className="relative ">
        <Image
            className="absolute h-auto w-11/12 sm:w-9/12 md:w-10/12  lg:w-10/12 xl:w-9/12 2xl:w-10/12 left-1/2 transform translate-y-16 sm:translate-y-10 md:translate-y-12 lg:translate-y-1/2 xl:translate-y-24 2xl:translate-y-32 -translate-x-1/2 transition-opacity duration-500 ease-in-out delay-100 opacity-0 hover:opacity-100"
            sizes="100vw"
            quality={100}
            alt="Hero Image 2"
            src={heroImage2}
            style={{ zIndex: 1 }}
          />

          <Image
            className="absolute h-auto w-11/12 sm:w-9/12 md:w-10/12  lg:w-10/12 xl:w-9/12 2xl:w-10/12 left-1/2 transform translate-y-16 sm:translate-y-10 md:translate-y-12 lg:translate-y-1/2 xl:translate-y-24 2xl:translate-y-32 -translate-x-1/2 "
            sizes="100vw"
            quality={100}
            alt="Hero Image 1"
            src={heroImage1}
            style={{ zIndex: 0 }}
          />
          
        </div>
      </AnimatedDivision>
    </div>
  );
}
