import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { LinearSkill } from '../../data/about_section_data/linear_skill_list';

  const SkillCard: React.FC<LinearSkill> = ({ name, Level }) => {
    const controls = useAnimation();
    const controls_2 = useAnimation();
    const controls_3 = useAnimation();
    const ref = useRef<HTMLDivElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting && !hasAnimated) {
            controls.start({
              width: `${Level}%`,
              transition: { duration: 1.5, ease: "easeInOut",delay:0.4 }
            });
            controls_2.start({
              opacity: 1, x: 0 ,
              transition: { duration: 0.5, ease: "easeInOut",delay:0.3 }
            });
            controls_3.start({
              opacity: 1 ,
              transition: { duration: 0.5, ease: "easeInOut" ,delay:0.1}
            });
            setHasAnimated(true);
          }
        },
        { threshold: 0.1 }
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        observer.disconnect();
      };
    }, [controls,controls_2,controls_3 , Level ,hasAnimated]); 
  
    return (
      <motion.div ref={ref} initial={{ opacity: 0 }} animate={controls_3} className=" p-4 rounded-lg ">
        <motion.h3 initial={{ opacity: 0, x: -10 }} animate={controls_2} className="text-lg font-semibold ml-1 mb-2">{name}</motion.h3>
        <div  className="w-full bg-white rounded-full h-2.5">
          <motion.div className="bg-thatch-green-500 h-2.5 rounded-full" initial={{ width: '0%' }} animate={controls}/>
        </div>
      </motion.div>
    );
  };

  export default SkillCard;