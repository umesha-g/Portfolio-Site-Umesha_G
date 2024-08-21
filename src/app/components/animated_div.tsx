import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface MotionContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
  }

const AnimatedDivision: React.FC<MotionContainerProps> = ({
    children,
    className,
    ...props
  }) => {

    const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [] = useState<number>(0);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting && !hasAnimated) {
            controls.start({
              opacity : 1,
              transition: {duration: 0.3, ease: "easeInOut",delay:0.25},
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
        }, [controls,hasAnimated]);

    return (
        <motion.div ref={ref} initial={{ opacity: 0 }} animate={controls} className={`${className} `}>
            {children}
        </motion.div>
    );
};

export default AnimatedDivision;