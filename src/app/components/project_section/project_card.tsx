import React,{ useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '#/data/projects_data/projects_list';
import { motion, useAnimation } from 'framer-motion';
import styles from './project.module.css';

const ProjectCard: React.FC<Project> = ({ title, description, projectUrl, githubUrl }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          controls.start({ opacity: 1, y: 0 ,
            transition:{ duration: 0.6, ease: 'easeOut',delay:0.2 }
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
  }, [controls,hasAnimated]); 

  return (
    <motion.div className={`max-w-sm rounded-lg overflow-hidden shadow-lg bg-thatch-green-500`} ref={ref} initial={{ opacity: 0, y: 50 }} animate={controls}  whileHover={{ scale: 1.05 }}>
     <div className={`${styles.projback}`}> 
      <div>{/*image*/}</div>
      <div className={` px-6 py-4`}>
        <div className="font-bold text-xl mb-2 text-bunker-950 ">{title}</div>
        <p className="text-white text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between">
        <a href={projectUrl} target="_blank" rel="" className="hover:bg-white bg-bunker-300 transition-colors duration-200 text-black font-bold py-2 px-2.5 lg:px-4 rounded inline-flex items-center">
          <ExternalLink size={16} className="mr-2" />
          View Project
        </a>

        <a href={githubUrl} target="_blank" rel="" className="bg-black  hover:bg-gray-700 transition-colors duration-200 text-white font-bold py-2 px-2.5 lg:px-4 rounded inline-flex items-center">
          <Github size={16} className="mr-2" />
          GitHub
        </a>
      </div>
      </div>  
    </motion.div>
  );
};

export default ProjectCard;