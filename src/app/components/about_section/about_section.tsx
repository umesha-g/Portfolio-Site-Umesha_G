import React, { useState, useEffect, useRef } from 'react';
import { Skill,skills_list } from '../../data/about_section_data/swipable_skills_list';
import SwipeableDiv from './about_swipable_card';
import TimelineItem from './about_timeline';
import SkillCard from './about_linear_sliders';
import CircularProgress from './about_circular_sliders';
import {LinearSkill,linear_skill_list} from '../../data/about_section_data/linear_skill_list';
import {CircularSkill, circular_skill_list } from '../../data/about_section_data/circular_skill_list';
import {TimeEvents, time_line_data } from '../../data/about_section_data/time_line_data';
import Time_Line from './about_timeline';
import Numberload from './about_number';


export default function About_Section(): JSX.Element {
  const [] = useState<number>(0);
  return (
    <div className=" lg:py-28 py-20">
      <div className="container mx-auto px-4 overflow-hidden">
        <h2 className="lg:text-4xl text-3xl font-bold mb-8 text-center text-thatch-green-500">About Me</h2>

       {/*<Numberload Number={1000} />*/}

        <div className='text-xl lg:mx-32 mx-14 my-20 text-balance'>
          <p >I am ...</p>
        </div>

        <div className="relative border-2  border-thatch-green-500 rounded-lg p-10 mb-10">
          <h3 className="text-2xl font-semibold mb-10">Experience & Education</h3>
          {time_line_data.map((timeEvents: TimeEvents, index: number) => (
            <Time_Line key={index} {... timeEvents} />
          ))}
        </div>

        <div className='wrap relative border-thatch-green-500 border-2 rounded-lg p-10'>
          
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>

          <div className="flex flex-wrap justify-center mb-10 grid-cols-2 lg:grid-cols-4  gap-4">
          {circular_skill_list.map((circularSkill: CircularSkill, index: number) => (
            <CircularProgress key={index} {... circularSkill} />
          ))}
          </div>

          <div className="mb-10 ">
            <SwipeableDiv skills_list={skills_list} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {linear_skill_list.map((linearSkill: LinearSkill, index: number) => (
              <SkillCard key={index} {... linearSkill} />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
