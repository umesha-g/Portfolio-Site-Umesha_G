import React, { useState, useEffect, useRef } from 'react';
import {Skill} from '#/data/about_sec_data/skill_box_list'
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
      <motion.div ref={ref} initial={{ opacity: 0 , y:10}} animate={controls} className={`${bgcolor}  border-t-2 xl:h-80 2xl:h-64 my-6 mx-4 lg:w-10/12 lg:mx-7 pt-8 px-5 lg:px-6 rounded-sm`} >
          
          <h1 className='text-llg font-bold text-neutral-500'>{name}</h1>
          <p className='mt-6 lg:text-md xl:text-lg 2xl:text-xl text-white lg:font-light'>{description}</p>

      </motion.div>

    );
};

export default SkillBox;