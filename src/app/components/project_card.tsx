import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../data/projects/projects_list';

const ProjectCard: React.FC<Project> = ({ title, description, projectUrl, githubUrl }) => {
  return (
    <motion.div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-900" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} whileHover={{ scale: 1.05 }}>
        
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-amber-600">{title}</div>
        <p className="text-gray-100 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between">
        <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-amber-600 transition-colors duration-200 text-gray-900 font-bold py-2 px-4 rounded inline-flex items-center">
          <ExternalLink size={16} className="mr-2" />
          View Project
        </a>

        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-amber-600 transition-colors duration-200 text-white font-bold py-2 px-4 rounded inline-flex items-center">
          <Github size={16} className="mr-2" />
          GitHub
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;