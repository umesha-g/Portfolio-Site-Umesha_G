import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import { TimeEvents } from '../../data/about_section_data/time_line_data';
import { FaCalendarDays } from 'react-icons/fa6';
import { TfiLineDashed } from 'react-icons/tfi';

const TimelineItem: React.FC<TimeEvents> = ({ year, title, description,visibility}) => {
  const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    controls.start({ opacity: 1, x: 0 });
                    setHasAnimated(true);
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
    }, [controls, hasAnimated]); 
    
  return (
    <motion.div ref={ref} initial={{ opacity: 0, x: -50 }} animate={controls} transition={{ duration: 0.6, ease: 'easeOut' }} className=" flex justify-center items-center">
        <div className="order-3 mx-3 lg:mx-20 border-0 rounded-lg w-80 px-2 lg:px-6 ">
            <ol className="relative border-l-2 border-gray-200 ">                  
                <li className="mb-6 ms-6">            
                    <span className="absolute flex items-center justify-center w-10 h-10 rounded-full -start-5 bg-thatch-green-500">
                        <FaCalendarDays color='black' size='20' /> 
                    </span>
                    
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-white mx-10">{year} <span className={`bg-thatch-green-500  text-white text-sm font-medium mx-5 ${visibility} px-3 py-0.5 rounded `}>Latest</span></h3>
                    <time className="block mb-2 text-lg font-normal leading-none text-gray-400  mx-10">{title}</time>
                    <p className="mb-4 text-base font-normal text-gray-500  mx-10">{description}</p>
                </li>
            </ol>
        </div>
    </motion.div>
  );
};

export default TimelineItem;