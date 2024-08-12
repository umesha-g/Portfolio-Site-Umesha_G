import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

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

  export default SkillCard;