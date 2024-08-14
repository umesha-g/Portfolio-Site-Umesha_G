import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';

interface Skill {
  name: string;
  description: string;
}

interface SwipeableDivProps {
  skills_list: Skill[];
}

const SwipeableDiv: React.FC<SwipeableDivProps> = ({ skills_list }) => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

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
        setCurrentSkill((prev) => Math.min(prev + 1, skills_list.length - 1));
      } else if (offsetX > movementThreshold) {
        setCurrentSkill((prev) => Math.max(prev - 1, 0));
      }
      setIsDragging(false);
      setOffsetX(0);
    }
  }, [isDragging, offsetX, skills_list.length]);

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
        setCurrentSkill((prev) => Math.min(prev + 1, skills_list.length - 1));
      } else if (offsetX > movementThreshold) {
        setCurrentSkill((prev) => Math.max(prev - 1, 0));
      }
      setIsDragging(false);
      setOffsetX(0);
    }
  }, [isDragging, offsetX, skills_list.length]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <div className="relative rounded-lg overflow-hidden shadow-md">
      <div
        ref={containerRef}
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentSkill * 100}%)` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {skills_list.map((skill, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-full bg-thatch-green-500 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className='lg:mx-20 ' >
            <h4 className="text-xl text-white font-semibold mb-2">{skill.name}</h4>
            <p className="mb-4  text-white ">{skill.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <button
        className="absolute left-5 top-1/2 transform -translate-y-1/2 p-2 lg:block hidden text-white rounded-full"
        onClick={() => setCurrentSkill((prev) => Math.max(prev - 1, 0))}
      >
        <MdKeyboardArrowLeft size={24} />
      </button>
      <button
        className="absolute right-5 top-1/2 transform -translate-y-1/2 p-2 lg:block hidden text-white rounded-full"
        onClick={() => setCurrentSkill((prev) => Math.min(prev + 1, skills_list.length - 1))}
      >
        <MdOutlineKeyboardArrowRight size={24} />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {skills_list.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSkill(index)}
            className={`w-3 h-3 rounded-full ${index === currentSkill ? 'bg-ebony-950' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SwipeableDiv;
