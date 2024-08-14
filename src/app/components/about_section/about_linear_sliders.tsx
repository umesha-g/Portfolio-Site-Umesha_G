import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { LinearSkill } from '../../data/about_section_data/linear_skill_list';

  const SkillCard: React.FC<LinearSkill> = ({ name, Level }) => {
    const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting && !hasAnimated) {
            controls.start({
              width: `${Level}%`,
              transition: { duration: 1.5, ease: "easeInOut" }
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
    }, [controls, Level ,hasAnimated]); 
  
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <div ref={ref} className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-slate-900">
          <motion.div className="bg-amber-600 h-2.5 rounded-full" initial={{ width: '0%' }} animate={controls}/>
        </div>
      </div>
    );
  };

  export default SkillCard;