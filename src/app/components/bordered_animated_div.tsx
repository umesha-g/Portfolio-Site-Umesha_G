import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface MotionContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
  }

const BorderdAnimatedDivision: React.FC<MotionContainerProps> = ({
    children,
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
              transition: {duration: 0.3, ease: "easeInOut"},
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
        <motion.div ref={ref} initial={{ opacity: 0 }} animate={controls} className={`relative border-2 bg-transparent border-thatch-green-500 rounded-lg p-12 my-14 bg-gray-100`}>
          {children}
        </motion.div>
    );
};

export default BorderdAnimatedDivision;