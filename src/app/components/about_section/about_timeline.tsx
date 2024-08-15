import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import { TimeEvents } from '../../data/about_section_data/time_line_data';
import { FaCalendarDays } from 'react-icons/fa6';
import { TfiLineDashed } from 'react-icons/tfi';

const TimelineItem: React.FC<TimeEvents> = ({ year, title, description,visibility,Icon}) => {
  const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    controls.start({ 
                        opacity: 1, x: 0 ,
                        transition : { duration: 0.6, ease: 'easeInOut',delay:0.2 }
                    });setHasAnimated(true);
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
    <motion.div ref={ref} initial={{ opacity: 0, x: -50 }} animate={controls}  className="  ">
        <div className="order-1  border-0 rounded-lg  lg:mx-44 lg:px-6 ">
            <ol className="relative border-l-4  ml-5 h-48 lg:h-40 border-gray-200 ">                  
                <li className="mb-8 mx-3 pb-2">            
                    <span className="absolute flex items-center justify-center w-14 h-14 rounded-full -start-7 bg-thatch-green-500">
                        <Icon color='black' size='28' /> 
                    </span>
                    <span className=' text-balance'>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-white mx-10">{year} <span className={`bg-thatch-green-500  text-white text-sm font-medium mx-5 ${visibility} px-3 py-0.5 rounded `}>Latest</span></h3>
                        <h4 className="block mb-2 text-lg font-normal  text-gray-300  ml-10">{title}</h4>
                        <p className="mb-4 text-base font-normal text-gray-500  ml-10">{description}</p>
                    </span>
                </li>
            </ol>
        </div>
    </motion.div>
  );
};

export default TimelineItem;