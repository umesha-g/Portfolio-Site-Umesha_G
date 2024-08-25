import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion,useAnimation } from 'framer-motion';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import user from "#/data/Test_sec_data/Images/defaultuser.png";
import Image from 'next/image';

export interface Testimonial {
  name: string;
  image: typeof user;
  star: [string,string,string,string,string];
  feedback: string;
  from:string;
  link:string;
}

interface SwipeableDivProps {
  test_list: Testimonial[];
}

const SwipeableDiv: React.FC<SwipeableDivProps> = ({ test_list }) => {
  const [currentTest, setCurrentTest] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging) {
      setOffsetX(e.clientX - startX);
    }
  }, [isDragging, startX]);

  const handleMouseUp = useCallback(() => {
    if (isDragging) {
      const movementThreshold = 100; // Adjust as needed
      if (offsetX < -movementThreshold) {
        setCurrentTest((prev) => Math.min(prev + 1, test_list.length - 1));
      } else if (offsetX > movementThreshold) {
        setCurrentTest((prev) => Math.max(prev - 1, 0));
      }
      setIsDragging(false);
      setOffsetX(0);
    }
  }, [isDragging, offsetX, test_list.length]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (isDragging) {
      setOffsetX(e.touches[0].clientX - startX);
    }
  }, [isDragging, startX]);

  const handleTouchEnd = useCallback(() => {
    if (isDragging) {
      const movementThreshold = 100; // Adjust as needed
      if (offsetX < -movementThreshold) {
        setCurrentTest((prev) => Math.min(prev + 1, test_list.length - 1));
      } else if (offsetX > movementThreshold) {
        setCurrentTest((prev) => Math.max(prev - 1, 0));
      }
      setIsDragging(false);
      setOffsetX(0);
    }
  }, [isDragging, offsetX, test_list.length]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
          controls.start({
            opacity: 1, y: 0 ,
            transition: { duration: 0.5, ease: "easeInOut" ,delay:0.1 }
          });setHasAnimated(true);
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
  }, [controls ,hasAnimated]); 

  return (
    <motion.div animate={controls} ref={ref} initial={{ opacity: 0, y: 30 }} className={`lg:p-5 py-3 relative overflow-hidden`}>
      <div
        ref={containerRef}
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentTest * 100}%)` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {test_list.map((testimonial, index) => (

          <motion.div
            key={index}
            className={` flex-shrink-0 w-full py-3 lg:p-5 `}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className='lg:mx-10 p-5' >
            <figure className="max-w-screen-md mx-auto text-center item-center place-content-center flex-col flex">
                <svg className="w-8 h-8 mx-auto mb-3 text-neutral-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                </svg>
                <blockquote>
                    <p className="text-xl italic font-light text-neutral-300">{testimonial.feedback}</p>
                </blockquote>
                <div className="flex items-center self-center mt-3">
                    <svg className={`w-5 h-5 ${testimonial.star[0]}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className={`w-5 h-5 ${testimonial.star[1]}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className={`w-5 h-5 ${testimonial.star[2]}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className={`w-5 h-5 ${testimonial.star[3]}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className={`w-5 h-5 ${testimonial.star[4]}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                </div>
                
                <figcaption className="flex items-center justify-center mt-3 space-x-3 ">
                    <Image className="w-8 h-8 p-1 rounded-full ring-neutral-400 ring-1" src={testimonial.image} sizes='100vw' quality={100}  alt="profile picture"/>
                    <div className="flex items-center divide-x-2  divide-gray-500 ">
                        <cite className="pe-3 font-medium text-white ">{testimonial.name}</cite>
                        <cite className="ps-3 text-md text-neutral-500 "><a href={testimonial.link} target='_blank'>{testimonial.from}</a></cite>
                    </div>
                </figcaption>
            </figure>
            </div>
          </motion.div>
        ))}
      </div>
      <button
        className="absolute left-40 top-1/2 transform -translate-y-1/2 p-2 lg:block hidden text-white rounded-full"
        onClick={() => setCurrentTest((prev) => Math.max(prev - 1, 0))}
      >
        <MdKeyboardArrowLeft size={30} />
      </button>
      <button
        className="absolute right-40 top-1/2 transform -translate-y-1/2 p-2 lg:block hidden text-white rounded-full"
        onClick={() => setCurrentTest((prev) => Math.min(prev + 1, test_list.length - 1))}
      >
        <MdOutlineKeyboardArrowRight size={30} />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {test_list.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentTest(index)}
            className={`w-3 h-3 rounded-full ${index === currentTest ? 'bg-bunker-950' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SwipeableDiv;
