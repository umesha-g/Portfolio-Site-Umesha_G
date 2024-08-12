import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';

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

export default TimelineItem;