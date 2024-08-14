import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import { TimeEvents } from '../../data/about_section_data/time_line_data';

const TimelineItem: React.FC<TimeEvents> = ({ year, title, description }) => {
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
    <motion.div ref={ref} initial={{ opacity: 0, x: -50 }} animate={controls} transition={{ duration: 0.6, ease: 'easeOut' }} className="flex items-center">
      <div className="z-10 lg:mx-20 mx-3 flex items-center order-1 bg-thatch-green-500  w-20 h-10 rounded-2xl">
        <h1 className="mx-auto font-semibold text-lg text-white">{year}</h1>
      </div>
      <BsArrowRight size={40} className="order-2" />
      <div className="order-3 mx-3 my-5 lg:mx-10  border-l-2 border-gray-200 rounded-lg w-8/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-white text-xl">{title}</h3>
        <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">{description}</p>
        <hr className="my-2 border-thatch-green-500 border-2 w-20" />
        
      </div>
    </motion.div>
  );
};

export default TimelineItem;