import React, { useState, useEffect, useRef } from 'react';

import SwipeableDiv from './about_swipable_card';
import LinearCard from './about_linear_sliders';
import CircularProgress from './about_circular_sliders';
import {LinearInput,linear_skill_list} from '#/data/about_sec_data/linear_skill_list';
import {CircularSkill, circular_skill_list } from '#/data/about_sec_data/circular_skill_list';
import {TimeEvents, time_line_data } from '#/data/about_sec_data/time_line_data';
import Time_Line from './about_timeline';
import Numberload from './about_number';
import SkillBox from './about_skill_box';
import {Skill,skills_list} from '#/data/about_sec_data/skill_box_list'
import { linear_language_list } from '#/data/about_sec_data/linear_language_list';
import AnimatedDivision from '../animated_div';
import { skills_list_2 } from '#/data/about_sec_data/swipable_skills_list_2';
import { skills_list_3 } from '#/data/about_sec_data/swipable_skills_list_3';

export default function About_Section(): JSX.Element {

  return (
    <div className=" pb-14 lg:pt-28 pt-20">
      <div className="container mx-auto px-4 overflow-hidden">
        <AnimatedDivision>
          <h2 className="2xl:text-6xl lg:text-5xl text-4xl font-bold mb-14 lg:mb-0 text-center lg:text-left text-red-1">About Me</h2>
        </AnimatedDivision>
       {/*<Numberload Number={1000} />*/}

        <AnimatedDivision className='grid xl:grid-cols-5 grid-cols-1 '>
          <div className='text-center items-center pb-12 px-3 lg:p-12 text-lg lg:text-xl  text-balance col-span-2'>
              <h1 className='text-2xl lg:text-3xl text-neutral-500 font-bold mt-2 mb-5 lg:mt-32 lg:mb-16'> I AM, </h1>
              <p className='text-base lg:leading-7 lg:font-light lg:text-llg px-4'> an Enthusiastic Science undergraduate with a strong foundation in programming and system design. Adept at managing end-to-end project Lifecycles and crafting innovative solutions. Eager to contribute to the software industry by leveraging analytical thinking and a passion for problem-solving.
            </p>
            <div className='flex mt-14 lg:mt-20'>
              <div className='w-svw'>
                <h5 className='text-neutral-400 text-sm lg:text-ssm mb-2 leading-6'> Number Of <br/>Clients</h5>
                <Numberload Number={67}/>
              </div>
              <div className='w-svw'>
                <h5 className='text-neutral-400 text-sm lg:text-ssm mb-2 leading-6'>Graphic <br/>Designs</h5>
                <Numberload Number={120}/>
              </div>
              <div className='w-svw'>
                <h5 className='text-neutral-400 text-sm lg:text-ssm mb-2 leading-6'>Software <br/>Developments</h5>
                <Numberload Number={4}/>
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

        {/* <AnimatedDivision className='my-20'>
          
          <h3 className="text-2xl font-semibold  mb-16">Technical Skills</h3>

          <div className="flex flex-wrap justify-center mb-8 grid-cols-2 lg:grid-cols-4  gap-4">
            {circular_skill_list.map((circularSkill: CircularSkill, index: number) => (
              <CircularProgress key={index} {... circularSkill} />
            ))}
          </div>

          <AnimatedDivision className="mb-10 ">
          <p className="text-lg font-semibold mt-10 mb-10">Frameworks</p>
            <SwipeableDiv skills_list={skills_list_1} />
          </AnimatedDivision>

          <AnimatedDivision className="mb-10 ">
          <p className="text-lg font-semibold mt-10 mb-10">Frontend Technologies</p>
            <SwipeableDiv skills_list={skills_list_2} />
          </AnimatedDivision>

          <AnimatedDivision className="mb-10 ">
          <p className="text-lg font-semibold mt-10 mb-10">Cloud Platforms & Databases</p>
            <SwipeableDiv skills_list={skills_list_3} />
          </AnimatedDivision>

          <h3 className="text-2xl font-semibold mt-10 mb-16">Other Skills</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {linear_skill_list.map((linearSkill: LinearInput, index: number) => (
              <LinearCard key={index} {... linearSkill} />
            ))}
          </div>

          <h3 className="text-2xl font-semibold mt-10 mb-16">Languages</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {linear_language_list.map((linearLang: LinearInput, index: number) => (
              <LinearCard key={index} {... linearLang} />
            ))}
          </div>

        </AnimatedDivision> */}
      </div>
    </div>
  );
}
