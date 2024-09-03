import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion,useAnimation } from 'framer-motion';
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import RSMSimage from './Images/RSMS.jpg'

interface Project {
  title: string;
  description: string;
  image: typeof RSMSimage;
  projectUrl:[string,string];
  githubUrl: string;
}

interface SwipeableDivProps {
  projects_list: Project[];
}

const ProjectSwipeableDiv: React.FC<SwipeableDivProps> = ({ projects_list }) => {
  const [currentProject, setCurrentProject] = useState(0);
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
        setCurrentProject((prev) => Math.min(prev + 1, projects_list.length - 1));
      } else if (offsetX > movementThreshold) {
        setCurrentProject((prev) => Math.max(prev - 1, 0));
      }
      setIsDragging(false);
      setOffsetX(0);
    }
  }, [isDragging, offsetX, projects_list.length]);

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
        setCurrentProject((prev) => Math.min(prev + 1, projects_list.length - 1));
      } else if (offsetX > movementThreshold) {
        setCurrentProject((prev) => Math.max(prev - 1, 0));
      }
      setIsDragging(false);
      setOffsetX(0);
    }
  }, [isDragging, offsetX, projects_list.length]);

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
    <motion.div className={`lg:px-5 py-3 relative overflow-hidden`} animate={controls} ref={ref} initial={{ opacity: 0, y: 50 }} >
      <div ref={containerRef} className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentProject * 100}%)` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >

        {projects_list.map((project, index) => (

          <motion.div className={` flex-shrink-0 w-full py-3 lg:px-5 `} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
            key={index}
            transition={{ duration: 0.3 }}
          >
            <div className='lg:mx-10 px-5' >
              <div className='max-w-screen-md mx-auto text-center item-center place-content-center flex flex-col'>
                <div className='flex items-center place-content-center rounded-sm mb-5'><Image alt=""  src={project.image} height={100} width={550} sizes='100vw' style={{objectFit:'contain'}} quality={100}></Image></div>
                <div className={'flex flex-col justify-center text-center'}>
                  <div className="font-bold  sm:text-lg lg:text-2xl mb-3 text-white ">{project.title}</div>
                  <p className="text-neutral-200 lg:font-light lg:text-md xl:text-lg 2xl:text-xl">{project.description}</p>
                </div>

                <div className="px-6 pt-6 pb-4 place-content-center flex flex-col lg:flex-row ">

                  <a href={project.projectUrl[1]} target="_blank" rel="" className={`hover:bg-red-900 ${project.projectUrl[0]} justify-center rounded-sm bg-red-1 m-2 transition-colors duration-200 text-white font-bold py-2 px-2 lg:px-4  inline-flex items-center`}>
                    <ExternalLink size={16} className="mr-2" />
                    View Project
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="" className="bg-neutral-800 m-2 justify-center rounded-sm hover:bg-neutral-600 transition-colors duration-200 text-white font-bold py-2 px-2 lg:px-4  inline-flex items-center">
                    <Github size={16} className="mr-2" />
                    GitHub
                  </a>

                </div>
              </div>
            </div>
          </motion.div>

        ))}

      </div>

      <button
        className="absolute left-40 top-1/2 transform -translate-y-1/2 p-2 lg:block hidden text-white rounded-full"
        onClick={() => setCurrentProject((prev) => Math.max(prev - 1, 0))}
      >
        <MdKeyboardArrowLeft size={30} />
      </button>

      <button
        className="absolute right-40 top-1/2 transform -translate-y-1/2 p-2 lg:block hidden text-white rounded-full"
        onClick={() => setCurrentProject((prev) => Math.min(prev + 1, projects_list.length - 1))}
      >
        <MdOutlineKeyboardArrowRight size={30} />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {projects_list.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentProject(index)}
            className={`w-3 h-3 rounded-full ${index === currentProject ? 'bg-red-1' : 'bg-neutral-300'}`}
          />
        ))}
      </div>
      
    </motion.div>
  );
};

export default ProjectSwipeableDiv;
