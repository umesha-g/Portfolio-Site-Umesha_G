import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import heroImage from '#/assets/hero_section/hero.png';
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
                        opacity: 1, 
                        transition:{ duration: 0.3, ease: 'easeInOut',delay:0.5 }
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
    <motion.div ref={ref} initial={{ opacity: 0 }} animate={controls}  className="flex mx-0 items-center">
        <div className=' overflow-hidden'>
            <Image className=' mt-5 sm:mt-10 md:mt-12 lg:mt-20 xl:mt-8 mx-0' alt="" height={1000} width={1000}  src={heroImage}/>
          </div>
    </motion.div>
    );
};

export default HeroImage;