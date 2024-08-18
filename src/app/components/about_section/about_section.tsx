import React, { useState, useEffect, useRef } from 'react';
import { Skill,skills_list_1 } from '#/data/about_section_data/swipable_skills_list_1';
import SwipeableDiv from './about_swipable_card';
import LinearCard from './about_linear_sliders';
import CircularProgress from './about_circular_sliders';
import {LinearInput,linear_skill_list} from '#/data/about_section_data/linear_skill_list';
import {CircularSkill, circular_skill_list } from '#/data/about_section_data/circular_skill_list';
import {TimeEvents, time_line_data } from '#/data/about_section_data/time_line_data';
import Time_Line from './about_timeline';
import Numberload from './about_number';
import BorderdAnimatedDivision from '../bordered_animated_div';
import { linear_language_list } from '#/data/about_section_data/linear_language_list';
import NoBorderdAnimatedDivision from '../no_border_animated_div';
import { skills_list_2 } from '#/data/about_section_data/swipable_skills_list_2';
import { skills_list_3 } from '#/data/about_section_data/swipable_skills_list_3';

export default function About_Section(): JSX.Element {

  return (
    <div className=" lg:py-28 py-20">
      <div className="container mx-auto px-4 overflow-hidden">
        <h2 className="lg:text-4xl text-3xl font-bold mb-8 text-center text-thatch-green-500">About Me</h2>

       {/*<Numberload Number={1000} />*/}

        <NoBorderdAnimatedDivision className='text-center lg:mx-16 mx-14 my-20 text-xl font-extralight leading-9 text-balance'>
          <p >I am an Enthusiastic Science undergraduate with a strong foundation in programming and 
              system design. Adept at managing end-to-end project Lifecycles and crafting 
              innovative solutions. Eager to contribute to the software industry by leveraging 
              analytical thinking and a passion for problem-solving.
            </p>
        </NoBorderdAnimatedDivision>

        <BorderdAnimatedDivision>
          <h3 className="text-2xl font-semibold  mb-10">Experience & Education</h3>
          {time_line_data.map((timeEvents: TimeEvents, index: number) => (
            <Time_Line key={index} {... timeEvents} />
          ))}
        </BorderdAnimatedDivision>

        <BorderdAnimatedDivision>
          
          <h3 className="text-2xl font-semibold  mb-10">Technical Skills</h3>

          <div className="flex flex-wrap justify-center mb-8 grid-cols-2 lg:grid-cols-4  gap-4">
            {circular_skill_list.map((circularSkill: CircularSkill, index: number) => (
              <CircularProgress key={index} {... circularSkill} />
            ))}
          </div>

          <NoBorderdAnimatedDivision className="mb-20 ">
          <p className="text-lg font-semibold mt-10 mb-10">Frameworks</p>
            <SwipeableDiv skills_list={skills_list_1} />
          </NoBorderdAnimatedDivision>

          <NoBorderdAnimatedDivision className="mb-20 ">
          <p className="text-lg font-semibold mt-10 mb-10">Frontend Technologies</p>
            <SwipeableDiv skills_list={skills_list_2} />
          </NoBorderdAnimatedDivision>

          <NoBorderdAnimatedDivision className="mb-20 ">
          <p className="text-lg font-semibold mt-10 mb-10">Cloud Platforms & Databases</p>
            <SwipeableDiv skills_list={skills_list_3} />
          </NoBorderdAnimatedDivision>

          <h3 className="text-2xl font-semibold mt-10 mb-10">Other Skills</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {linear_skill_list.map((linearSkill: LinearInput, index: number) => (
              <LinearCard key={index} {... linearSkill} />
            ))}
          </div>

          <h3 className="text-2xl font-semibold mt-10 mb-10">Languages</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {linear_language_list.map((linearLang: LinearInput, index: number) => (
              <LinearCard key={index} {... linearLang} />
            ))}
          </div>

        </BorderdAnimatedDivision>
      </div>
    </div>
  );
}
