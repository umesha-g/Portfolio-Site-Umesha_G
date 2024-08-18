import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { TimeEvents } from '#/data/about_section_data/time_line_data';

const TimelineItem: React.FC<TimeEvents> = ({ year, title, description,visibility,Icon}) => {
    const controls = useAnimation();
    const controls_2 = useAnimation();
    const ref = useRef<HTMLDivElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    controls.start({ 
                        opacity: 1, y: 0 ,
                        transition : { duration: 0.6, ease: 'easeInOut',delay:0.1 }
                    });
                    controls_2.start({ 
                        opacity: 1 ,
                        transition : { duration: 0.6, ease: 'easeInOut',delay:0.5 }
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
    }, [controls,controls_2, hasAnimated]); 
    
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: -10 }} animate={controls}  className="  ">
        <div className="order-1  border-0 rounded-lg  lg:mx-44 lg:px-6 ">
            <ol className="relative border-l-8  ml-5 pb-3 h-auto lg:pb-5 border-bunker-700 ">                  
                <li className=" mx-3 pb-3">            
                    <span className="absolute flex items-center justify-center w-14 h-14 rounded-full -start-8 bg-thatch-green-500">
                        <Icon color='black' size='28' /> 
                    </span>
                   
                    <span className=' text-balance'>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-white mx-10">{year} <span className={`bg-thatch-green-500  text-white text-sm font-medium mx-5 ${visibility} px-3 py-0.5 rounded `}>Latest</span></h3>
                        <h4 className="block mb-2 text-lg font-normal  text-gray-300  ml-10">{title}</h4>
                        <p className="mb-4 text-base font-normal text-gray-500  ml-10">{description}</p>
                    </span>
                    <motion.span initial={{ opacity: 0 }} animate={controls_2} className="absolute flex items-center justify-center w-4 h-4 rounded-full mt-6 lg:mt-8 -start-3  bg-thatch-green-500"></motion.span>
                </li>
            </ol>
            
        </div>
    </motion.div>
  );
};

export default TimelineItem;