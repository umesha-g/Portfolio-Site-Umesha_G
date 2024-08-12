import React, { useState, useEffect, useRef } from 'react';
import { Skill,skills_list } from '../data/about/skills_list';
import SwipeableDiv from './swipable_card';
import TimelineItem from './about_timeline';
import SkillCard from './skills_linear_sliders';
import CircularProgress from './skills_circular_sliders';

export default function About_Section(): JSX.Element {
  const [] = useState<number>(0);
  return (
    <div className=" lg:py-28 py-20">
      <div className="container mx-auto px-4">
        <h2 className="lg:text-4xl text-3xl font-bold mb-8 text-center text-amber-600">About Me</h2>

        <div className="wrap relative border-2 border-slate-200 rounded-lg p-10 mb-10">
          <h3 className="text-2xl font-semibold mb-4">Experience & Education</h3>
          <TimelineItem year="2022" title="Frontend Developer" description="Worked on various React and Next.js projects" />
          <TimelineItem year="2020" title="Computer Science Degree" description="Graduated with honors" />
          <TimelineItem year="2018" title="First Coding Bootcamp" description="Learned the basics of web development" />
        </div>

        <div className='wrap relative border-slate-200 border-2 rounded-lg p-10'>
          <div className="mb-10 ">
              <h3 className="text-2xl font-semibold mb-4">Skills</h3>
              <SwipeableDiv skills_list={skills_list} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <SkillCard skill="HTML/CSS" level={90} />
          <SkillCard skill="JavaScript" level={85} />
          <SkillCard skill="React" level={80} />
          <SkillCard skill="Next.js" level={75} />
          <SkillCard skill="Tailwind CSS" level={85} />
          <SkillCard skill="Git" level={70} />
          </div>

          <div className="flex flex-wrap justify-center gap-8">
          <CircularProgress skill="TypeScript" percentage={70} />
          <CircularProgress skill="Node.js" percentage={65} />
          <CircularProgress skill="GraphQL" percentage={60} />
          <CircularProgress skill="Docker" percentage={55} />
          </div>
        </div>
      </div>
    </div>
  );
}
