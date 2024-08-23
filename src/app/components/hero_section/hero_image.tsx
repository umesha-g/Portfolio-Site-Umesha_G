import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import heroImage1 from '#/assets/hero_section/DSC_0879.png';
import heroImage2 from '#/assets/hero_section/DSC_08792.png';
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
    <motion.div ref={ref} initial={{ opacity: 0 }} animate={controls}  className=" mx-0 ">
        <div className=' flex flex-col overflow-hidden'>
            <Image className='xl:mt-24 lg:mt-40 mt-32  mx-0 opacity-100' sizes='100vw'style={{width:'100%',height:'auto'}} quality={100}  alt="" src={heroImage2}/>
          </div>
    </motion.div>
    );
};

export default HeroImage;