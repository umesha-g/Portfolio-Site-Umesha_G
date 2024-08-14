import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface CircularProgressProps {
  skill: string;
  percentage: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ skill, percentage }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          controls.start({
            strokeDashoffset: 2 * Math.PI * 30 * (1 - percentage / 100),
            transition: { duration: 1, ease: "easeInOut" }
          });setHasAnimated(true);
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
  }, [controls, percentage, hasAnimated]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <svg className="w-20 h-20">
        <circle className="text-gray-300" strokeWidth="5" stroke="currentColor" fill="transparent" r="30" cx="40" cy="40" />
        <motion.circle className="text-slate-900" strokeWidth="5" strokeLinecap="round" stroke="currentColor" fill="transparent" r="30" cx="40" cy="40" style={{strokeDasharray: 2 * Math.PI * 30, }} initial={{ strokeDashoffset: 2 * Math.PI * 30 }} animate={controls} />
      </svg>
      <span className="mt-2 text-xl font-semibold">{skill}</span>
      <span className="text-sm text-gray-500">{percentage}%</span>
    </div>
  );
};

export default CircularProgress;