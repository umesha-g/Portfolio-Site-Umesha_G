import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { CircularSkill } from '../../data/about_section_data/circular_skill_list';

const CircularProgress: React.FC<CircularSkill> = ({ name, percentage }) => {
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
            strokeDashoffset: 2 * Math.PI * 30 * (1 - percentage / 100),
            transition: { duration: 1, ease: "easeInOut" ,delay:0.3}
          });
          controls_2.start({
            opacity: 1, y: 0 ,
            transition: { duration: 0.5, ease: "easeInOut" ,delay:0.2}
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
        observer.disconnect;
    };
  }, [controls, controls_2, controls_3,percentage, hasAnimated]);

  return (
    
    <motion.div ref={ref} initial={{ opacity: 0 }} animate={controls_3} className="flex flex-col h-40 w-32 items-center">
      <svg className="w-20 h-20">
        <circle className="text-bunker-700" strokeWidth="10" stroke="currentColor" fill="transparent" r="35" cx="40" cy="40" />
        <motion.circle className="text-thatch-green-500" strokeWidth="10" strokeLinecap="round" stroke="currentColor" fill="transparent" r="35" cx="40" cy="40" style={{strokeDasharray: 2 * Math.PI * 30, }} initial={{ strokeDashoffset: 2 * Math.PI * 30 }} animate={controls} />
        <motion.text initial={{ opacity: 0, y: 10 }} animate={controls_2} fill="white" textAnchor="middle" x="42" y="45" >{percentage}%</motion.text>
      </svg>
      <motion.span initial={{ opacity: 0, y: 10 }} animate={controls_2} className="mt-2 text-xl font-semibold">{name}</motion.span>
      
    </motion.div>
  );
};

export default CircularProgress;