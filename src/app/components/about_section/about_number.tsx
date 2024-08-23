
import { motion , useMotionValue, useTransform, animate } from "framer-motion";
import React,{ useState, useEffect, useRef  } from "react";
import { useAnimation } from 'framer-motion';

interface Number {
    Number: number;
  }

const Numberload: React.FC<Number> = ({ Number}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          {const animation = animate(count, Number, { duration: 1.5,delay : 0.5 });};
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
  }, [Number,count,hasAnimated]);

  return (
    <div ref={ref}>
        <motion.h1  className="text-4xl font-bold text-red-1">
          {rounded} 
        </motion.h1>
    </div>
  );
};

export default Numberload;