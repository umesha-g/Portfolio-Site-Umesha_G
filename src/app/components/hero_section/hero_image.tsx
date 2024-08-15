import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import heroImage from '@/app/UI/Images/hero/hero.png';
import Image from 'next/image';


const HeroImage: React.FC = () => {
    const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    controls.start({ 
                        opacity: 1, x: 0, 
                        transition:{ duration: 0.6, ease: 'easeInOut' }
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
    }, [controls, hasAnimated]);  
 

    return (
    <motion.div ref={ref} initial={{ opacity: 0, x: -50 }} animate={controls}  className="flex items-center">
        <div className=' overflow-hidden'>
            <Image className=' mt-20 md:mt-28 xl:mt-8 ' alt="" height={900} width={900}  src={heroImage}/>
          </div>
    </motion.div>
    );
};

export default HeroImage;