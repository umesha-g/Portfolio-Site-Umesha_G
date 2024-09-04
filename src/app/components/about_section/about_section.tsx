import React from 'react';
import {TimeEvents, time_line_data } from '#/data/about_sec_data/time_line_data';
import Time_Line from './about_timeline';
import Numberload from './about_number';
import SkillBox from './about_skill_box';
import {Skill,skills_list} from '#/data/about_sec_data/skill_box_list'
import AnimatedDivision from '../animated_div';

export default function About_Section(): JSX.Element {

  return (
    <div className=" pb-14 lg:pt-28 pt-20">
      <div className="container mx-auto px-4 overflow-hidden">
        <AnimatedDivision>
          <h2 className="2xl:text-6xl lg:text-5xl text-4xl font-bold mb-6 lg:mb-10 xl:mb-6 text-center lg:text-left text-red-1">About Me</h2>
        </AnimatedDivision>
       {/*<Numberload Number={1000} />*/}

        <AnimatedDivision className='grid xl:grid-cols-5 grid-cols-1 '>
          <div className='text-center items-center pb-12 px-3 lg:p-12 text-lg lg:text-xl  text-balance col-span-2'>
              <h1 className='text-2xl lg:text-3xl text-neutral-500 font-bold mt-2 mb-5 lg:mt-28 lg:mb-16'> I AM, </h1>
              <p className=' lg:leading-7 lg:font-light lg:text-md xl:text-lg 2xl:text-xl px-4'> an Enthusiastic Science undergraduate with a strong foundation in programming and system design. Adept at managing end-to-end project Lifecycles and crafting innovative solutions. Eager to contribute to the software industry by leveraging analytical thinking and a passion for problem-solving.
            </p>
            <div className=' mt-14 lg:mt-20 grid grid-cols-3'>
              <div className='flex flex-col pla place-items-center'>
                <h5 className='text-neutral-400 text-sm 2xl:text-base mb-2 leading-6'> Number Of <br/>Clients</h5>
                <span className='flex'><Numberload Number={67}/><h1 className='ml-2 text-xl lg:text-2xl xl:text-3xl text-red-1 font-bold'>+</h1></span>
              </div>
              <div className='flex flex-col pla place-items-center'>
                <h5 className='text-neutral-400 text-sm 2xl:text-base mb-2 leading-6'>Graphic <br/>Designs</h5>
                <span className='flex'><Numberload Number={120}/><h1 className='ml-2 text-xl lg:text-2xl xl:text-3xl text-red-1 font-bold'>+</h1></span>
              </div>
              <div className='flex flex-col pla place-items-center'>
                <h5 className='text-neutral-400 text-sm 2xl:text-base mb-2 leading-6'>Software <br/>Developments</h5>
                <span className='flex'><Numberload Number={4}/><h1 className='ml-2 hidden text-xl lg:text-2xl xl:text-3xl text-red-1 font-bold'>+</h1></span>
              </div>
            </div>

          </div>
          <div className='col-span-3 lg:pl-64 p-5'>
            <h3 className="text-2xl font-semibold  mb-14">Experience & Education</h3>
            {time_line_data.map((timeEvents: TimeEvents, index: number) => (
              <Time_Line key={index} {... timeEvents} />
            ))}
          </div >

        </AnimatedDivision>

        <AnimatedDivision className='mt-20 p-5'>
          <h3 className="text-2xl font-semibold mb-5 ">Technical Skills</h3>
          
          <div className='flex lg:flex-row flex-col lg:ml-0 mt-5 pt-5 lg:pt-8 '>
            {skills_list.map((Skill: Skill, index: number) => (
                <SkillBox key={index} {...Skill} />
            ))}
          </div>
  
        </AnimatedDivision>

      </div>
    </div>
  );
}
