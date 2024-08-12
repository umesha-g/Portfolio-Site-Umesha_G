import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import { AiOutlineMore } from 'react-icons/ai';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description }) => (
  <div className=' flex  items-center'>
    <div className="z-10 lg:mx-20 mx-3 flex items-center order-1 bg-gray-800 shadow-xl w-20 h-10 rounded-2xl">
      <h1 className="mx-auto font-semibold text-lg text-white">{year}</h1>
    </div>
    <BsArrowRight size={40} className='order-2'/>
    <div className="order-3 mx-3 my-5 lg:mx-10 bg-gray-400 rounded-lg shadow-xl w-8/12 px-6 py-4">
      <h3 className="mb-3 font-bold text-gray-800 text-xl">{title}</h3>
      <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">{description}</p>
    </div>
  </div>
);

interface SkillCardProps {
  skill: string;
  level: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, level }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold mb-2">{skill}</h3>
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${level}%` }}></div>
    </div>
  </div>
);

interface CircularProgressProps {
  skill: string;
  percentage: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ skill, percentage }) => (
  <div className="flex flex-col items-center">
    <svg className="w-20 h-20">
      <circle
        className="text-gray-300"
        strokeWidth="5"
        stroke="currentColor"
        fill="transparent"
        r="30"
        cx="40"
        cy="40"
      />
      <circle
        className="text-blue-600"
        strokeWidth="5"
        strokeLinecap="round"
        stroke="currentColor"
        fill="transparent"
        r="30"
        cx="40"
        cy="40"
        style={{
          strokeDasharray: `${2 * Math.PI * 30}`,
          strokeDashoffset: `${2 * Math.PI * 30 * (1 - percentage / 100)}`,
        }}
      />
    </svg>
    <span className="mt-2 text-xl font-semibold">{skill}</span>
    <span className="text-sm text-gray-500">{percentage}%</span>
  </div>
);

interface Skill {
  name: string;
  description: string;
}

export default function About_Section(): JSX.Element {
  const [currentSkill, setCurrentSkill] = useState<number>(0);
  const skills: Skill[] = [
    {
      name: 'JavaScript',
      description: 'Proficient in modern JavaScript (ES6+), with experience in building interactive web applications and working with various JS frameworks and libraries.'
    },
    {
      name: 'React',
      description: 'Experienced in developing responsive and efficient user interfaces using React, including state management with hooks and context API.'
    },
    {
      name: 'Next.js',
      description: 'Skilled in server-side rendering and static site generation using Next.js, enhancing web application performance and SEO.'
    },
    {
      name: 'Tailwind CSS',
      description: 'Adept at rapidly building custom designs with Tailwind CSS, creating responsive and visually appealing user interfaces.'
    }
  ];

  return (
    <div className="lg:py-28 py-20">
      <div className="container mx-auto px-4">
        <h2 className="lg:text-4xl text-3xl font-bold mb-8 text-center">About Me</h2>
        
        <div className="wrap relative border-2 rounded-lg p-10 mb-10">
          <h3 className="text-2xl font-semibold mb-4">Experience & Education</h3>
          <TimelineItem year="2022" title="Frontend Developer" description="Worked on various React and Next.js projects" />
          <TimelineItem year="2020" title="Computer Science Degree" description="Graduated with honors" />
          <TimelineItem year="2018" title="First Coding Bootcamp" description="Learned the basics of web development" />
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <motion.div
            key={currentSkill}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h4 className="text-xl font-semibold mb-2">{skills[currentSkill].name}</h4>
            <p className="mb-4">{skills[currentSkill].description}</p>
          </motion.div>
          <div className="flex justify-center mt-4">
            {skills.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSkill(index)}
                className={`mx-1 w-3 h-3 rounded-full ${index === currentSkill ? 'bg-blue-600' : 'bg-gray-300'}`}
              />
            ))}
          </div>
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
  );
}