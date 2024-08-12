import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import { Skill,skills_list } from '../data/about/skills_list';
import SwipeableDiv from './swipable_card';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, x: 0 });
        } else {
          controls.set({ opacity: 0, x: -50 });
        }
      },
      { threshold: 0.2 }
    );
  
    if (ref.current) {
      observer.observe(ref.current);
    }
  
    return () => {
      observer.disconnect();
    };
  }, [controls]);  

  return (
    <motion.div ref={ref} initial={{ opacity: 0, x: -50 }} animate={controls} transition={{ duration: 0.6, ease: 'easeOut' }} className="flex items-center">
      <div className="z-10 lg:mx-20 mx-3 flex items-center order-1 bg-amber-600 shadow-xl w-20 h-10 rounded-2xl">
        <h1 className="mx-auto font-semibold text-lg text-white">{year}</h1>
      </div>
      <BsArrowRight size={40} className="order-2" />
      <div className="order-3 mx-3 my-5 lg:mx-10 bg-white  border-2 rounded-lg shadow-lg w-8/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-gray-800 text-xl">{title}</h3>
        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">{description}</p>
      </div>
    </motion.div>
  );
};

interface SkillCardProps {
    skill: string;
    level: number;
  }
  
  const SkillCard: React.FC<SkillCardProps> = ({ skill, level }) => {
    const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            controls.start({
              width: `${level}%`,
              transition: { duration: 1.5, ease: "easeInOut" }
            });
          } else {
            controls.set({ width: '0%' });
          }
        },
        { threshold: 0.2 }
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        observer.disconnect();
      };
    }, [controls, level]); 
  
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">{skill}</h3>
        <div ref={ref} className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-slate-900">
          <motion.div className="bg-amber-600 h-2.5 rounded-full" initial={{ width: '0%' }} animate={controls}/>
        </div>
      </div>
    );
  };

  interface CircularProgressProps {
    skill: string;
    percentage: number;
  }
  
  const CircularProgress: React.FC<CircularProgressProps> = ({ skill, percentage }) => (
    <div className="flex flex-col items-center">
      <svg className="w-20 h-20">
        <circle className="text-gray-300" strokeWidth="5" stroke="currentColor" fill="transparent" r="30" cx="40" cy="40"/>
        <circle
          className="text-slate-900" strokeWidth="5" strokeLinecap="round" stroke="currentColor" fill="transparent" r="30" cx="40" cy="40" style={{ strokeDasharray: `${2 * Math.PI * 30}`, strokeDashoffset: `${2 * Math.PI * 30 * (1 - percentage / 100)}`,}}/>
      </svg>
      <span className="mt-2 text-xl font-semibold">{skill}</span>
      <span className="text-sm text-gray-500">{percentage}%</span>
    </div>
  );
  

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
