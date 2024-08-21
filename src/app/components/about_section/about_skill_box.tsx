import React, { useState, useEffect, useRef } from 'react';
import {Skill,skills_list} from '#/data/about_section_data/skill_box_list'
import { motion, useAnimation } from 'framer-motion';


const SkillBox: React.FC<Skill> = ({ name, description, bgcolor }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          controls.start({ opacity: 1, y: 0 ,
            transition:{ duration: 0.6, ease: 'easeOut',delay:0.2 }
          });
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
  }, [controls,hasAnimated]); 


    return (
      <motion.div ref={ref} initial={{ opacity: 0 , y:10}} animate={controls} className={`${bgcolor} xl:h-64 my-3 lg:mx-5 lg:w-svw  p-8 rounded-sm`} >
          
          <h1 className='text-2xl font-bold'>{name}</h1>
          <p className='mt-4'>{description}</p>

      </motion.div>

    );
};

export default SkillBox;