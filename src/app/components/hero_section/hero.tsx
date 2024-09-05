import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { TbBrandFiverr } from 'react-icons/tb';
import AnimatedDivision from '../animated_div';
import heroImage1 from '#/assets/hero_section/DSC_08791114414.png';
import heroImage2 from '#/assets/hero_section/DSC_087911165858.png';
import Image from 'next/image';
import DownloadButton from './dwnld_button';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col md:flex-row items-center overflow-hidden">
      <div className="w-full md:w-3/5 lg:w-1/2 z-10 px-4 md:px-12 lg:px-24 2xl:px-44 py-16 md:py-0">
        <AnimatedDivision>
          <div className="text-center lg:mt-20 md:text-left">
            <h3 className="text-white text-lg md:text-xl lg:text-2xl">Hello there, I am</h3>
            <h2 className="font-jost text-red-1 font-black text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6.5xl 2xl:text-7xl my-0">
              Umesha Madushan
            </h2>
            <h3 className="text-white text-lg md:text-xl lg:text-2xl">
              Developer and Designer <br className="md:hidden" /> from Sri Lanka
            </h3>
          </div>

          <div className="flex pt-8 justify-center md:justify-start text-3xl lg:text-4xl text-red-1 mb-8">
            <a target="_blank" href="https://www.fiverr.com/umesha_g" rel="noopener noreferrer" className="hover:text-red-800 transition-colors">
              <TbBrandFiverr />
            </a>
            <a target="_blank" href="https://lk.linkedin.com/in/umeshag" rel="noopener noreferrer" className="mx-8 hover:text-red-800 transition-colors">
              <AiFillLinkedin />
            </a>
            <a target="_blank" href="https://github.com/umesha-g" rel="noopener noreferrer" className="hover:text-red-800 transition-colors">
              <AiFillGithub />
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start">
            <DownloadButton />
          </div>
        </AnimatedDivision>
      </div>

      <AnimatedDivision className="w-full md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:w-3/5 lg:w-1/2 h-[50vh] md:h-full xl:p-10">
        <div className="relative w-full h-full">
          <Image
            className="absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={100}
            alt="Hero Image 2"
            src={heroImage2}
            style={{ zIndex: 1 }}
          />
          <Image
            className="absolute inset-0 w-full h-full object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
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